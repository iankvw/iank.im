<template>
  <div class="colors-page">
    <section class="page-hero mb-12">
      <div class="d-flex align-center mb-4">
        <v-icon icon="mdi-palette-outline" size="28" color="primary" class="mr-3" aria-hidden="true" />
        <span class="text-overline text-primary font-weight-bold letter-spacing-2">
          FOUNDATION · COLORS
        </span>
      </div>
      <h1 class="text-h3 font-weight-black mb-3">Color System</h1>
      <p class="section-description">
        iankim 디자인 시스템의 컬러 팔레트입니다.
        <strong class="text-primary">Primary Red #A91D3A</strong>를 기반으로 한 따뜻한 감성과
        Glassmorphism 기반의 투명한 레이어가 조화를 이룹니다.
      </p>
    </section>

    <section class="component-section mb-16">
      <div class="section-header mb-6">
        <h2 class="text-h4 font-weight-bold mb-2">Primary Color</h2>
        <p class="text-body-2 text-medium-emphasis">
          브랜드의 핵심 색상. CTA 버튼, 링크, 주요 아이콘에 사용됩니다.
        </p>
      </div>

      <div class="color-showcase">
        <div class="color-hero" :style="heroBackground">
          <div class="color-hero-content hero-content-dark" v-show="isDark">
            <div class="text-caption text-white mb-1 font-weight-medium">DARK MODE PRIMARY</div>
            <div class="text-h2 text-white font-weight-black mb-2">{{ darkPrimary.hex }}</div>
            <div class="text-body-1 text-white text-medium-emphasis">RGB({{ darkPrimary.rgb }})</div>
          </div>
          <div class="color-hero-content hero-content-light">
            <div class="text-caption text-white mb-1 font-weight-medium">
              {{ isDark ? 'LIGHT MODE PRIMARY' : 'PRIMARY' }}
            </div>
            <div class="text-h2 text-white font-weight-black mb-2">{{ lightPrimary.hex }}</div>
            <div class="text-body-1 text-white text-medium-emphasis">RGB({{ lightPrimary.rgb }})</div>
          </div>
        </div>

        <v-card class="pa-6 pa-md-8 d-flex flex-column justify-center">
          <div class="detail-row" v-for="detail in primaryDetails" :key="detail.label">
            <span class="text-caption text-medium-emphasis">{{ detail.label }}</span>
            <span class="font-weight-bold">{{ detail.value }}</span>
          </div>
          <v-divider class="my-6" />
          <div class="text-caption text-medium-emphasis mb-3">USAGE</div>
          <div class="d-flex flex-wrap ga-2">
            <v-btn color="primary" variant="flat">Primary Button</v-btn>
            <v-btn color="primary" variant="outlined">Outlined</v-btn>
            <v-chip color="primary" variant="tonal">Chip</v-chip>
          </div>
        </v-card>
      </div>
    </section>

    <section class="component-section mb-16">
      <div class="section-header mb-6">
        <h2 class="text-h4 font-weight-bold mb-2">Surface & Background</h2>
        <p class="text-body-2 text-medium-emphasis">
          컨텐츠가 놓이는 표면 색상. Glassmorphism 효과의 기반이 됩니다.
        </p>
      </div>

      <div class="color-grid">
        <v-card v-for="color in themeColors" :key="color.name" hover>
          <div class="color-swatch" :style="{
            background: color.isTransparent ? `rgba(${color.rgb}, 0.5)` : color.hex,
          }" :class="color.needsBorder ? 'swatch-border' : ''" />
          <v-card-text class="pa-4">
            <div class="text-subtitle-1 font-weight-bold mb-1">{{ color.name }}</div>
            <div class="text-caption text-medium-emphasis mb-2">{{ color.description }}</div>
            <div class="text-caption font-weight-bold">{{ color.hex }}</div>
          </v-card-text>
        </v-card>
      </div>
    </section>

    <section class="component-section mb-16">
      <div class="section-header mb-6">
        <h2 class="text-h4 font-weight-bold mb-2">Semantic Colors</h2>
        <p class="text-body-2 text-medium-emphasis">
          상태(성공, 경고, 오류, 정보)를 표현하는 의미 있는 색상들입니다.
        </p>
      </div>

      <div class="color-grid">
        <v-card v-for="color in semanticColors" :key="color.name" hover>
          <div class="color-swatch" :style="{ background: color.hex }" />
          <v-card-text class="pa-4">
            <div class="text-subtitle-1 font-weight-bold mb-1">{{ color.name }}</div>
            <div class="text-caption text-medium-emphasis mb-2">{{ color.description }}</div>
            <div class="text-caption font-weight-bold">{{ color.hex }}</div>
          </v-card-text>
        </v-card>
      </div>
    </section>

    <section class="component-section mb-16">
      <div class="section-header mb-6">
        <h2 class="text-h4 font-weight-bold mb-2">Usage in Context</h2>
        <p class="text-body-2 text-medium-emphasis">
          실제 컴포넌트에서 색상이 어떻게 활용되는지 확인하세요.
        </p>
      </div>

      <div class="examples-grid">
        <v-card v-for="example in usageExamples" :key="example.title" hover>
          <v-card-title class="d-flex align-center">
            <v-icon :icon="example.icon" :color="example.color" class="mr-2" aria-hidden="true" />
            {{ example.title }}
          </v-card-title>
          <v-card-text>{{ example.text }}</v-card-text>
        </v-card>
      </div>
    </section>

    <section class="component-section">
      <div class="section-header mb-6">
        <h2 class="text-h4 font-weight-bold mb-2">CSS Variables Reference</h2>
        <p class="text-body-2 text-medium-emphasis">
          테마 색상들은 Vuetify의 CSS 변수를 통해 제공됩니다.
        </p>
      </div>

      <v-card>
        <v-card-text>
          <pre class="code-block"><code>{{ cssVariables }}</code></pre>
        </v-card-text>
      </v-card>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()
