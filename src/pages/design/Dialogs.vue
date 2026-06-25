<template>
  <div class="dialogs-page">
    <section class="page-hero mb-12">
      <div class="d-flex align-center mb-4">
        <v-icon icon="mdi-message-text-outline" size="28" color="primary" class="mr-3" aria-hidden="true" />
        <span class="text-overline text-primary font-weight-bold letter-spacing-2">
          COMPONENTS · DIALOGS
        </span>
      </div>
      <h1 class="text-h3 font-weight-black mb-3">Dialogs & Overlays</h1>
      <p class="section-description">
        사용자의 주의를 환기하고 중요한 의사결정을 유도합니다.
        필수적인 동작만 수행하도록 설계하여, 사용자의 태스크 흐름을 방해하지 않아야 합니다.
      </p>
    </section>

    <section class="component-section mb-16">
      <div class="section-header mb-6">
        <h2 class="text-h4 font-weight-bold mb-2">Dialog Types</h2>
        <p class="text-body-2 text-medium-emphasis">
          상황에 맞춰 사용하는 4가지 핵심 다이얼로그입니다.
        </p>
      </div>

      <v-card class="bordered-card pa-6">
        <div class="d-flex flex-wrap align-center ga-3">
          <v-btn color="primary" variant="flat" @click="basicDialog = true">
            <v-icon icon="mdi-message-text" class="mr-2" aria-hidden="true" />
            기본 Dialog
          </v-btn>

          <v-btn color="error" variant="tonal" @click="confirmDialog = true">
            <v-icon icon="mdi-help-circle" class="mr-2" aria-hidden="true" />
            확인 Dialog
          </v-btn>

          <v-btn color="primary" variant="tonal" @click="formDialog = true">
            <v-icon icon="mdi-form-textbox" class="mr-2" aria-hidden="true" />
            폼 Dialog
          </v-btn>

          <v-btn color="primary" variant="outlined" @click="fullDialog = true">
            <v-icon icon="mdi-fullscreen" class="mr-2" aria-hidden="true" />
            전체화면 Dialog
          </v-btn>
        </div>
      </v-card>
    </section>

    <v-dialog v-model="basicDialog" max-width="500">
      <v-card class="dialog-card">
        <v-card-title class="dialog-title">기본 Dialog</v-card-title>
        <v-card-text class="dialog-text">
          이것은 기본 대화상자입니다. 중요한 정보나 알림을 사용자에게 전달할 때 사용합니다.
        </v-card-text>
        <v-card-actions class="dialog-actions">
          <v-spacer />
          <v-btn variant="text" @click="basicDialog = false">Disagree</v-btn>
          <v-btn color="primary" variant="flat" @click="basicDialog = false">Agree</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="confirmDialog" max-width="400">
      <v-card class="dialog-card text-center">
        <v-card-text class="dialog-text pt-8">
          <v-icon icon="mdi-alert-circle-outline" size="64" color="error" class="mb-4" aria-hidden="true" />
          <div class="dialog-title mb-2">정말 삭제하시겠습니까?</div>
          <div class="text-body-2 text-medium-emphasis">
            이 작업은 되돌릴 수 없습니다. 정말로 삭제하시겠습니까?
          </div>
        </v-card-text>
        <v-card-actions class="dialog-actions justify-center pb-6">
          <v-btn variant="text" @click="confirmDialog = false">Cancel</v-btn>
          <v-btn color="error" variant="flat" @click="confirmDialog = false">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="formDialog" max-width="500">
      <v-card class="dialog-card">
        <v-card-title class="dialog-title">새 항목 만들기</v-card-title>
        <v-card-text class="dialog-text">
          <v-text-field label="제목" variant="outlined" placeholder="제목을 입력하세요" color="primary" />
          <v-textarea label="설명" variant="outlined" rows="3" placeholder="설명을 입력하세요" color="primary" />
          <v-select label="카테고리" variant="outlined" :items="['디자인', '개발', '기획']" color="primary" />
        </v-card-text>
        <v-card-actions class="dialog-actions">
          <v-spacer />
          <v-btn variant="text" @click="formDialog = false">취소</v-btn>
          <v-btn color="primary" variant="flat" @click="formDialog = false">저장</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="fullDialog" fullscreen>
      <v-card>
        <v-toolbar color="transparent" elevation="0">
          <v-btn icon="mdi-close" @click="fullDialog = false" aria-label="Close" />
          <v-toolbar-title>전체화면 대화상자</v-toolbar-title>
          <v-spacer />
          <v-toolbar-items>
            <v-btn variant="text" @click="fullDialog = false">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-container class="pa-8">
          <div class="text-h4 font-weight-bold mb-4">Settings</div>
          <p class="text-body-1 text-medium-emphasis">
            전체 화면을 사용하는 대형 폼이나 설정을 다룰 때 적합합니다.
          </p>
        </v-container>
      </v-card>
    </v-dialog>

    <section class="component-section mb-16">
      <div class="section-header mb-6">
        <h2 class="text-h4 font-weight-bold mb-2">Snackbar</h2>
        <p class="text-body-2 text-medium-emphasis">
          짧은 메시지를 화면 하단에 표시하는 피드백 컴포넌트입니다.
        </p>
      </div>

      <v-card class="bordered-card pa-6">
        <div class="d-flex flex-wrap align-center ga-3">
          <v-btn color="success" variant="flat" @click="showSnackbar('success')">성공</v-btn>
          <v-btn color="error" variant="flat" @click="showSnackbar('error')">오류</v-btn>
          <v-btn color="info" variant="flat" @click="showSnackbar('info')">정보</v-btn>
          <v-btn color="warning" variant="flat" @click="showSnackbar('warning')">경고</v-btn>
          <v-btn variant="outlined" @click="showSnackbar('action')">액션 포함</v-btn>
          <v-btn variant="tonal" @click="showSnackbar('multiline')">멀티라인</v-btn>
        </div>
      </v-card>

      <v-snackbar v-model="snackbar.show" :color="snackbar.color" :timeout="snackbar.timeout" location="bottom">
        <span style="white-space: pre-wrap;">{{ snackbar.text }}</span>
        <template #actions>
          <v-btn variant="text" :color="getSnackbarButtonColor(snackbar.color)" @click="snackbar.show = false">
            닫기
          </v-btn>
        </template>
      </v-snackbar>
    </section>

    <section class="component-section mb-16">
      <div class="section-header mb-6">
        <h2 class="text-h4 font-weight-bold mb-2">Bottom Sheets & Menus</h2>
        <p class="text-body-2 text-medium-emphasis">
          화면 하단에서 슬라이드업되거나, 요소에 부착되는 메뉴입니다.
        </p>
      </div>

      <v-card class="bordered-card pa-6">
        <div class="d-flex flex-wrap align-center ga-3">
          <v-btn color="primary" variant="flat" @click="bottomSheet = true">
            <v-icon icon="mdi-dock-bottom" class="mr-2" aria-hidden="true" />
            Bottom Sheet 열기
          </v-btn>

          <v-menu>
            <template #activator="{ props }">
              <v-btn v-bind="props" color="primary" variant="flat" append-icon="mdi-menu-down">
                기본 메뉴
              </v-btn>
            </template>
            <v-list density="compact">
              <v-list-item prepend-icon="mdi-pencil" title="수정" />
              <v-list-item prepend-icon="mdi-content-copy" title="복제" />
              <v-divider />
              <v-list-item prepend-icon="mdi-delete" title="삭제" color="error" />
            </v-list>
          </v-menu>

          <v-menu>
            <template #activator="{ props }">
              <v-btn v-bind="props" icon="mdi-dots-vertical" variant="text" aria-label="More options" />
            </template>
            <v-list density="compact">
              <v-list-item title="설정" prepend-icon="mdi-cog" />
              <v-list-item title="도움말" prepend-icon="mdi-help-circle" />
              <v-list-item title="로그아웃" prepend-icon="mdi-logout" />
            </v-list>
          </v-menu>
        </div>
      </v-card>

      <v-bottom-sheet v-model="bottomSheet">
        <v-card class="bottom-sheet-card text-center pa-8" height="300">
          <v-card-title class="text-h5 mb-6">Share Content</v-card-title>
          <div class="d-flex justify-center ga-6">
            <div v-for="s in shareItems" :key="s.icon" class="share-item">
              <v-btn :icon="s.icon" :color="s.color" size="large" variant="flat" :aria-label="s.name" />
              <span class="text-caption mt-2">{{ s.name }}</span>
            </div>
          </div>
        </v-card>
      </v-bottom-sheet>
    </section>

    <section class="component-section mb-16">
      <div class="section-header mb-6">
        <h2 class="text-h4 font-weight-bold mb-2">Tooltip</h2>
        <p class="text-body-2 text-medium-emphasis">
          요소에 마우스를 올리면 표시되는 보조 정보입니다.
        </p>
      </div>

      <v-card class="bordered-card pa-6">
        <div class="d-flex flex-wrap align-center ga-3">
          <v-tooltip text="위쪽 툴팁" location="top">
            <template #activator="{ props }">
              <v-btn v-bind="props" color="primary" variant="tonal">Top</v-btn>
            </template>
          </v-tooltip>

          <v-tooltip text="아래쪽 툴팁" location="bottom">
            <template #activator="{ props }">
              <v-btn v-bind="props" color="primary" variant="tonal">Bottom</v-btn>
            </template>
          </v-tooltip>

          <v-tooltip text="왼쪽 툴팁" location="start">
            <template #activator="{ props }">
              <v-btn v-bind="props" color="primary" variant="tonal">Start</v-btn>
            </template>
          </v-tooltip>

          <v-tooltip text="오른쪽 툴팁" location="end">
            <template #activator="{ props }">
              <v-btn v-bind="props" color="primary" variant="tonal">End</v-btn>
            </template>
          </v-tooltip>

          <v-tooltip text="아이콘 버튼 툴팁" location="top">
            <template #activator="{ props }">
              <v-btn v-bind="props" icon="mdi-help-circle" variant="text" aria-label="Help" />
            </template>
          </v-tooltip>
        </div>
      </v-card>
    </section>

    <section class="component-section mb-16">
      <div class="section-header mb-6">
        <h2 class="text-h4 font-weight-bold mb-2">Rating & Progress</h2>
        <p class="text-body-2 text-medium-emphasis">
          평가 및 진행률 표시 컴포넌트입니다.
        </p>
      </div>

      <v-card class="bordered-card pa-6">
        <div class="demo-grid">
          <div>
            <div class="text-subtitle-2 font-weight-bold mb-3">Rating</div>
            <v-rating v-model="rating" color="warning" hover />
            <div class="text-caption text-medium-emphasis mt-2">{{ rating }} / 5</div>
          </div>

          <div>
            <div class="text-subtitle-2 font-weight-bold mb-3">Linear Progress</div>
            <v-progress-linear model-value="65" color="primary" rounded class="mb-3" />
            <v-progress-linear model-value="40" color="success" rounded class="mb-3" />
            <v-progress-linear indeterminate color="primary" rounded />
          </div>

          <div>
            <div class="text-subtitle-2 font-weight-bold mb-3">Circular Progress</div>
            <div class="d-flex align-center ga-6">
              <v-progress-circular model-value="75" color="primary" size="56" />
              <v-progress-circular indeterminate color="primary" size="40" />
              <v-progress-circular model-value="50" color="error" :rotate="360" :size="48" :width="6">
                50
              </v-progress-circular>
            </div>
          </div>
        </div>
      </v-card>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const basicDialog = ref(false)
