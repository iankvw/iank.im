<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import rawSubjects from '@/assets/data/archive.json'

// vue-i18n 반응형 locale ('ko' | 'en' 등)
const { locale } = useI18n()

/** @type {import('vue').Ref<Array>} 전체 과목 및 과제 데이터 */
const subjects = ref(rawSubjects)

/** 현재 선택된 과목 ID */
const selectedSubjectId = ref(null)

/** 현재 선택된 과제 ID */
const selectedAssignmentId = ref(null)

/** 선택된 과목 객체 */
const currentSubject = computed(() => {
  return subjects.value.find((s) => s.subjectId === selectedSubjectId.value)
})

/** 선택된 과목의 과제 목록 */
const currentAssignments = computed(() => {
  return currentSubject.value ? (currentSubject.value.archive || []) : []
})

/** 오른쪽 iframe에 표시할 현재 선택된 과제 객체 */
const currentAssignment = computed(() => {
  return currentAssignments.value.find((a) => a.id === selectedAssignmentId.value)
})

/**
 * 과목 선택 함수 (main 지정 과제 또는 첫 번째 과제 자동 선택)
 * @param {string} subjectId - 선택한 과목 식별자
 */
const selectSubject = (subjectId) => {
  selectedSubjectId.value = subjectId

  // 선택한 과목 데이터 찾기
  const targetSubject = subjects.value.find((s) => s.subjectId === subjectId)

  if (!targetSubject || !targetSubject.archive || targetSubject.archive.length === 0) {
    selectedAssignmentId.value = null
    return
  }

  // 1. main 필드가 존재하고, 해당 id를 가진 과제가 archive 배열에 있는지 검색
  const mainAssignment = targetSubject.archive.find((a) => a.id === targetSubject.main)

  if (mainAssignment) {
    // main으로 지정된 과제 선택
    selectedAssignmentId.value = mainAssignment.id
  } else {
    // 2. main이 없거나 잘못된 id일 경우 첫 번째 과제 선택 (Fallback)
    selectedAssignmentId.value = targetSubject.archive[0].id
  }
}

/** 과목 목록으로 돌아가기 */
const backToSubjects = () => {
  selectedSubjectId.value = null
  selectedAssignmentId.value = null
}

/** 과제 선택 */
const selectAssignment = (assignmentId) => {
  selectedAssignmentId.value = assignmentId
}
</script>

<template>
  <div class="archive-container">
    <!-- 👈 1. 왼쪽 사이드바 영역 -->
    <aside class="sidebar">
      <!-- 1단계: 과목 목록 -->
      <div v-if="!selectedSubjectId" class="subject-list-view">
        <h3>📚 과목 목록</h3>
        <ul>
          <li 
            v-for="subject in subjects" 
            :key="subject.subjectId"
            class="subject-item"
            @click="selectSubject(subject.subjectId)"
          >
            <span class="name">{{ subject.subjectName[locale] || subject.subjectName.ko }}</span>
            <span class="count">({{ subject.archive ? subject.archive.length : 0 }})</span>
          </li>
        </ul>
      </div>

      <!-- 2단계: 과제 목록 -->
      <div v-else class="assignment-list-view">
        <button class="back-btn" @click="backToSubjects">
          ← 과목 목록으로 돌아가기
        </button>

        <h3>{{ currentSubject?.subjectName[locale] || currentSubject?.subjectName.ko }}</h3>

        <ul v-if="currentAssignments.length > 0">
          <li 
            v-for="assignment in currentAssignments" 
            :key="assignment.id"
            :class="['assignment-item', { active: assignment.id === selectedAssignmentId }]"
            @click="selectAssignment(assignment.id)"
          >
            {{ assignment.title[locale] || assignment.title.ko }}
          </li>
        </ul>
        <p v-else class="empty-msg">등록된 과제가 없습니다.</p>
      </div>
    </aside>

    <!-- 👉 2. 오른쪽 메인 영역 (과제 웹뷰 & 상세 정보) -->
    <main class="content-area">
      <div v-if="currentAssignment" class="assignment-detail">
        <!-- 과제 상단 헤더 정보 -->
        <header class="assignment-header">
          <h2>{{ currentAssignment.title[locale] || currentAssignment.title.ko }}</h2>
          <p v-if="currentAssignment.description" class="desc">
            {{ currentAssignment.description[locale] || currentAssignment.description.ko }}
          </p>
          <div v-if="currentAssignment.tags?.length" class="tag-group">
            <span v-for="tag in currentAssignment.tags" :key="tag" class="tag">
              #{{ tag }}
            </span>
          </div>
        </header>

        <!-- 과제 HTML 결과물 출력 iframe -->
        <div class="iframe-wrapper">
          <iframe 
            :src="currentAssignment.filePath" 
            title="과제 웹뷰"
            class="archive-iframe"
          ></iframe>
        </div>
      </div>

      <!-- 과제가 선택되지 않았을 때 안내 화면 -->
      <div v-else class="placeholder">
        <p>과제가 선택되지 않았습니다</p>
      </div>
    </main>
  </div>
</template>

<style scoped>
.archive-container {
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

/* 사이드바 스타일 */
.sidebar {
  width: 280px;
  padding: 16px;
  border-right: 1px solid #ddd;
  background: #f9f9f9;
  overflow-y: auto;
}
.subject-item, .assignment-item {
  padding: 10px;
  margin-bottom: 6px;
  cursor: pointer;
  border-radius: 4px;
  background: #fff;
  border: 1px solid #eee;
  display: flex;
  justify-content: space-between;
}
.subject-item:hover, .assignment-item:hover {
  background: #f0f0f0;
}
.assignment-item.active {
  background: #e3f2fd;
  border-color: #2196f3;
  font-weight: bold;
}
.back-btn {
  width: 100%;
  padding: 8px;
  margin-bottom: 12px;
  cursor: pointer;
  background: #eee;
  border: none;
  border-radius: 4px;
}
.empty-msg {
  color: #888;
  font-size: 14px;
}

/* 오른쪽 메인 영역 스타일 */
.content-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #fff;
}
.assignment-detail {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.assignment-header {
  padding: 16px 24px;
  border-bottom: 1px solid #eee;
  background: #fafafa;
}
.assignment-header h2 {
  margin: 0 0 8px 0;
  font-size: 20px;
}
.assignment-header .desc {
  margin: 0 0 8px 0;
  color: #666;
  font-size: 14px;
}
.tag-group {
  display: flex;
  gap: 6px;
}
.tag {
  font-size: 12px;
  background: #e0e0e0;
  padding: 2px 8px;
  border-radius: 12px;
  color: #444;
}
.iframe-wrapper {
  flex: 1;
  width: 100%;
}
.archive-iframe {
  width: 100%;
  height: 100%;
  border: none;
}
.placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #888;
  font-size: 16px;
}
</style>