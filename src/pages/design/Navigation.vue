<template>
  <div class="navigation-page">
    <section class="page-hero mb-12">
      <div class="d-flex align-center mb-4">
        <v-icon icon="mdi-compass-outline" size="28" color="primary" class="mr-3" aria-hidden="true" />
        <span class="text-overline text-primary font-weight-bold letter-spacing-2">
          COMPONENTS · NAVIGATION
        </span>
      </div>
      <h1 class="text-h3 font-weight-black mb-3">Navigation</h1>
      <p class="section-description">
        애플리케이션 내부의 유기적인 이동과 정보 계층 구조를 안내합니다.
        Material Design 3의 위계적 라우팅 가이드와 사용자 중심의 인터랙션 흐름을 반영합니다.
      </p>
    </section>

    <section class="component-section mb-16">
      <div class="section-header mb-6">
        <h2 class="text-h4 font-weight-bold mb-2">Tabs</h2>
        <p class="text-body-2 text-medium-emphasis">
          동일한 컨텍스트 내에서 연관된 하위 콘텐츠 그룹을 전환할 때 사용합니다.
        </p>
      </div>

      <v-card class="bordered-card">
        <v-tabs v-model="activeTab" color="primary" align-tabs="start">
          <v-tab v-for="tab in tabItems" :key="tab.value" :value="tab.value" :prepend-icon="tab.icon">
            {{ tab.title }}
          </v-tab>
        </v-tabs>

        <v-divider />

        <v-tabs-window v-model="activeTab">
          <v-tabs-window-item v-for="tab in tabItems" :key="tab.value" :value="tab.value">
            <v-card-text class="pa-6">
              <p class="text-body-2 text-medium-emphasis">{{ tab.content }}</p>
            </v-card-text>
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card>
    </section>

    <section class="component-section mb-16">
      <div class="section-header mb-6">
        <h2 class="text-h4 font-weight-bold mb-2">Breadcrumbs & Pagination</h2>
        <p class="text-body-2 text-medium-emphasis">
          현재 위치를 표시하거나 많은 양의 데이터를 나누어 탐색할 때 사용합니다.
        </p>
      </div>

      <v-card class="bordered-card pa-6">
        <div class="mb-6">
          <div class="text-subtitle-2 font-weight-bold mb-3">Breadcrumbs</div>
          <v-breadcrumbs :items="breadcrumbsItems" color="primary" class="pa-0">
            <template v-slot:divider>
              <v-icon icon="mdi-chevron-right" size="small" aria-hidden="true" />
            </template>
          </v-breadcrumbs>
        </div>

        <v-divider class="mb-6" />

        <div>
          <div class="text-subtitle-2 font-weight-bold mb-3">Pagination</div>
          <v-pagination v-model="page" :length="15" :total-visible="7" color="primary" rounded="circle" />
        </div>
      </v-card>
    </section>

    <section class="component-section mb-16">
      <div class="section-header mb-6">
        <h2 class="text-h4 font-weight-bold mb-2">Chips</h2>
        <p class="text-body-2 text-medium-emphasis">
          필터, 태그, 작은 액션을 표현하는 컴팩트한 요소입니다.
        </p>
      </div>

      <v-card class="bordered-card pa-6">
        <div class="mb-6">
          <div class="text-subtitle-2 font-weight-bold mb-3">Variants</div>
          <div class="d-flex flex-wrap ga-3">
            <v-chip color="primary" variant="flat">Flat</v-chip>
            <v-chip color="primary" variant="tonal">Tonal</v-chip>
            <v-chip color="primary" variant="outlined">Outlined</v-chip>
            <v-chip color="primary" variant="text">Text</v-chip>
          </div>
        </div>

        <v-divider class="my-6" />

        <div class="mb-6">
          <div class="text-subtitle-2 font-weight-bold mb-3">With Icons & Closable</div>
          <div class="d-flex flex-wrap ga-3">
            <v-chip color="success" prepend-icon="mdi-check" variant="tonal">Success</v-chip>
            <v-chip color="error" prepend-icon="mdi-alert" variant="tonal">Error</v-chip>
            <v-chip closable color="primary" variant="flat" @click:close="() => { }">Closable</v-chip>
            <v-chip append-icon="mdi-chevron-down" color="primary" variant="outlined">Dropdown</v-chip>
          </div>
        </div>

        <v-divider class="my-6" />

        <div>
          <div class="text-subtitle-2 font-weight-bold mb-3">Chip Group (Filter)</div>
          <v-chip-group v-model="selectedFilters" column multiple color="primary">
            <v-chip v-for="filter in filters" :key="filter" :value="filter" variant="tonal" filter>
              {{ filter }}
            </v-chip>
          </v-chip-group>
        </div>
      </v-card>
    </section>

    <section class="component-section mb-16">
      <div class="section-header mb-6">
        <h2 class="text-h4 font-weight-bold mb-2">Bottom Navigation</h2>
        <p class="text-body-2 text-medium-emphasis">
          모바일 환경에서 최상위 목적지 간의 이동을 제어합니다.
        </p>
      </div>

      <v-card class="bordered-card overflow-hidden mx-auto position-relative" max-width="360">
        <div class="mock-viewport d-flex align-center justify-center text-caption text-medium-emphasis">
          Mobile Viewport
        </div>

        <div class="custom-bottom-nav">
          <button v-for="nav in bottomNavItems" :key="nav.value"
            :class="['custom-nav-btn', { 'custom-nav-btn--active': bottomNav === nav.value }]" :aria-label="nav.title"
            :aria-current="bottomNav === nav.value ? 'page' : undefined" @click="bottomNav = nav.value">
            <v-icon :icon="nav.icon" :size="bottomNav === nav.value ? 24 : 22" aria-hidden="true" />
            <span class="custom-nav-label">{{ nav.title }}</span>
          </button>
        </div>
      </v-card>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('overview')
