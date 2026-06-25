<template>
  <div class="typography-page">
    <section class="page-hero mb-12">
      <div class="d-flex align-center mb-4">
        <v-icon icon="mdi-format-title" size="28" color="primary" class="mr-3" aria-hidden="true" />
        <span class="text-overline text-primary font-weight-bold letter-spacing-2">
          FOUNDATION · TYPOGRAPHY
        </span>
      </div>
      <h1 class="text-h3 font-weight-black mb-3">Typography</h1>
      <p class="section-description">
        가독성과 모던함을 고려하여 기본 폰트로 'Pretendard' 시스템 폰트 스택을 사용합니다.
        Vuetify의 기본 타이포그래피 스케일에 맞추어 정의되었습니다.
      </p>
    </section>

    <section class="component-section mb-16">
      <div class="section-header mb-6">
        <h2 class="text-h4 font-weight-bold mb-2">Font Family</h2>
        <p class="text-body-2 text-medium-emphasis">
          시스템 폰트 체인으로 모든 환경에서 최적의 렌더링을 보장합니다.
        </p>
      </div>

      <v-card>
        <v-card-text>
          <div class="font-display mb-6">
            가나다라마바사 ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789
          </div>
          <v-divider class="my-4" />
          <pre class="code-block mb-0"><code>{{ fontFamilyCode }}</code></pre>
        </v-card-text>
      </v-card>
    </section>

    <section class="component-section mb-16">
      <div class="section-header mb-6">
        <h2 class="text-h4 font-weight-bold mb-2">Headings Scale</h2>
        <p class="text-body-2 text-medium-emphasis">
          페이지의 구조를 잡고 시선을 유도하는 제목용 타이포그래피입니다.
        </p>
      </div>

      <div class="d-flex flex-column ga-4">
        <v-card v-for="type in headings" :key="type.name" class="type-scale-card" hover>
          <div class="type-sample">
            <div class="type-name mb-2"
              :style="{ fontSize: type.size, fontWeight: type.fontWeight, lineHeight: type.lineHeight }">
              {{ type.name }}
            </div>
            <span class="type-description text-medium-emphasis">
              {{ type.description }}
            </span>
          </div>
          <div class="d-flex flex-column ga-2 min-w-180">
            <div class="meta-chip">
              <span class="text-caption text-medium-emphasis">CLASS</span>
              <code>{{ type.class }}</code>
            </div>
            <div class="meta-chip">
              <span class="text-caption text-medium-emphasis">SIZE</span>
              <strong>{{ type.size }}</strong>
            </div>
            <div class="meta-chip">
              <span class="text-caption text-medium-emphasis">WEIGHT</span>
              <strong>{{ type.weight }}</strong>
            </div>
            <div class="meta-chip">
              <span class="text-caption text-medium-emphasis">LINE HEIGHT</span>
              <strong>{{ type.lineHeight }}</strong>
            </div>
          </div>
        </v-card>
      </div>
    </section>

    <section class="component-section mb-16">
      <div class="section-header mb-6">
        <h2 class="text-h4 font-weight-bold mb-2">Body & Utilities</h2>
        <p class="text-body-2 text-medium-emphasis">
          본문, 캡션, 버튼 등 인터페이스의 상세 정보를 전달하는 실용적인 텍스트 스케일입니다.
        </p>
      </div>

      <div class="d-flex flex-column ga-4">
        <v-card v-for="type in bodyTexts" :key="type.name" class="type-scale-card" hover>
          <div class="type-sample">
            <div class="type-name mb-2"
              :style="{ fontSize: type.size, fontWeight: type.fontWeight, lineHeight: type.lineHeight }">
              {{ type.name }}
            </div>
            <span class="type-description text-medium-emphasis">
              {{ type.description }}
            </span>
          </div>
          <div class="d-flex flex-column ga-2 min-w-180">
            <div class="meta-chip">
              <span class="text-caption text-medium-emphasis">CLASS</span>
              <code>{{ type.class }}</code>
            </div>
            <div class="meta-chip">
              <span class="text-caption text-medium-emphasis">SIZE</span>
              <strong>{{ type.size }}</strong>
            </div>
            <div class="meta-chip">
              <span class="text-caption text-medium-emphasis">WEIGHT</span>
              <strong>{{ type.weight }}</strong>
            </div>
            <div class="meta-chip">
              <span class="text-caption text-medium-emphasis">LINE HEIGHT</span>
              <strong>{{ type.lineHeight }}</strong>
            </div>
          </div>
        </v-card>
      </div>
    </section>

    <section class="component-section mb-16">
      <div class="section-header mb-6">
        <h2 class="text-h4 font-weight-bold mb-2">Font Weights</h2>
        <p class="text-body-2 text-medium-emphasis">
          Pretendard의 다양한 굵기 변형입니다.
        </p>
      </div>

      <div class="weight-grid">
        <v-card v-for="weight in fontWeights" :key="weight.value" class="weight-card" hover>
          <div class="weight-sample" :style="{ fontWeight: weight.value }">
            Aa 가
          </div>
          <div class="weight-info">
            <div class="text-subtitle-1 font-weight-bold">{{ weight.name }}</div>
            <div class="text-caption text-medium-emphasis">{{ weight.value }}</div>
          </div>
        </v-card>
      </div>
    </section>

    <section class="component-section mb-16">
      <div class="section-header mb-6">
        <h2 class="text-h4 font-weight-bold mb-2">Text Emphasis</h2>
        <p class="text-body-2 text-medium-emphasis">
          강조 수준에 따른 텍스트 스타일링입니다.
        </p>
      </div>

      <v-card>
        <v-card-text>
          <div v-for="emphasis in emphasisLevels" :key="emphasis.label" class="emphasis-row">
            <div class="emphasis-label">{{ emphasis.label }}</div>
            <div :class="emphasis.class" class="emphasis-sample">
              {{ emphasis.text }}
            </div>
            <code class="text-caption">{{ emphasis.code }}</code>
            <v-divider v-if="emphasis.label !== 'Disabled'" class="my-3" />
          </div>
        </v-card-text>
      </v-card>
    </section>
  </div>
