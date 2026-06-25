<template>
  <div class="buttons-page">
    <section class="page-hero mb-12">
      <div class="d-flex align-center mb-4">
        <v-icon icon="mdi-gesture-tap-button" size="28" color="primary" class="mr-3" aria-hidden="true" />
        <span class="text-overline text-primary font-weight-bold letter-spacing-2">
          COMPONENTS · BUTTONS
        </span>
      </div>
      <h1 class="text-h3 font-weight-black mb-3">Buttons</h1>
      <p class="section-description">
        사용자의 즉각적인 동작과 결정을 유도하는 핵심 인터랙션 컴포넌트입니다.
        Material Design 3의 다채로운 변형(Variants) 속성과 iankim 테마의 시그니처 컬러가 유기적으로 결합되어 있습니다.
      </p>
    </section>

    <section class="component-section mb-16">
      <div class="section-header mb-6">
        <h2 class="text-h4 font-weight-bold mb-2">Variants</h2>
        <p class="text-body-2 text-medium-emphasis">
          중요도와 화면 내 위계에 따라 6가지 버튼 스타일을 제공합니다.
        </p>
      </div>

      <div class="variant-grid">
        <v-card v-for="variant in variants" :key="variant.name" class="variant-card pa-6 text-center" hover>
          <div class="demo-area d-flex justify-center align-center mb-6">
            <v-btn :variant="variant.variant" color="primary" size="large">
              {{ variant.name }}
            </v-btn>
          </div>
          <div class="info-area">
            <div class="text-subtitle-1 font-weight-bold mb-1">{{ variant.name }}</div>
            <code class="text-caption bg-background px-2 py-1 rounded mb-2 d-inline-block">
              variant="{{ variant.variant }}"
            </code>
            <div class="text-caption text-medium-emphasis mt-2">
              {{ variant.description }}
            </div>
          </div>
        </v-card>
      </div>
    </section>

    <section class="component-section mb-16">
      <div class="section-header mb-6">
        <h2 class="text-h4 font-weight-bold mb-2">Sizes</h2>
        <p class="text-body-2 text-medium-emphasis">
          5가지 크기 변형으로 다양한 상황에 대응합니다.
        </p>
      </div>

      <v-card class="bordered-card pa-6">
        <div class="d-flex flex-wrap align-center ga-6">
          <div v-for="size in sizes" :key="size.name" class="d-flex flex-column align-center ga-2">
            <v-btn color="primary" :size="size.name">{{ size.label }}</v-btn>
            <code class="text-caption text-medium-emphasis">{{ size.code }}</code>
          </div>
        </div>
      </v-card>
    </section>

    <section class="component-section mb-16">
      <div class="section-header mb-6">
        <h2 class="text-h4 font-weight-bold mb-2">States & Interactions</h2>
        <p class="text-body-2 text-medium-emphasis">
          사용자 피드백을 위한 다양한 인터랙션 상태를 시각화합니다.
        </p>
      </div>

      <v-card class="bordered-card pa-6 pa-md-8">
        <div class="state-grid">
          <div v-for="state in states" :key="state.label" class="state-item">
            <div class="text-caption text-medium-emphasis mb-3 font-weight-bold">{{ state.label }}</div>
            <v-btn color="primary" :variant="state.variant" :loading="state.loading" :disabled="state.disabled">
              {{ state.text }}
            </v-btn>
          </div>
        </div>
      </v-card>
    </section>

    <section class="component-section mb-16">
      <div class="section-header mb-6">
        <h2 class="text-h4 font-weight-bold mb-2">Icons</h2>
        <p class="text-body-2 text-medium-emphasis">
          아이콘을 추가하여 버튼의 의미를 명확히 합니다.
        </p>
      </div>

      <div class="size-icon-grid">
        <v-card class="bordered-card pa-6">
          <div class="text-subtitle-1 font-weight-bold mb-6">With Icons</div>
          <div class="d-flex flex-wrap ga-3">
            <v-btn v-for="btn in iconButtons" :key="btn.label" :color="btn.color" :variant="btn.variant"
              :prepend-icon="btn.prependIcon" :append-icon="btn.appendIcon" :aria-label="btn.label">
              {{ btn.label }}
            </v-btn>
          </div>
        </v-card>

        <v-card class="bordered-card pa-6">
          <div class="text-subtitle-1 font-weight-bold mb-6">Icon Buttons</div>
          <div class="d-flex flex-wrap ga-3 mb-6">
            <v-btn v-for="btn in iconOnlyButtons" :key="btn.icon" :icon="btn.icon" :color="btn.color"
              :variant="btn.variant" :aria-label="btn.ariaLabel" />
          </div>
          <v-divider class="mb-6" />
          <div class="text-subtitle-1 font-weight-bold mb-6">Sizes</div>
          <div class="d-flex flex-wrap align-center ga-3">
            <v-btn v-for="size in iconSizes" :key="size" icon="mdi-pencil" :size="size" color="primary" variant="flat"
              :aria-label="`Pencil ${size}`" />
          </div>
        </v-card>
      </div>
    </section>

    <section class="component-section mb-16">
      <div class="section-header mb-6">
        <h2 class="text-h4 font-weight-bold mb-2">Block Buttons</h2>
        <p class="text-body-2 text-medium-emphasis">
          모바일 환경이나 모달 하단, 폼 제출 영역에서 주로 사용되는 너비 100%의 블록 버튼입니다.
        </p>
      </div>

      <v-card class="bordered-card pa-6">
        <div class="d-flex flex-column ga-4">
          <v-btn color="primary" variant="flat" block size="large">Primary Block Action</v-btn>
          <v-btn color="primary" variant="tonal" block size="large">Secondary Block Action</v-btn>
        </div>
      </v-card>
    </section>

    <section class="component-section mb-16">
      <div class="section-header mb-6">
        <h2 class="text-h4 font-weight-bold mb-2">Floating Action Buttons (FAB)</h2>
        <p class="text-body-2 text-medium-emphasis">
          화면의 주요 액션을 강조하는 플로팅 버튼입니다.
        </p>
      </div>

      <div class="size-icon-grid">
        <v-card class="bordered-card pa-6">
          <div class="d-flex flex-wrap align-end ga-4">
            <div v-for="fab in fabs" :key="fab.size" class="d-flex flex-column align-center ga-3">
              <div class="text-caption text-medium-emphasis">
                <code>{{ fab.code }}</code>
              </div>
              <v-btn :icon="fab.icon" :size="fab.size" color="primary" variant="flat" :aria-label="`FAB ${fab.size}`" />
            </div>
          </div>
        </v-card>

        <v-card class="bordered-card pa-6">
          <div class="text-subtitle-1 font-weight-bold mb-6">Extended FAB</div>
          <div class="d-flex flex-wrap ga-3">
            <v-btn icon="mdi-plus" color="primary" size="large" aria-label="Create">
              Create
            </v-btn>
            <v-btn icon="mdi-pencil" color="primary" variant="tonal" size="large" aria-label="Edit">
              Edit
            </v-btn>
          </div>
        </v-card>
      </div>
    </section>

    <section class="component-section mb-16">
      <div class="section-header mb-6">
        <h2 class="text-h4 font-weight-bold mb-2">Button Group</h2>
        <p class="text-body-2 text-medium-emphasis">
          관련 있는 버튼들을 그룹화하여 표시합니다.
        </p>
      </div>

      <v-card class="bordered-card">
        <v-card-text>
          <div class="mb-6">
            <div class="text-subtitle-2 font-weight-bold mb-3">Single Select</div>
            <v-btn-toggle v-model="singleSelect" color="primary" variant="outlined" rounded="xl">
              <v-btn value="left" icon="mdi-format-align-left" aria-label="Align left" />
              <v-btn value="center" icon="mdi-format-align-center" aria-label="Align center" />
              <v-btn value="right" icon="mdi-format-align-right" aria-label="Align right" />
              <v-btn value="justify" icon="mdi-format-align-justify" aria-label="Justify" />
            </v-btn-toggle>
          </div>

          <v-divider class="mb-6" />

          <div class="mb-6">
            <div class="text-subtitle-2 font-weight-bold mb-3">Multi Select</div>
            <v-btn-toggle v-model="multiSelect" multiple color="primary" variant="tonal" rounded="xl">
              <v-btn value="bold" icon="mdi-format-bold" aria-label="Bold" />
              <v-btn value="italic" icon="mdi-format-italic" aria-label="Italic" />
              <v-btn value="underline" icon="mdi-format-underline" aria-label="Underline" />
              <v-btn value="color" icon="mdi-format-color-text" aria-label="Text color" />
            </v-btn-toggle>
          </div>

          <v-divider class="mb-6" />

          <div>
            <div class="text-subtitle-2 font-weight-bold mb-3">Text Group</div>
            <v-btn-toggle v-model="viewMode" color="primary" variant="flat" rounded="xl">
              <v-btn value="list" prepend-icon="mdi-view-list">List</v-btn>
              <v-btn value="grid" prepend-icon="mdi-view-grid">Grid</v-btn>
            </v-btn-toggle>
          </div>
        </v-card-text>
      </v-card>
    </section>

    <section class="component-section">
      <div class="section-header mb-6">
        <h2 class="text-h4 font-weight-bold mb-2">Color Variations</h2>
        <p class="text-body-2 text-medium-emphasis">
          의미에 따른 색상 사용 가이드입니다.
        </p>
      </div>

      <v-card class="bordered-card">
        <v-card-text>
          <div class="color-grid">
            <div v-for="color in colors" :key="color.name" class="color-item">
              <v-btn :color="color.name" variant="flat">
                {{ color.label }}
              </v-btn>
              <div class="text-caption text-medium-emphasis mt-2">
                {{ color.usage }}
              </div>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const singleSelect = ref('center')
