<template>
  <div class="overview-page">
    <section class="hero-section">
      <div class="hero-content">
        <div class="hero-badge mb-6">
          <v-icon icon="mdi-creation" size="16" class="mr-2" aria-hidden="true" />
          iank.im Design Guide
        </div>

        <h1 class="hero-title mb-6">
          Build beautiful<br />
          <span class="gradient-text">interfaces</span>, faster.
        </h1>

        <p class="hero-subtitle mb-10">
          Vuetify 4와 Material Design 3를 기반으로 한<br />
          모던하고 일관된 디자인 시스템입니다.
        </p>

        <div class="d-flex flex-wrap justify-center ga-4">
          <v-btn color="primary" size="x-large" rounded="xl" prepend-icon="mdi-palette-outline" to="/design/colors">
            Explore Colors
          </v-btn>
          <v-btn size="x-large" rounded="xl" variant="outlined" prepend-icon="mdi-format-title" to="/design/typography">
            View Typography
          </v-btn>
        </div>

        <div class="scroll-indicator mt-16" aria-hidden="true">
          <div class="scroll-text text-caption text-medium-emphasis mb-2">
            SCROLL TO EXPLORE
          </div>
          <v-icon icon="mdi-chevron-double-down" class="scroll-icon" />
        </div>
      </div>
    </section>

    <section class="component-section mb-16">
      <div class="section-header mb-6">
        <div class="section-overline">FOUNDATIONS</div>
        <h2 class="text-h3 font-weight-black mb-4">디자인의 기본 요소들</h2>
        <p class="section-description">
          색상, 타이포그래피, 그림자까지. 모든 컴포넌트의 기반이 되는 핵심 요소들을 정의합니다.
        </p>
      </div>

      <div class="feature-grid">
        <v-card v-for="feature in foundations" :key="feature.title" :to="feature.path" class="feature-card" hover>
          <v-card-text>
            <div class="feature-icon mb-6" :style="{ background: feature.gradient }">
              <v-icon :icon="feature.icon" color="white" size="28" aria-hidden="true" />
            </div>
            <div class="text-h5 font-weight-bold mb-2">{{ feature.title }}</div>
            <div class="text-body-2 text-medium-emphasis mb-4">
              {{ feature.description }}
            </div>
            <div class="feature-link">
              Explore
              <v-icon icon="mdi-arrow-right" size="18" aria-hidden="true" />
            </div>
          </v-card-text>
        </v-card>
      </div>
    </section>

    <section class="component-section mb-16">
      <div class="section-header mb-6">
        <div class="section-overline">COMPONENTS</div>
        <h2 class="text-h3 font-weight-black mb-4">바로 쓸 수 있는 컴포넌트들</h2>
        <p class="section-description">
          일관된 디자인 언어로 만들어진 재사용 가능한 컴포넌트 모음입니다.
        </p>
      </div>

      <div class="component-grid">
        <v-card v-for="component in components" :key="component.title" :to="component.path" class="component-card"
          hover>
          <v-card-text class="d-flex align-center ga-4">
            <v-icon :icon="component.icon" size="32" color="primary" aria-hidden="true" />
            <div class="flex-grow-1">
              <div class="text-subtitle-1 font-weight-bold">
                {{ component.title }}
              </div>
              <div class="text-caption text-medium-emphasis">
                {{ component.description }}
              </div>
            </div>
            <v-icon icon="mdi-arrow-top-right" size="20" class="text-medium-emphasis" aria-hidden="true" />
          </v-card-text>
        </v-card>
      </div>
    </section>

    <section class="component-section mb-16">
      <v-card class="theme-card">
        <v-card-text class="d-flex align-center justify-space-between flex-wrap ga-6">
          <div>
            <div class="section-overline">ACTIVE THEME</div>
            <div class="text-h4 font-weight-bold mb-2">
              {{ isDark ? '🌙 Dark' : '☀️ Light' }}
            </div>
          </div>
          <v-btn :prepend-icon="isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'" variant="flat" size="large"
            rounded="xl" @click="toggleTheme">
            {{ isDark ? 'Switch to Light' : 'Switch to Dark' }}
          </v-btn>
        </v-card-text>
      </v-card>
    </section>

    <footer class="overview-footer">
      <div class="text-center text-medium-emphasis">
        <v-icon icon="mdi-heart" color="primary" size="16" class="mr-1" aria-hidden="true" />
        Built with Vuetify 4 & Material Design 3
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()
const isDark = computed(() => theme.global.current.value.dark)