const bottomNav = ref('recents')
const page = ref(1)
const selectedFilters = ref(['UI', 'Design'])

const tabItems = [
  { value: 'overview', title: 'Overview', icon: 'mdi-phone', content: '전체적인 시스템 아키텍처 및 현황 요약을 표시합니다.' },
  { value: 'favorites', title: 'Favorites', icon: 'mdi-heart', content: '즐겨찾기한 모듈 및 컴포넌트 목록을 나열합니다.' },
  { value: 'profile', title: 'Profile', icon: 'mdi-account-box', content: '계정 관리 및 메타데이터 설정을 변경합니다.' },
]

const breadcrumbsItems = [
  { title: 'Home', disabled: false, to: '/' },
  { title: 'Components', disabled: false, to: '/design' },
  { title: 'Navigation', disabled: true, to: '/design/navigation' },
]

const bottomNavItems = [
  { value: 'recents', title: 'Recents', icon: 'mdi-history' },
  { value: 'favorites', title: 'Favorites', icon: 'mdi-heart' },
  { value: 'nearby', title: 'Nearby', icon: 'mdi-map-marker' },
]

const filters = ['UI', 'UX', 'Frontend', 'Backend', 'Design', 'Mobile']
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

.mock-viewport {
  height: 240px;
  background-color: rgba(var(--v-theme-on-surface), 0.02);
}

.custom-bottom-nav {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  background: rgb(var(--v-theme-surface));
  border-top: 1px solid rgba(var(--v-theme-on-surface), 0.08);
  height: 80px;
}

.custom-nav-btn {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: rgba(var(--v-theme-on-surface), 0.6);
  transition: color 0.2s ease;
  padding: 0;
}

.custom-nav-btn:hover {
  color: rgb(var(--v-theme-primary));
}

.custom-nav-btn--active {
  color: rgb(var(--v-theme-primary));
}

.custom-nav-btn--active .custom-nav-label {
  font-weight: 600;
}

.custom-nav-label {
  font-size: 12px;
  line-height: 1;
}
</style>