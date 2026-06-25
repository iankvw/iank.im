<template>
  <div class="cards-page">
    <section class="page-hero mb-12">
      <div class="d-flex align-center mb-4">
        <v-icon icon="mdi-card-outline" size="28" color="primary" class="mr-3" aria-hidden="true" />
        <span class="text-overline text-primary font-weight-bold letter-spacing-2">
          COMPONENTS · CARDS
        </span>
      </div>
      <h1 class="text-h3 font-weight-black mb-3">Cards</h1>
      <p class="section-description">
        관련된 정보와 액션을 하나의 유연한 컨테이너에 담아 제공합니다.
        Material Design 3의 레이아웃 원칙과 iankim의 투명한 Glass 레이어 시스템이 결합되었습니다.
      </p>
    </section>

    <section class="component-section mb-16">
      <div class="section-header mb-6">
        <h2 class="text-h4 font-weight-bold mb-2">Basic Variants</h2>
        <p class="text-body-2 text-medium-emphasis">
          VCard의 기본적인 형태입니다.
        </p>
      </div>

      <div class="card-grid">
        <v-card v-for="variant in cardVariants" :key="variant.name" :variant="variant.variant" class="sample-card"
          hover>
          <v-card-item>
            <v-card-title class="text-h6 font-weight-bold">{{ variant.name }}</v-card-title>
            <v-card-subtitle>variant="{{ variant.variant }}"</v-card-subtitle>
          </v-card-item>
          <v-card-text class="text-body-2 text-medium-emphasis">
            {{ variant.description }}
          </v-card-text>
          <v-card-actions>
            <v-btn variant="text" color="primary">Action</v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </section>

    <section class="component-section mb-16">
      <div class="section-header mb-6">
        <h2 class="text-h4 font-weight-bold mb-2">Media & Content</h2>
        <p class="text-body-2 text-medium-emphasis">
          이미지, 아바타, 텍스트가 조화롭게 배치된 카드 레이아웃입니다.
        </p>
      </div>

      <div class="media-card-grid">
        <v-card class="sample-card overflow-hidden" hover>
          <v-img src="https://picsum.photos/id/10/600/400" aspect-ratio="16/9" cover class="align-end">
            <v-card-title class="text-white">Forest Journey</v-card-title>
          </v-img>
          <v-card-text class="pt-4">
            글래스 카드 위에 이미지를 얹으면 보더 라인이 투명하게 겹치면서 고급스러운 느낌을 줍니다.
          </v-card-text>
          <v-card-actions class="px-4 pb-4">
            <v-btn color="primary" variant="tonal" rounded="xl" block>Explore More</v-btn>
          </v-card-actions>
        </v-card>

        <v-card class="sample-card" hover>
          <v-card-item prepend-avatar="https://picsum.photos/id/64/100/100">
            <template v-slot:title>
              <div class="font-weight-bold">Ian Kim</div>
            </template>
            <template v-slot:subtitle>
              Software Convergence
            </template>
          </v-card-item>
          <v-divider class="opacity-10 mx-4" />
          <v-card-text class="text-body-1 pt-4">
            "모던한 인터페이스는 복잡함을 투명함으로 해결하는 과정입니다."
          </v-card-text>
          <v-card-actions class="px-4 pb-4">
            <v-chip size="small" color="primary" variant="tonal">Developer</v-chip>
            <v-chip size="small" color="primary" variant="tonal" class="ml-2">Designer</v-chip>
            <v-spacer />
            <v-btn icon="mdi-share-variant" variant="text" size="small" aria-label="Share" />
          </v-card-actions>
        </v-card>
      </div>
    </section>

    <section class="component-section mb-16">
      <div class="section-header mb-6">
        <h2 class="text-h4 font-weight-bold mb-2">Horizontal Layout</h2>
        <p class="text-body-2 text-medium-emphasis">
          모바일 리스트나 뉴스 피드에 적합한 가로형 레이아웃입니다.
        </p>
      </div>

      <div class="d-flex flex-column ga-6">
        <v-card class="sample-card horizontal-card" hover>
          <div class="d-flex flex-wrap flex-md-no-wrap justify-space-between align-center">
            <div class="flex-grow-1">
              <v-card-item>
                <v-card-title class="text-h6 font-weight-bold">System Architecture</v-card-title>
                <v-card-subtitle>Documentation v4.0</v-card-subtitle>
              </v-card-item>
              <v-card-text class="text-body-2">
                컴포넌트 기반의 설계는 재사용성과 유지보수성을 극대화합니다.
              </v-card-text>
              <v-card-actions class="px-4">
                <v-btn size="small" variant="outlined" rounded="lg">Read Docs</v-btn>
              </v-card-actions>
            </div>
            <v-avatar class="ma-4 flex-shrink-0" size="125" rounded="lg">
              <v-img src="https://picsum.photos/id/20/300/300" cover />
            </v-avatar>
          </div>
        </v-card>

        <v-card class="sample-card horizontal-card" hover>
          <div class="d-flex flex-wrap flex-md-no-wrap justify-space-between align-center">
            <div class="flex-grow-1">
              <v-card-item>
                <v-card-title class="text-h6 font-weight-bold">Design System</v-card-title>
                <v-card-subtitle>Guidelines v2.1</v-card-subtitle>
              </v-card-item>
              <v-card-text class="text-body-2">
                일관된 디자인 언어는 사용자 경험을 향상시키고 개발 효율을 높입니다.
              </v-card-text>
              <v-card-actions class="px-4">
                <v-btn size="small" variant="outlined" rounded="lg">View Guide</v-btn>
              </v-card-actions>
            </div>
            <v-avatar class="ma-4 flex-shrink-0" size="125" rounded="lg">
              <v-img src="https://picsum.photos/id/24/300/300" cover />
            </v-avatar>
          </div>
        </v-card>
      </div>
    </section>

    <section class="component-section mb-16">
      <div class="section-header mb-6">
        <h2 class="text-h4 font-weight-bold mb-2">Interactions</h2>
        <p class="text-body-2 text-medium-emphasis">
          hover, loading, expand 등의 인터랙션을 통해 사용자와 소통하는 카드입니다.
        </p>
      </div>

      <div class="card-grid">
        <v-card class="sample-card cursor-pointer" hover>
          <v-card-text class="pa-8 text-center">
            <v-icon icon="mdi-gesture-tap" size="48" color="primary" class="mb-4" aria-hidden="true" />
            <div class="text-h6 font-weight-bold">Clickable</div>
            <p class="text-caption text-medium-emphasis mt-2">
              hover 속성으로 클릭 가능한 상태를 시각화합니다.
            </p>
          </v-card-text>
        </v-card>

        <v-card class="sample-card cursor-pointer" :loading="cardLoading" @click="handleLoading" hover>
          <v-card-text class="pa-8 text-center">
            <v-icon icon="mdi-refresh" size="48" color="primary" class="mb-4" aria-hidden="true" />
            <div class="text-h6 font-weight-bold">Loading Card</div>
            <p class="text-caption text-medium-emphasis mt-2">
              클릭하면 로딩 상태를 보여줍니다.
            </p>
          </v-card-text>
        </v-card>

        <v-card class="sample-card cursor-pointer" @click="expandCard = !expandCard" hover>
          <v-card-text class="pa-8 text-center">
            <div class="d-flex justify-space-between align-center">
              <div class="text-left flex-grow-1 mr-4">
                <v-icon icon="mdi-arrow-expand-all" size="48" color="primary" class="mb-4" aria-hidden="true" />
                <div class="text-h6 font-weight-bold">Expandable</div>
                <p class="text-caption text-medium-emphasis mt-2">
                  클릭 시 상세 정보를 확장하여 보여줍니다.
                </p>
              </div>
              <v-icon :icon="expandCard ? 'mdi-chevron-up' : 'mdi-chevron-down'" aria-hidden="true" size="24" />
            </div>
          </v-card-text>
          <v-expand-transition>
            <div v-if="expandCard">
              <v-divider />
              <v-card-text class="text-left text-body-2 text-medium-emphasis">
                클릭하면 펼쳐지는 영역입니다. 추가 정보를 표시할 때 유용합니다.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const cardLoading = ref(false)
const expandCard = ref(false)

const handleLoading = () => {
  cardLoading.value = true
  setTimeout(() => {
    cardLoading.value = false
  }, 2000)
}

const cardVariants = [
  {
    name: 'Elevated',
    variant: 'elevated',
    description: '그림자가 적용되어 배경 위에 떠 있는 느낌을 줍니다. 주요 카드에 사용합니다.',
  },
  {
    name: 'Filled',
    variant: 'flat',
    description: '그림자 없이 면이 채워진 스타일입니다. 보조 콘텐츠나 리스트 아이템에 적합합니다.',
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
  word-break: keep-all;
}

/* Card Grids */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  align-items: start;
}

.media-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 24px;
  align-items: start;
}

.sample-card {
  border-radius: 20px !important;
  border: 1px solid rgba(var(--v-theme-on-surface), 0.08);
}

.horizontal-card {
  max-width: 600px;
}

@media (max-width: 959px) {
  .media-card-grid {
    grid-template-columns: 1fr;
  }

  .horizontal-card {
    max-width: 100%;
  }
}
</style>