</template>

<script setup>
const fontFamilyCode = `font-family: 'Pretendard', -apple-system,
  BlinkMacSystemFont, 'Segoe UI', Roboto,
  Helvetica, Arial, sans-serif;`

const headings = [
  {
    name: 'Display Large',
    class: 'text-h1',
    description: '랜딩 페이지의 메인 타이틀에 사용합니다.',
    size: '96px',
    fontWeight: 300,
    weight: '300 (Light)',
    lineHeight: '112px',
  },
  {
    name: 'Headline Large',
    class: 'text-h2',
    description: '페이지의 최상위 제목에 사용합니다.',
    size: '60px',
    fontWeight: 300,
    weight: '300 (Light)',
    lineHeight: '72px',
  },
  {
    name: 'Headline Medium',
    class: 'text-h3',
    description: '서브 페이지나 다이얼로그의 제목에 사용합니다.',
    size: '48px',
    fontWeight: 400,
    weight: '400 (Regular)',
    lineHeight: '56px',
  },
  {
    name: 'Headline Small',
    class: 'text-h4',
    description: '주요 섹션이나 카드의 제목에 사용합니다.',
    size: '34px',
    fontWeight: 400,
    weight: '400 (Regular)',
    lineHeight: '40px',
  },
  {
    name: 'Title Large',
    class: 'text-h5',
    description: '작은 섹션이나 리스트 그룹의 헤더에 사용합니다.',
    size: '24px',
    fontWeight: 400,
    weight: '400 (Regular)',
    lineHeight: '32px',
  },
  {
    name: 'Title Medium',
    class: 'text-h6',
    description: '카드 부제목이나 앱바 타이틀에 사용합니다.',
    size: '20px',
    fontWeight: 500,
    weight: '500 (Medium)',
    lineHeight: '28px',
  },
]

