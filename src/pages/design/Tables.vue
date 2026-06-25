<template>
  <div class="data-tables-page">
    <section class="page-hero mb-12">
      <div class="d-flex align-center mb-4">
        <v-icon icon="mdi-table" size="28" color="primary" class="mr-3" aria-hidden="true" />
        <span class="text-overline text-primary font-weight-bold letter-spacing-2">
          COMPONENTS · DATA TABLES
        </span>
      </div>
      <h1 class="text-h3 font-weight-black mb-3">Data Tables</h1>
      <p class="section-description">
        대량의 데이터를 체계적으로 구조화하여 탐색, 정렬, 필터링을 지원합니다.
        Material Design 3의 밀도(Density) 규칙과 직관적인 슬롯 레이아웃을 통해 가독성을 극대화합니다.
      </p>
    </section>

    <section class="component-section mb-16">
      <div class="section-header mb-6">
        <h2 class="text-h4 font-weight-bold mb-2">Basic Table</h2>
        <p class="text-body-2 text-medium-emphasis">
          기본적인 정렬과 페이징 기능이 포함된 표준 데이터 테이블입니다.
        </p>
      </div>

      <v-card class="bordered-card overflow-hidden">
        <v-data-table :headers="basicHeaders" :items="desserts" :items-per-page="5" hover />
      </v-card>
    </section>

    <section class="component-section mb-16">
      <div class="section-header mb-6">
        <h2 class="text-h4 font-weight-bold mb-2">Custom Slots & Layouts</h2>
        <p class="text-body-2 text-medium-emphasis">
          아바타, 칩, 액션 버튼 등 커스텀 슬롯을 활용한 복합 데이터 테이블입니다.
        </p>
      </div>

      <v-card class="bordered-card overflow-hidden">
        <v-toolbar color="transparent" class="px-2 toolbar-border">
          <v-toolbar-title class="text-subtitle-1 font-weight-bold">Team Members</v-toolbar-title>
          <v-spacer />
          <v-text-field v-model="search" prepend-inner-icon="mdi-magnify" placeholder="Search members..."
            variant="outlined" density="compact" hide-details class="search-field" />
          <v-btn color="primary" variant="flat" class="ml-4" prepend-icon="mdi-plus">
            Add User
          </v-btn>
        </v-toolbar>

        <v-data-table :headers="userHeaders" :items="users" :search="search" hover>
          <template v-slot:item.user="{ item }">
            <div class="d-flex align-center py-2">
              <v-avatar size="36" class="mr-3 avatar-border">
                <v-img :src="item.avatar" cover />
              </v-avatar>
              <div>
                <div class="font-weight-bold text-body-2">{{ item.name }}</div>
                <div class="text-caption text-medium-emphasis">{{ item.email }}</div>
              </div>
            </div>
          </template>

          <template v-slot:item.status="{ item }">
            <v-chip :color="STATUS_COLORS[item.status] || 'primary'" size="small" variant="tonal"
              class="font-weight-medium">
              {{ item.status }}
            </v-chip>
          </template>

          <template v-slot:item.progress="{ item }">
            <div class="d-flex align-center ga-2">
              <v-progress-linear :model-value="item.progress" :color="getProgressColor(item.progress)" rounded
                height="6" class="flex-grow-1" />
              <span class="text-caption font-weight-medium progress-value">{{ item.progress }}%</span>
            </div>
          </template>

          <template v-slot:item.actions>
            <div class="d-flex ga-1 justify-end">
              <v-btn icon="mdi-pencil-outline" variant="text" size="small" color="primary" aria-label="Edit" />
              <v-btn icon="mdi-trash-can-outline" variant="text" size="small" color="error" aria-label="Delete" />
            </div>
          </template>
        </v-data-table>
      </v-card>
    </section>

    <section class="component-section mb-16">
      <div class="section-header mb-6">
        <h2 class="text-h4 font-weight-bold mb-2">Selectable Rows</h2>
        <p class="text-body-2 text-medium-emphasis">
          다중 선택 기능을 제공하여 일괄 액션 처리에 적합한 테이블입니다.
        </p>
      </div>

      <v-card class="bordered-card overflow-hidden">
        <v-toolbar :color="selected.length > 0 ? 'primary' : 'transparent'"
          :variant="selected.length > 0 ? 'tonal' : 'default'" class="px-2 transition-smooth">
          <v-toolbar-title class="text-subtitle-1 font-weight-bold">
            {{ selected.length > 0 ? `${selected.length} items selected` : 'Project List' }}
          </v-toolbar-title>
          <v-spacer />
          <v-slide-x-reverse-transition>
            <v-btn v-if="selected.length > 0" color="error" variant="flat" prepend-icon="mdi-delete">
              Delete Selected
            </v-btn>
          </v-slide-x-reverse-transition>
        </v-toolbar>

        <v-data-table v-model="selected" :headers="projectHeaders" :items="projects" show-select hover return-object>
          <template v-slot:item.priority="{ item }">
            <v-icon :icon="PRIORITY_CONFIG[item.priority]?.icon || 'mdi-circle-medium'"
              :color="PRIORITY_CONFIG[item.priority]?.color || 'primary'" size="small" class="mr-1" />
            <span class="text-caption font-weight-medium">{{ item.priority }}</span>
          </template>
        </v-data-table>
      </v-card>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const STATUS_COLORS = {
  Active: 'success',
  Review: 'warning',
  Offline: 'surface-variant',
  Hold: 'error',
}