const confirmDialog = ref(false)
const formDialog = ref(false)
const fullDialog = ref(false)
const bottomSheet = ref(false)
const rating = ref(3)

const shareItems = [
  { icon: 'mdi-facebook', color: '#1877F2', name: 'Facebook' },
  { icon: 'mdi-twitter', color: '#1DA1F2', name: 'Twitter' },
  { icon: 'mdi-linkedin', color: '#0A66C2', name: 'LinkedIn' },
  { icon: 'mdi-email', color: '#EA4335', name: 'Email' },
]

const snackbar = reactive({
  show: false,
  text: '',
  color: 'primary',
  timeout: 3000,
})

const snackbarMessages = {
  success: { text: '성공적으로 저장되었습니다!', color: 'success' },
  error: { text: '오류가 발생했습니다. 다시 시도해주세요.', color: 'error' },
  info: { text: '새로운 업데이트가 있습니다.', color: 'info' },
  warning: { text: '세션이 5분 후 만료됩니다.', color: 'warning' },
  action: { text: '항목이 삭제되었습니다.', color: 'primary', timeout: 5000 },
  multiline: { text: '이것은 여러 줄의 메시지를 보여주는 스낵바입니다.\n더 자세한 정보를 제공할 수 있습니다.', color: 'primary', timeout: 5000 },
}

