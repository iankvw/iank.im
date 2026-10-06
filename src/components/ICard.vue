<template>
  <component
    :is="targetTag"
    :to="to"
    :href="href"
    v-ripple="ripple"
    :class="[
      'i-card',
      variantClass,
      { 'i-card--interactive': interactive }
    ]"
    v-bind="$attrs"
  >
    <!-- 상단 타이틀 영역 (Props 전달 시 렌더링) -->
    <header v-if="title || subtitle || $slots.header" class="i-card__header">
      <slot name="header">
        <h3 v-if="title" class="i-card__title">{{ title }}</h3>
        <p v-if="subtitle" class="i-card__subtitle">{{ subtitle }}</p>
      </slot>
    </header>

    <!-- 카드 본문 -->
    <div class="i-card__body">
      <slot />
    </div>

    <!-- 하단 액션 영역 -->
    <footer v-if="$slots.actions" class="i-card__actions">
      <slot name="actions" />
    </footer>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  /** 카드 글래스 질감 모드 */
  variant?: 'glass' | 'clear' | 'glow';
  /** 호버 인터랙션 (부유 효과) */
  interactive?: boolean;
  /** 클릭 시 리플 애니메이션 적용 여부 */
  ripple?: boolean;
  /** Vue Router 이동 경로 */
  to?: string | object;
  /** 외부 링크 URL */
  href?: string;
  /** 심플 카드용 제목 */
  title?: string;
  /** 심플 카드용 부제목 */
  subtitle?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'glass',
  interactive: false,
  ripple: false,
});

/** to나 href 유무에 따라 dynamic component 태그 자동 결정 */
const targetTag = computed(() => {
  if (props.to) return 'router-link';
  if (props.href) return 'a';
  return 'div';
});

/** variant에 맞는 main.css 클래스 매핑 */
const variantClass = computed(() => {
  switch (props.variant) {
    case 'clear':
      return 'bg-glass-clear';
    case 'glow':
      return 'bg-glass i-card--glow';
    default:
      return 'bg-glass';
  }
});
</script>

<style scoped>
.i-card {
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  text-decoration: none;
  color: inherit;
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1),
              border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.i-card--interactive {
  cursor: pointer;
}

.i-card--interactive:hover {
  transform: translateY(-4px);
  border-color: rgba(var(--v-theme-on-surface), 0.2) !important;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.16) !important;
}

/* glow 변형 스타일 */
.i-card--glow {
  border-color: rgba(var(--v-theme-primary), 0.35) !important;
  box-shadow: 0 0 24px rgba(var(--v-theme-primary), 0.15),
              0 8px 32px rgba(0, 0, 0, 0.08) !important;
}

.i-card__header {
  padding: 20px 24px 8px;
}

.i-card__title {
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.4;
}

.i-card__subtitle {
  font-size: 0.875rem;
  opacity: 0.7;
  margin-top: 4px;
}

.i-card__body {
  padding: 20px 24px;
  flex: 1 1 auto;
}

.i-card__actions {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 24px 20px;
}
</style>