const PRIORITY_CONFIG = {
  Critical: { color: 'error', icon: 'mdi-alert-circle' },
  High: { color: 'warning', icon: 'mdi-arrow-up-circle' },
  Medium: { color: 'info', icon: 'mdi-minus-circle' },
  Low: { color: 'success', icon: 'mdi-arrow-down-circle' },
}

// 반응형 상태
const search = ref('')
const selected = ref([])

// Basic Table 데이터
const basicHeaders = [
  { title: 'Dessert (100g serving)', align: 'start', sortable: true, key: 'name' },
  { title: 'Calories', align: 'end', key: 'calories' },
  { title: 'Fat (g)', align: 'end', key: 'fat' },
  { title: 'Carbs (g)', align: 'end', key: 'carbs' },
  { title: 'Protein (g)', align: 'end', key: 'protein' },
]

const desserts = [
  { name: 'Frozen Yogurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3 },
  { name: 'Eclair', calories: 262, fat: 16.0, carbs: 23, protein: 6.0 },
  { name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  { name: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },
  { name: 'Jelly bean', calories: 375, fat: 0.0, carbs: 94, protein: 0.0 },
]

// Custom Slots Table 데이터
const userHeaders = [
  { title: 'User Info', align: 'start', key: 'user' },
  { title: 'Role', align: 'start', key: 'role' },
  { title: 'Status', align: 'start', key: 'status' },
  { title: 'Task Progress', align: 'start', key: 'progress', minWidth: '150px' },
  { title: 'Actions', align: 'end', key: 'actions', sortable: false },
]

const users = [
  { name: 'Ian Kim', email: 'ian@example.com', avatar: 'https://picsum.photos/id/64/100/100', role: 'Lead Developer', status: 'Active', progress: 85 },
  { name: 'Jane Doe', email: 'jane@example.com', avatar: 'https://picsum.photos/id/1027/100/100', role: 'UI/UX Designer', status: 'Review', progress: 45 },
  { name: 'Alex Smith', email: 'alex@example.com', avatar: 'https://picsum.photos/id/338/100/100', role: 'Product Manager', status: 'Offline', progress: 100 },
  { name: 'Sarah Lee', email: 'sarah@example.com', avatar: 'https://picsum.photos/id/447/100/100', role: 'Frontend Eng.', status: 'Active', progress: 60 },
  { name: 'Mike Brown', email: 'mike@example.com', avatar: 'https://picsum.photos/id/669/100/100', role: 'Data Scientist', status: 'Hold', progress: 15 },
]

// Selectable Rows Table 데이터
const projectHeaders = [
  { title: 'Project Name', align: 'start', key: 'name' },
  { title: 'Client', align: 'start', key: 'client' },
  { title: 'Deadline', align: 'start', key: 'deadline' },
  { title: 'Priority', align: 'start', key: 'priority' },
]

const projects = [
  { name: 'Design System v2.0', client: 'Internal', deadline: '2026-07-15', priority: 'High' },
  { name: 'Mobile App Refactoring', client: 'Tech Corp', deadline: '2026-08-01', priority: 'Medium' },
  { name: 'Analytics Dashboard', client: 'Data Inc.', deadline: '2026-06-30', priority: 'Critical' },
  { name: 'Marketing Website', client: 'Startup LLC', deadline: '2026-09-10', priority: 'Low' },
  { name: 'Payment Gateway', client: 'Fintech Co.', deadline: '2026-07-05', priority: 'High' },
]

const getProgressColor = (val) => {
  if (val === 100) return 'success'
  if (val < 30) return 'error'
  return 'primary'
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

.toolbar-border {
  border-bottom: 1px solid rgba(var(--v-theme-on-surface), 0.12);
}

.avatar-border {
  border: 1px solid rgba(var(--v-theme-on-surface), 0.08);
}

.search-field {
  max-width: 240px;
}

.progress-value {
  min-width: 40px;
  text-align: right;
}

.transition-smooth {
  transition: all 0.3s ease;
}

:deep(.v-table) {
  background: transparent !important;
}

:deep(.v-data-table-footer) {
  background: transparent !important;
}
</style>