const isDark = computed(() => theme.global.current.value.dark)

const lightPrimary = computed(() => ({
  hex: '#A91D3A',
  rgb: '169, 29, 58',
  hsl: '347°, 71%, 39%',
}))

const darkPrimary = computed(() => ({
  hex: '#E53950',
  rgb: '229, 57, 80',
  hsl: '352°, 77%, 56%',
}))

const primaryColor = computed(() => isDark.value ? darkPrimary.value : lightPrimary.value)

const primaryDetails = computed(() => [
  { label: 'HEX', value: primaryColor.value.hex },
  { label: 'RGB', value: primaryColor.value.rgb },
  { label: 'HSL', value: primaryColor.value.hsl },
])

const heroBackground = computed(() => {
  if (isDark.value) {
    return { background: 'linear-gradient(to bottom, #E53950 50%, #A91D3A 50%)' }
  }
  return { background: '#A91D3A' }
})

const themeColors = computed(() => [
  {
    name: 'Background',
    hex: isDark.value ? '#000000' : '#F5F5F7',
    rgb: isDark.value ? '0, 0, 0' : '245, 245, 247',
    description: '전체 페이지의 배경 색상',
    isTransparent: false,
    needsBorder: isDark.value,
  },
  {
    name: 'Surface',
    hex: isDark.value ? '#1C1C1E' : '#FFFFFF',
    rgb: isDark.value ? '28, 28, 30' : '255, 255, 255',
    description: '카드, 시트 등 표면 (50% 불투명도)',
    isTransparent: true,
    needsBorder: true,
  },
  {
    name: 'On Surface',
    hex: isDark.value ? '#F5F5F7' : '#1C1C1E',
    rgb: isDark.value ? '245, 245, 247' : '28, 28, 30',
    description: '표면 위의 텍스트 및 아이콘',
    isTransparent: false,
    needsBorder: false,
  },
  {
    name: 'On Background',
    hex: isDark.value ? '#F5F5F7' : '#1C1C1E',
    rgb: isDark.value ? '245, 245, 247' : '28, 28, 30',
    description: '배경 위의 텍스트',
    isTransparent: false,
    needsBorder: false,
  },
])

const semanticColors = [
  { name: 'Success', hex: '#2E7D32', description: '성공, 완료 상태' },
  { name: 'Warning', hex: '#ED6C02', description: '주의가 필요한 상태' },
  { name: 'Error', hex: '#D32F2F', description: '오류, 위험 상태' },
  { name: 'Info', hex: '#0288D1', description: '정보 제공' },
]

const usageExamples = [
  { icon: 'mdi-check-circle', color: 'success', title: '성공', text: '데이터가 성공적으로 저장되었습니다.' },
  { icon: 'mdi-alert-circle', color: 'warning', title: '경고', text: '세션이 5분 후 만료됩니다.' },
  { icon: 'mdi-close-circle', color: 'error', title: '오류', text: '네트워크 연결을 확인해주세요.' },
  { icon: 'mdi-information', color: 'info', title: '정보', text: '새로운 업데이트가 있습니다.' },
]

const cssVariables = `/* Light Theme (iankim) */
--v-theme-primary: 169, 29, 58;         /* #A91D3A */
--v-theme-background: 245, 245, 247;    /* #F5F5F7 */
--v-theme-surface: 255, 255, 255;       /* #FFFFFF */
--v-theme-on-surface: 28, 28, 30;       /* #1C1C1E */
--v-theme-on-background: 28, 28, 30;    /* #1C1C1E */

/* Dark Theme (iankimDark) */
--v-theme-primary: 229, 57, 80;         /* #E53950 */
--v-theme-background: 0, 0, 0;          /* #000000 */
--v-theme-surface: 28, 28, 30;          /* #1C1C1E */
--v-theme-on-surface: 245, 245, 247;    /* #F5F5F7 */
--v-theme-on-background: 245, 245, 247; /* #F5F5F7 */`
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
}

.color-showcase {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.color-hero {
  border-radius: 24px;
  padding: 48px 40px;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hero-content-light {
  align-self: flex-start;
  margin-top: auto;
  text-align: left;
}

.hero-content-dark {
  align-self: flex-end;
  margin-bottom: auto;
  text-align: right;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid rgba(var(--v-theme-on-surface), 0.05);
}

.detail-row:last-of-type {
  border-bottom: none;
}

.color-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
}

.color-swatch {
  height: 140px;
  width: 100%;
}

.swatch-border {
  border-bottom: 1px solid rgba(var(--v-theme-on-surface), 0.12);
}

.examples-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
}

.code-block {
  background: rgba(var(--v-theme-on-surface), 0.05);
  padding: 24px;
  border-radius: 12px;
  font-family: 'Fira Code', 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.8;
  overflow-x: auto;
  margin: 0;
  white-space: pre-wrap;
}

@media (max-width: 959px) {
  .color-showcase {
    grid-template-columns: 1fr;
  }

  .color-grid {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }
}
</style>