const multiSelect = ref(['bold'])
const viewMode = ref('grid')

const variants = [
  {
    name: 'Elevated',
    variant: 'elevated',
    description: '살짝 떠 있는 기본 버튼으로 메인 액션에 사용합니다.',
  },
  {
    name: 'Flat',
    variant: 'flat',
    description: '그림자가 없는 꽉 찬 버튼으로 깔끔한 UI에 적합합니다.',
  },
  {
    name: 'Tonal',
    variant: 'tonal',
    description: '배경색의 톤을 낮춘 보조 버튼으로 부드러운 강조에 사용합니다.',
  },
  {
    name: 'Outlined',
    variant: 'outlined',
    description: '테두리만 있는 버튼으로 중간 수준의 위계를 가집니다.',
  },
  {
    name: 'Text',
    variant: 'text',
    description: '배경과 테두리가 없는 텍스트 형태로 다이얼로그 액션에 사용합니다.',
  },
  {
    name: 'Plain',
    variant: 'plain',
    description: '호버 전까지 투명도가 낮은 가장 조용한 버튼입니다.',
  },
]

const sizes = [
  { name: 'x-small', label: 'x-Small', code: 'size="x-small"' },
  { name: 'small', label: 'Small', code: 'size="small"' },
  { name: 'default', label: 'Default', code: 'size="default"' },
  { name: 'large', label: 'Large', code: 'size="large"' },
  { name: 'x-large', label: 'X-Large', code: 'size="x-large"' },
]