const showSnackbar = (type) => {
  const msg = snackbarMessages[type]
  snackbar.text = msg.text
  snackbar.color = msg.color
  snackbar.timeout = msg.timeout || 3000
  snackbar.show = true
}

const getSnackbarButtonColor = (color) => {
  const lightColors = ['white', 'surface', 'background', 'warning', 'info']
  return lightColors.includes(color) ? 'black' : 'white'
}
</script>

<style scoped>
.page-hero {
  padding-top: 16px;
}

.letter-spacing-2 {
  letter-spacing: 2px;
}

.section-description {
  max-width: 680px;
  line-height: 1.6;
  word-break: keep-all;
}

.bordered-card {
  border: 1px solid rgba(var(--v-theme-on-surface), 0.08);
}

.dialog-card {
  padding: 24px !important;
  border-radius: 20px !important;
  border: 1px solid rgba(var(--v-theme-on-surface), 0.08);
}

.dialog-title {
  font-size: 1.25rem;
  font-weight: 700;
  padding: 0 !important;
  margin-bottom: 16px;
}

.dialog-text {
  padding: 0 !important;
  margin-bottom: 16px;
}

.dialog-actions {
  padding: 0 !important;
}

.bottom-sheet-card {
  border: 1px solid rgba(var(--v-theme-on-surface), 0.08);
}

/* Demo Grid */
.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
}

.share-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (max-width: 959px) {
  .demo-grid {
    grid-template-columns: 1fr;
  }
}
</style>