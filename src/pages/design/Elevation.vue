<template>
  <div class="elevation-page">
    <section class="page-hero mb-12">
      <div class="d-flex align-center mb-4">
        <v-icon icon="mdi-layers-outline" size="28" color="primary" class="mr-3" aria-hidden="true" />
        <span class="text-overline text-primary font-weight-bold letter-spacing-2">
          FOUNDATION · ELEVATION
        </span>
      </div>
      <h1 class="text-h3 font-weight-black mb-3">Elevation & Surface</h1>
      <p class="section-description">
        <strong>Glassmorphism</strong> 기반의 투명한 표면과 깊이감을 표현합니다.
        배경의 블러 효과와 미묘한 보더가 레이어를 구분합니다.
      </p>
    </section>

    <section class="component-section mb-16">
      <div class="section-header mb-6">
        <h2 class="text-h4 font-weight-bold mb-2">Glass Effect</h2>
        <p class="text-body-2 text-medium-emphasis">
          VCard, VSheet 등 컨테이너 컴포넌트에 전역으로 적용되는 기본 표면입니다.
          배경을 투과시키며 왜곡하는 방식으로 입체감을 부여합니다.
        </p>
      </div>

      <div class="glass-demo">
        <div class="glass-background" aria-hidden="true">
          <div class="glass-bg-shape shape-1" />
          <div class="glass-bg-shape shape-2" />
          <div class="glass-bg-shape shape-3" />
        </div>

        <v-card class="sample-card pa-8 text-center" hover>
          <v-icon icon="mdi-blur" size="40" color="primary" class="mb-4" aria-hidden="true" />
          <div class="text-h5 font-weight-bold mb-2 text-on-surface">Glass Layer</div>
          <div class="text-body-2 text-medium-emphasis mb-6">
            backdrop-filter: blur(24px) saturate(180%)
          </div>
        </v-card>
      </div>

      <v-card class="mt-6">
        <v-card-text>
          <div class="text-caption text-medium-emphasis mb-3">CSS CODE</div>
          <pre class="code-block mb-0"><code>{{ glassCode }}</code></pre>
        </v-card-text>
      </v-card>
    </section>

    <section class="component-section mb-16">
      <div class="section-header mb-6">
        <h2 class="text-h4 font-weight-bold mb-2">Mesh Background</h2>
        <p class="text-body-2 text-medium-emphasis">
          페이지 전체에 적용되는 그라디언트 배경입니다.
          Primary 색상의 미세한 그라디언트가 공간감을 연출합니다.
        </p>
      </div>

      <div class="mesh-demo">
        <v-card class="sample-card pa-8 text-center" hover>
          <v-icon icon="mdi-gradient-vertical" size="40" color="primary" class="mb-4" aria-hidden="true" />
          <div class="text-h5 font-weight-bold mb-2 text-on-surface">Mesh Background</div>
          <div class="text-body-2 text-medium-emphasis mb-6">
            3개의 radial-gradient가 결합된 그라디언트 배경
          </div>
        </v-card>
      </div>

      <v-card class="mt-6">
        <v-card-text>
          <div class="text-caption text-medium-emphasis mb-3">CSS CODE</div>
          <pre class="code-block mb-0"><code>{{ meshCode }}</code></pre>
        </v-card-text>
      </v-card>
    </section>

    <section class="component-section mb-16">
      <div class="section-header mb-6">
        <h2 class="text-h4 font-weight-bold mb-2">Grid Background</h2>
        <p class="text-body-2 text-medium-emphasis">
          24px 간격의 도트 패턴으로 구성된 배경입니다.
          기술적/모던한 느낌을 부여하며, 대시보드나 개발자 도구 페이지에 적합합니다.
        </p>
      </div>

      <div class="grid-demo">
        <v-card class="sample-card pa-8 text-center" hover>
          <v-icon icon="mdi-dots-grid" size="40" color="primary" class="mb-4" aria-hidden="true" />
          <div class="text-h5 font-weight-bold mb-2 text-on-surface">Grid Background</div>
          <div class="text-body-2 text-medium-emphasis mb-6">
            <code>meta: { useGrid: true }</code>로 도트 패턴 배경 적용
          </div>
        </v-card>
      </div>

      <v-card class="mt-6">
        <v-card-text>
          <div class="text-caption text-medium-emphasis mb-3">CSS CODE</div>
          <pre class="code-block mb-0"><code>{{ gridCode }}</code></pre>
        </v-card-text>
      </v-card>
    </section>

    <section class="component-section mb-16">
      <div class="section-header mb-6">
        <h2 class="text-h4 font-weight-bold mb-2">Surface Comparison</h2>
        <p class="text-body-2 text-medium-emphasis">
          Glass Surface는 배경을 투과시키는 반면, 일반 Surface는 불투명한 배경을 사용합니다.
        </p>
      </div>

      <div class="comparison-grid">
        <div class="comparison-item">
          <div class="d-flex align-center ga-2 mb-3">
            <v-chip color="primary" variant="tonal" size="small">Glass</v-chip>
            <span class="text-subtitle-2 font-weight-bold">bg-glass</span>
          </div>
          <v-card hover>
            <v-card-text>
              <div class="text-h6 font-weight-bold mb-2">Glass Card</div>
              <div class="text-body-2 text-medium-emphasis">
                블러 효과가 적용된 글래스 카드입니다.
              </div>
            </v-card-text>
          </v-card>
        </div>

        <div class="comparison-item">
          <div class="d-flex align-center ga-2 mb-3">
            <v-chip color="primary" variant="flat" size="small">Default</v-chip>
            <span class="text-subtitle-2 font-weight-bold">bg-surface</span>
          </div>
          <v-card class="bg-surface" hover>
            <v-card-text>
              <div class="text-h6 font-weight-bold mb-2">Default Card</div>
              <div class="text-body-2 text-medium-emphasis">
                Vuetify의 기본 카드 스타일입니다.
              </div>
            </v-card-text>
          </v-card>
        </div>
      </div>
    </section>

    <section class="component-section">
      <div class="section-header mb-6">
        <h2 class="text-h4 font-weight-bold mb-2">Elevation Levels</h2>
        <p class="text-body-2 text-medium-emphasis">
          Vuetify의 기본 elevation 시스템 (0~24). iankim 테마에서는 <strong>elevation 0</strong>을 기본으로 사용합니다.
        </p>
      </div>

      <v-card>
        <v-table>
          <thead>
            <tr>
              <th>Level</th>
              <th>Component</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="usage in usages" :key="usage.level">
              <td><code>E{{ usage.level }}</code></td>
              <td class="font-weight-medium">{{ usage.component }}</td>
              <td class="text-medium-emphasis">{{ usage.usage }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-card>
    </section>
  </div>
</template>

<script setup>
const glassCode = `.bg-glass {
  backdrop-filter: blur(24px) saturate(180%) !important;
  -webkit-backdrop-filter: blur(24px) saturate(180%) !important;
  border: 1px solid rgba(var(--v-theme-on-surface), 0.08) !important;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1) !important;
}`

const meshCode = `.v-application::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  transform: translateZ(0);

  background-color: rgb(var(--v-theme-background));
  background-image:
    radial-gradient(at 80% 10%, rgba(var(--v-theme-primary), 0.15) 0px, transparent 50%),
    radial-gradient(at 10% 50%, rgba(var(--v-theme-primary), 0.05) 0px, transparent 50%),
    radial-gradient(at 90% 90%, rgba(0, 122, 255, 0.05) 0px, transparent 50%);
}`

const gridCode = `.v-application.bg-grid::before {
  background-image: radial-gradient(rgba(var(--v-theme-on-background), 0.15) 1.5px,
      transparent 1.5px) !important;
  background-size: 24px 24px !important;
  background-repeat: repeat !important;
  background-position: center !important;
}`

const usages = [
  { level: 0, component: 'Card, Sheet, AppBar', usage: '기본 표면. iankim 테마의 기본값' },
  { level: 1, component: 'Button (hover)', usage: '호버 시 미세한 깊이감' },
  { level: 2, component: 'Button (active)', usage: '클릭/포커스 상태' },
  { level: 3, component: 'Chip, Badge', usage: '작은 요소의 미세한 강조' },
  { level: 4, component: 'Navigation Drawer', usage: '사이드 패널' },
  { level: 6, component: 'Card (hover)', usage: '카드 호버 시 깊이감' },
  { level: 8, component: 'Menu, Dialog', usage: '오버레이 요소' },
  { level: 12, component: 'Bottom Sheet', usage: '하단 시트' },
  { level: 16, component: 'Navigation Drawer (temporary)', usage: '임시 패널' },
  { level: 24, component: 'Dialog (full-screen)', usage: '최상위 오버레이' },
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
}

/* Glass Demo */
.glass-demo {
  position: relative;
  padding: 60px 40px;
  border-radius: 24px;
  overflow: hidden;
  background: linear-gradient(135deg,
      rgba(var(--v-theme-primary), 0.15) 0%,
      rgba(102, 126, 234, 0.1) 50%,
      rgba(240, 147, 251, 0.1) 100%);
}

.glass-background {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.glass-bg-shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
}

.shape-1 {
  width: 300px;
  height: 300px;
  background: #A91D3A;
  top: -100px;
  left: -50px;
  opacity: 0.4;
}

.shape-2 {
  width: 250px;
  height: 250px;
  background: #667eea;
  bottom: -80px;
  right: 10%;
  opacity: 0.3;
}

.shape-3 {
  width: 200px;
  height: 200px;
  background: #f093fb;
  top: 30%;
  right: -50px;
  opacity: 0.3;
}

/* Mesh Demo */
.mesh-demo {
  position: relative;
  padding: 60px 40px;
  border-radius: 24px;
  overflow: hidden;
  background-color: rgb(var(--v-theme-background));
  background-image:
    radial-gradient(at 80% 10%, rgba(var(--v-theme-primary), 0.15) 0px, transparent 50%),
    radial-gradient(at 10% 50%, rgba(var(--v-theme-primary), 0.05) 0px, transparent 50%),
    radial-gradient(at 90% 90%, rgba(0, 122, 255, 0.05) 0px, transparent 50%);
}

/* Grid Demo */
.grid-demo {
  position: relative;
  padding: 60px 40px;
  border-radius: 24px;
  overflow: hidden;
  background-color: rgb(var(--v-theme-background));
  background-image: radial-gradient(rgba(var(--v-theme-on-background), 0.15) 1.5px,
      transparent 1.5px);
  background-size: 24px 24px;
  background-repeat: repeat;
  background-position: center;
}

.sample-card {
  border-radius: 20px !important;
}

/* Comparison */
.comparison-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.code-block {
  background: rgba(var(--v-theme-on-surface), 0.05);
  padding: 20px 24px;
  border-radius: 12px;
  font-family: 'Fira Code', 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.7;
  overflow-x: auto;
  margin: 0;
}

@media (max-width: 959px) {

  .glass-demo,
  .mesh-demo,
  .grid-demo {
    padding: 40px 20px;
  }

  .comparison-grid {
    grid-template-columns: 1fr;
  }
}
</style>