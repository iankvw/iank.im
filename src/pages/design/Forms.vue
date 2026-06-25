<template>
  <div class="forms-page">
    <section class="page-hero mb-12">
      <div class="d-flex align-center mb-4">
        <v-icon icon="mdi-form-textbox" size="28" color="primary" class="mr-3" aria-hidden="true" />
        <span class="text-overline text-primary font-weight-bold letter-spacing-2">
          COMPONENTS · FORMS
        </span>
      </div>
      <h1 class="text-h3 font-weight-black mb-3">Forms & Inputs</h1>
      <p class="section-description">
        사용자의 데이터 입력을 받는 폼(Forms) 컴포넌트입니다.
        명확한 상태(State) 피드백과 Material Design 3의 직관적인 상호작용 원칙을 준수하여 설계되었습니다.
      </p>
    </section>

    <section class="component-section mb-16">
      <div class="section-header mb-6">
        <h2 class="text-h4 font-weight-bold mb-2">Text Field Variants</h2>
        <p class="text-body-2 text-medium-emphasis">
          컨텍스트에 맞춰 선택할 수 있는 3가지 주요 입력창 스타일입니다.
        </p>
      </div>

      <div class="variant-grid">
        <v-card v-for="variant in textVariants" :key="variant.name" class="variant-card pa-6 pa-md-8" hover>
          <div class="demo-area d-flex flex-column justify-center mb-6">
            <v-text-field :variant="variant.variant" :label="variant.label" placeholder="텍스트를 입력하세요" hide-details
              color="primary" />
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
        <h2 class="text-h4 font-weight-bold mb-2">States & Validation</h2>
        <p class="text-body-2 text-medium-emphasis">
          사용자에게 현재 입력 상태를 명확하게 전달하는 피드백 디자인입니다.
        </p>
      </div>

      <v-card class="bordered-card pa-6 pa-md-8">
        <div class="form-grid">
          <div v-for="state in states" :key="state.label" class="form-item">
            <div class="text-caption text-medium-emphasis mb-3 font-weight-bold">{{ state.label }}</div>
            <v-text-field :variant="state.variant" :label="state.label_text" :model-value="state.value"
              :color="state.color" :base-color="state.baseColor" :error="state.error"
              :error-messages="state.errorMessages" :disabled="state.disabled" :focused="state.focused"
              :hint="state.hint" :persistent-hint="state.persistentHint" :append-inner-icon="state.appendInnerIcon" />
          </div>
        </div>
      </v-card>
    </section>

    <section class="component-section mb-16">
      <div class="section-header mb-6">
        <h2 class="text-h4 font-weight-bold mb-2">Icons & Actions</h2>
        <p class="text-body-2 text-medium-emphasis">
          입력창의 목적을 직관적으로 알려주거나 부가적인 액션을 제공하는 요소입니다.
        </p>
      </div>

      <v-card class="bordered-card pa-6 pa-md-8">
        <div class="form-grid">
          <v-text-field variant="outlined" label="Search" prepend-inner-icon="mdi-magnify" placeholder="검색어를 입력하세요"
            clearable hide-details color="primary" />

          <v-text-field variant="outlined" label="Amount" prefix="₩" suffix="원" placeholder="0" hide-details
            color="primary" />

          <v-text-field variant="outlined" label="Password" :type="showPassword ? 'text' : 'password'"
            :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
            @click:append-inner="showPassword = !showPassword" placeholder="비밀번호 입력" hide-details color="primary" />

          <v-text-field label="With Counter" variant="outlined" counter="20" maxlength="20" hide-details
            color="primary" />
        </div>
      </v-card>
    </section>

    <section class="component-section mb-16">
      <div class="section-header mb-6">
        <h2 class="text-h4 font-weight-bold mb-2">Selection Controls</h2>
        <p class="text-body-2 text-medium-emphasis">
          체크박스, 라디오 버튼, 스위치를 통한 옵션 선택 컴포넌트입니다.
        </p>
      </div>

      <div class="selection-grid">
        <v-card class="bordered-card pa-6 pa-md-8">
          <div class="text-subtitle-1 font-weight-bold mb-4">Checkboxes</div>
          <div class="d-flex flex-column ga-2">
            <v-checkbox v-model="checkbox1" label="기본 체크박스" color="primary" hide-details />
            <v-checkbox v-model="checkbox2" label="선택된 체크박스" color="primary" hide-details />
            <v-checkbox label="비활성화 됨" disabled hide-details />
          </div>
        </v-card>

        <v-card class="bordered-card pa-6 pa-md-8">
          <div class="text-subtitle-1 font-weight-bold mb-4">Radio Buttons</div>
          <v-radio-group v-model="radioGroup" color="primary" hide-details>
            <v-radio label="옵션 1 (선택됨)" value="1" />
            <v-radio label="옵션 2" value="2" />
            <v-radio label="옵션 3 (비활성화)" value="3" disabled />
          </v-radio-group>
        </v-card>

        <v-card class="bordered-card pa-6 pa-md-8">
          <div class="text-subtitle-1 font-weight-bold mb-4">Switches</div>
          <div class="d-flex flex-column ga-2">
            <v-switch v-model="switch1" label="기본 스위치" color="primary" inset hide-details />
            <v-switch v-model="switch2" label="활성화된 스위치" color="primary" inset hide-details />
            <v-switch label="비활성화 됨" disabled inset hide-details />
          </div>
        </v-card>
      </div>
    </section>

    <section class="component-section mb-16">
      <div class="section-header mb-6">
        <h2 class="text-h4 font-weight-bold mb-2">Textarea</h2>
        <p class="text-body-2 text-medium-emphasis">
          여러 줄의 텍스트를 입력할 수 있는 컴포넌트입니다.
        </p>
      </div>

      <v-card class="bordered-card pa-6 pa-md-8">
        <div class="form-grid">
          <v-textarea v-for="textarea in textareas" :key="textarea.label" :label="textarea.label" variant="outlined"
            :placeholder="textarea.placeholder" :rows="textarea.rows" :auto-grow="textarea.autoGrow"
            :counter="textarea.counter" :maxlength="textarea.maxlength" color="primary" />
        </div>
      </v-card>
    </section>

    <section class="component-section mb-16">
      <div class="section-header mb-6">
        <h2 class="text-h4 font-weight-bold mb-2">Select & Autocomplete</h2>
        <p class="text-body-2 text-medium-emphasis">
          드롭다운을 통한 단일 또는 다중 옵션 선택 컴포넌트입니다.
        </p>
      </div>

      <v-card class="bordered-card pa-6 pa-md-8">
        <div class="form-grid">
          <v-select label="기본 Select" variant="outlined" :items="['서울', '부산', '대구', '인천', '광주']" color="primary"
            hide-details />
          <v-select label="Multiple Select" variant="outlined" :items="['React', 'Vue', 'Angular', 'Svelte']" multiple
            chips closable-chips color="primary" hide-details />
          <v-combobox label="Combobox" variant="outlined" :items="['Red', 'Green', 'Blue']"
            hint="목록에 없는 항목도 직접 입력 가능합니다." persistent-hint color="primary" />
          <v-autocomplete label="Autocomplete" variant="outlined"
            :items="['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry']" clearable color="primary" hide-details />
        </div>
      </v-card>
    </section>

    <section class="component-section mb-16">
      <div class="section-header mb-6">
        <h2 class="text-h4 font-weight-bold mb-2">Slider</h2>
        <p class="text-body-2 text-medium-emphasis">
          연속된 값의 범위를 시각적으로 조절하는 슬라이더 컴포넌트입니다.
        </p>
      </div>

      <v-card class="bordered-card pa-6 pa-md-8">
        <div class="form-grid">
          <v-slider v-model="sliderValue1" label="기본 Slider" color="primary" thumb-label hide-details />
          <v-slider v-model="sliderValue2" label="With Steps" color="primary" :step="10" thumb-label ticks
            hide-details />
          <v-range-slider v-model="rangeValue" label="Range Slider" color="primary" thumb-label hide-details />
        </div>
      </v-card>
    </section>

    <section class="component-section mb-16">
      <div class="section-header mb-6">
        <h2 class="text-h4 font-weight-bold mb-2">File Input & Date Picker</h2>
        <p class="text-body-2 text-medium-emphasis">
          파일 업로드와 날짜 선택 컴포넌트입니다.
        </p>
      </div>

      <v-card class="bordered-card pa-6 pa-md-8">
        <div class="form-grid">
          <v-file-input label="File Input" variant="outlined" prepend-icon="mdi-paperclip" accept="image/*"
            color="primary" hide-details />
          <v-file-input label="Multiple Files" variant="outlined" multiple show-size chips color="primary"
            hide-details />

          <v-menu v-model="dateMenu" :close-on-content-click="false" transition="scale-transition" min-width="auto">
            <template v-slot:activator="{ props }">
              <v-text-field v-model="formattedDate" label="Date Picker" prepend-inner-icon="mdi-calendar" readonly
                v-bind="props" variant="outlined" color="primary" hide-details />
            </template>
            <v-date-picker v-model="date" color="primary" @update:model-value="dateMenu = false" />
          </v-menu>
        </div>
      </v-card>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Interactive States