const bodyTexts = [
  {
    name: 'Subtitle Large',
    class: 'text-subtitle-1',
    description: '컴포넌트의 부제목이나 중요한 본문 요약에 사용합니다.',
    size: '16px',
    fontWeight: 400,
    weight: '400 (Regular)',
    lineHeight: '24px',
  },
  {
    name: 'Subtitle Small',
    class: 'text-subtitle-2',
    description: '작은 부제목에 사용합니다.',
    size: '14px',
    fontWeight: 500,
    weight: '500 (Medium)',
    lineHeight: '20px',
  },
  {
    name: 'Body Large',
    class: 'text-body-1',
    description: '일반적인 본문에 사용합니다.',
    size: '16px',
    fontWeight: 400,
    weight: '400 (Regular)',
    lineHeight: '24px',
  },
  {
    name: 'Body Small',
    class: 'text-body-2',
    description: '부가적인 설명이나 작은 영역의 본문에 사용합니다.',
    size: '14px',
    fontWeight: 400,
    weight: '400 (Regular)',
    lineHeight: '20px',
  },
  {
    name: 'Label Large',
    class: 'text-button',
    description: '버튼, 탭 메뉴, 중요 액션 링크에 사용합니다.',
    size: '14px',
    fontWeight: 500,
    weight: '500 (Medium)',
    lineHeight: '20px',
  },
  {
    name: 'Label Medium',
    class: 'text-caption',
    description: '이미지 캡션이나 보조 정보, 타임스탬프에 사용합니다.',
    size: '12px',
    fontWeight: 400,
    weight: '400 (Regular)',
    lineHeight: '16px',
  },
  {
    name: 'Label Small',
    class: 'text-overline',
    description: '카테고리 라벨이나 섹션 태그에 사용합니다.',
    size: '10px',
    fontWeight: 400,
    weight: '400 (Regular)',
    lineHeight: '16px',
  },
]

const fontWeights = [
  { name: 'Light', value: 300 },
  { name: 'Regular', value: 400 },
  { name: 'Medium', value: 500 },
  { name: 'SemiBold', value: 600 },
  { name: 'Bold', value: 700 },
  { name: 'Black', value: 900 },
]

const emphasisLevels = [
  {
    label: 'High Emphasis',
    class: 'text-high-emphasis',
    text: '가장 강조되는 텍스트입니다.',
    code: 'text-high-emphasis (87%)',
  },
  {
    label: 'Medium Emphasis',
    class: 'text-medium-emphasis',
    text: '보조 정보, 설명 텍스트입니다.',
    code: 'text-medium-emphasis (60%)',
  },
  {
    label: 'Disabled',
    class: 'text-disabled',
    text: '비활성화된 텍스트입니다.',
    code: 'text-disabled (38%)',
  },
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

.font-display {
  font-size: 48px;
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.type-scale-card {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 32px;
  padding: 32px;
  border-radius: 16px !important;
  align-items: center;
  border: 1px solid rgba(var(--v-theme-on-surface), 0.08);
}

.type-sample {
  overflow: hidden;
  word-break: break-word;
}

.type-name {
  color: rgb(var(--v-theme-on-surface));
}

.type-description {
  font-size: 14px;
  line-height: 1.5;
}

.min-w-180 {
  min-width: 180px;
}

.meta-chip {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 6px 0;
  border-bottom: 1px solid rgba(var(--v-theme-on-surface), 0.05);
}

.meta-chip code {
  font-size: 12px;
  background: rgba(var(--v-theme-on-surface), 0.08);
  padding: 2px 6px;
  border-radius: 4px;
}

.weight-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 16px;
}

.weight-card {
  padding: 32px 24px;
  border-radius: 16px !important;
  text-align: center;
  border: 1px solid rgba(var(--v-theme-on-surface), 0.08);
}

.weight-sample {
  font-size: 64px;
  line-height: 1;
  margin-bottom: 24px;
}

.weight-info {
  border-top: 1px solid rgba(var(--v-theme-on-surface), 0.08);
  padding-top: 16px;
}

.emphasis-row {
  display: grid;
  grid-template-columns: 150px 1fr auto;
  gap: 24px;
  align-items: center;
  padding: 16px 0;
}

.emphasis-sample {
  font-size: 20px;
}

.code-block {
  background: rgba(var(--v-theme-on-surface), 0.05);
  padding: 16px 20px;
  border-radius: 12px;
  font-family: 'Fira Code', 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.6;
  margin: 0;
  overflow-x: auto;
}

@media (max-width: 959px) {
  .type-scale-card {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .min-w-180 {
    min-width: 0;
  }

  .emphasis-row {
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .font-display {
    font-size: 32px;
  }
}
</style>