const toggleTheme = () => {
  theme.global.name.value = isDark.value ? 'iankim' : 'iankimDark'
}

const foundations = [
  {
    title: 'Colors',
    description: 'Primary Red #A91D3A 기반의 컬러 시스템과 시맨틱 컬러',
    icon: 'mdi-palette-outline',
    path: '/design/colors',
    gradient: 'linear-gradient(135deg, #A91D3A 0%, #E63946 100%)',
  },
  {
    title: 'Typography',
    description: 'Pretendard 기반의 계층적 타이포그래피 스케일',
    icon: 'mdi-format-title',
    path: '/design/typography',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    title: 'Elevation',
    description: 'Glassmorphism 기반의 표면과 깊이 표현',
    icon: 'mdi-layers-outline',
    path: '/design/elevation',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
]

const components = [
  {
    title: 'Buttons',
    description: '다양한 변형과 상태의 버튼 컴포넌트',
    icon: 'mdi-gesture-tap-button',
    path: '/design/buttons',
  },
  {
    title: 'Forms',
    description: '텍스트 필드, 체크박스, 라디오, 스위치',
    icon: 'mdi-form-textbox',
    path: '/design/forms',
  },
  {
    title: 'Cards',
    description: 'Glass 효과가 적용된 카드 컴포넌트',
    icon: 'mdi-card-outline',
    path: '/design/cards',
  },
  {
    title: 'Dialogs',
    description: '모달, 스낵바, 바텀시트',
    icon: 'mdi-message-text-outline',
    path: '/design/dialogs',
  },
  {
    title: 'Navigation',
    description: '앱바, 드로어, 탭, 칩',
    icon: 'mdi-compass-outline',
    path: '/design/navigation',
  },
  {
    title: 'Tables',
    description: '데이터의 정렬, 필터링 및 대량 데이터 렌더링',
    icon: 'mdi-table',
    path: '/design/tables',
  },
]
</script>

<style scoped>
.component-section {
  padding: 0;
}

.section-header {
  margin-bottom: 24px;
}

.section-overline {
  color: rgb(var(--v-theme-primary));
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 12px;
  text-transform: uppercase;
  font-size: 12px;
}

.section-description {
  max-width: 600px;
  color: rgba(var(--v-theme-on-background), 0.7);
}

/* Hero Section */
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
  position: relative;
}

.hero-content {
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  padding: 8px 20px;
  border-radius: 100px;
  background: rgba(var(--v-theme-primary), 0.1);
  color: rgb(var(--v-theme-primary));
  font-size: 13px;
  font-weight: 600;
  border: 1px solid rgba(var(--v-theme-primary), 0.2);
}

.hero-title {
  font-size: clamp(48px, 8vw, 96px);
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -0.03em;
}

.gradient-text {
  background: linear-gradient(135deg, #A91D3A 0%, #E63946 50%, #ff6b9d 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

.hero-subtitle {
  font-size: clamp(16px, 2vw, 20px);
  line-height: 1.6;
  color: rgba(var(--v-theme-on-background), 0.7);
}

/* Scroll Indicator */
.scroll-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: bounce 2s infinite;
  will-change: transform;
}

.scroll-icon {
  font-size: 28px;
  color: rgba(var(--v-theme-on-background), 0.4);
}

@keyframes bounce {

  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-10px);
  }

  60% {
    transform: translateY(-5px);
  }
}

/* Feature Grid */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.feature-card {
  transition: transform 0.3s ease;
  cursor: pointer;
  border-radius: 16px !important;
  overflow: hidden;
  will-change: transform;
}

.feature-card:hover {
  transform: translateY(-8px);
}

.feature-icon {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.feature-link {
  display: flex;
  align-items: center;
  color: rgb(var(--v-theme-primary));
  font-weight: 500;
  gap: 4px;
}

/* Component Grid */
.component-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 16px;
}

.component-card {
  transition: transform 0.2s ease;
  cursor: pointer;
  border-radius: 12px !important;
  will-change: transform;
}

.component-card:hover {
  transform: translateX(4px);
}

/* Theme Card */
.theme-card {
  border-radius: 24px !important;
  padding: 8px;
}

/* Footer */
.overview-footer {
  padding: 40px 0 80px;
  text-align: center;
}

/* 반응형 */
@media (max-width: 959px) {
  .hero-section {
    padding: 60px 0;
  }
}
</style>