const showPassword = ref(false)

// Selection Controls
const checkbox1 = ref(false)
const checkbox2 = ref(true)
const radioGroup = ref('1')
const switch1 = ref(false)
const switch2 = ref(true)

// Sliders
const sliderValue1 = ref(40)
const sliderValue2 = ref(60)
const rangeValue = ref([20, 80])

// Date Picker
const date = ref(new Date())
const dateMenu = ref(false)

const formattedDate = computed(() => {
  if (!date.value) return ''
  const d = new Date(date.value)
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
})

// Text Field Variants
const textVariants = [
  {
    name: 'Outlined',
    variant: 'outlined',
    label: 'Outlined Input',
    description: 'MD3의 가장 표준적인 스타일로 폼 영역의 경계를 명확히 구분합니다.',
  },
  {
    name: 'Filled',
    variant: 'filled',
    label: 'Filled Input',
    description: '배경색이 채워진 스타일로 입력 영역의 무게감을 더해줍니다.',
  },
  {
    name: 'Underlined',
    variant: 'underlined',
    label: 'Underlined Input',
    description: '하단 선만 강조된 미니멀한 스타일로 깔끔한 레이아웃에 적합합니다.',
  },
]

// States & Validation
const states = [
  {
    label: 'DEFAULT (FOCUSED)',
    label_text: 'Username',
    variant: 'outlined',
    value: undefined,
    color: 'primary',
    focused: true,
    hint: '영문, 숫자 조합 8자리 이상',
    persistentHint: true,
  },
  {
    label: 'SUCCESS (CUSTOM)',
    label_text: 'Email',
    variant: 'outlined',
    value: 'user@example.com',
    color: 'success',
    baseColor: 'success',
    appendInnerIcon: 'mdi-check-circle',
    hint: '사용 가능한 이메일입니다.',
    persistentHint: true,
  },
  {
    label: 'ERROR',
    label_text: '오류',
    variant: 'outlined',
    value: '',
    error: true,
    errorMessages: '이 필드는 필수입니다',
  },
  {
    label: 'DISABLED',
    label_text: 'Company',
    variant: 'outlined',
    value: 'DISABLED',
    disabled: true,
    hint: '수정할 수 없는 항목입니다.',
    persistentHint: true,
  },
]

// Textareas
const textareas = [
  {
    label: '기본 Textarea',
    placeholder: '여러 줄의 텍스트를 입력하세요...',
    rows: 3,
  },
  {
    label: 'Auto Grow',
    placeholder: '입력하면 자동으로 늘어납니다...',
    rows: 2,
    autoGrow: true,
  },
  {
    label: 'With Counter',
    placeholder: '200자 이내로 입력하세요...',
    rows: 3,
    counter: 200,
    maxlength: 200,
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
  min-height: 120px;
  border-bottom: 1px dashed rgba(var(--v-theme-on-surface), 0.1);
}

.info-area {
  word-break: keep-all;
}

/* Form Grid */
.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
  align-items: start;
}

/* Selection Grid */
.selection-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
}
</style>