const states = [
  { label: 'REST', variant: 'flat', loading: false, disabled: false, text: 'Submit Data' },
  { label: 'LOADING', variant: 'flat', loading: true, disabled: false, text: 'Submit Data' },
  { label: 'DISABLED', variant: 'flat', loading: false, disabled: true, text: 'Submit Data' },
  { label: 'TONAL LOADING', variant: 'tonal', loading: true, disabled: false, text: 'Processing' },
]

const iconButtons = [
  { label: 'Create', color: 'primary', variant: 'flat', prependIcon: 'mdi-plus' },
  { label: 'Continue', color: 'primary', variant: 'flat', appendIcon: 'mdi-arrow-right' },
  { label: 'Download', color: 'primary', variant: 'outlined', prependIcon: 'mdi-download' },
  { label: 'Like', color: 'primary', variant: 'tonal', prependIcon: 'mdi-heart' },
  { label: 'Delete', color: 'error', variant: 'flat', prependIcon: 'mdi-delete' },
  { label: 'Confirm', color: 'success', variant: 'flat', prependIcon: 'mdi-check' },
]

const iconOnlyButtons = [
  { icon: 'mdi-home', color: 'primary', variant: 'flat', ariaLabel: 'Home' },
  { icon: 'mdi-magnify', color: 'primary', variant: 'tonal', ariaLabel: 'Search' },
  { icon: 'mdi-heart', color: 'primary', variant: 'outlined', ariaLabel: 'Favorite' },
  { icon: 'mdi-share', color: 'primary', variant: 'text', ariaLabel: 'Share' },
  { icon: 'mdi-dots-vertical', variant: 'text', ariaLabel: 'More' },
]

const iconSizes = ['x-small', 'small', 'default', 'large', 'x-large']

const fabs = [
  { size: 'small', icon: 'mdi-plus', code: 'size="small"' },
  { size: 'default', icon: 'mdi-plus', code: 'size="default"' },
  { size: 'large', icon: 'mdi-plus', code: 'size="large"' },
]

const colors = [
  { name: 'primary', label: 'Primary', usage: '주요 CTA, 핵심 액션' },
  { name: 'secondary', label: 'Secondary', usage: '보조 액션, 취소 버튼' },
  { name: 'success', label: 'Success', usage: '완료, 승인, 추가' },
  { name: 'info', label: 'Info', usage: '정보 확인, 도움말' },
  { name: 'warning', label: 'Warning', usage: '주의 필요한 액션' },
  { name: 'error', label: 'Error', usage: '삭제, 제거, 위험한 액션' },
]
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

/* Variant Grid */
.variant-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.variant-card {
  border: 1px solid rgba(var(--v-theme-on-surface), 0.08);
}

.demo-area {
  min-height: 100px;
  border-bottom: 1px dashed rgba(var(--v-theme-on-surface), 0.1);
}

.info-area {
  word-break: keep-all;
}

/* States Grid */
.state-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 32px 16px;
  align-items: end;
}

/* Icons Grid */
.size-icon-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

/* Color Grid */
.color-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 24px;
}

.color-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

@media (max-width: 959px) {
  .size-icon-grid {
    grid-template-columns: 1fr;
  }
}
</style>