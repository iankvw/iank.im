<template>
  <v-container class="fill-height d-flex align-center justify-center pa-4">
    <v-row class="app-container align-stretch justify-center">
      <!-- 1. Timer Section (Left) -->
      <v-col cols="12" sm="6">
        <v-card class="timer-card fill-height d-flex flex-column justify-space-between rounded-xl px-8 px-md-12 py-7"
          :class="timerCardStateClass" elevation="1">
          <!-- Card Header -->
          <div class="d-flex justify-space-between align-center">
            <span class="text-body-large font-weight-medium text-uppercase text-medium-emphasis">
              Timer
            </span>
            <v-btn icon variant="text" density="comfortable" :aria-label="isMuted ? '음소거 해제' : '알림음 끄기'"
              :title="isMuted ? '음소거 해제' : '알림음 끄기'" @click="toggleMute">
              <v-icon size="22">{{ isMuted ? 'mdi-volume-off' : 'mdi-volume-high' }}</v-icon>
            </v-btn>
          </div>

          <!-- Card Content (Time Display & Shift-Buffer Input) -->
          <div class="d-flex align-center justify-center my-8 flex-grow-1">
            <div class="timer-input-group d-flex align-baseline justify-center" tabindex="0" role="spinbutton"
              :aria-label="`타이머 시간 설정: ${displayHours}시간 ${displayMinutes}분 ${displaySeconds}초`" :class="{
                'is-interactive': !isTimerActive,
                'is-locked': isTimerActive,
              }" @focus="handleFocus" @blur="handleBlur" @keydown="handleKeydown">
              <span class="time-digit">{{ displayHours }}</span>
              <span class="time-separator text-medium-emphasis">:</span>
              <span class="time-digit">{{ displayMinutes }}</span>
              <span class="time-separator text-medium-emphasis">:</span>
              <span class="time-digit">{{ displaySeconds }}</span>
            </div>
          </div>

          <!-- Action Buttons (M3 Icon-Centric Surface) -->
          <div class="d-flex justify-center align-center ga-4" style="min-height: 48px;">
            <!-- IDLE State -->
            <template v-if="currentState === TimerState.IDLE">
              <v-btn icon size="default" color="primary" elevation="1" aria-label="시작" @click="startTimer">
                <v-icon>mdi-play</v-icon>
              </v-btn>
            </template>

            <!-- RUNNING State -->
            <template v-else-if="currentState === TimerState.RUNNING">
              <v-btn icon size="default" color="secondary" elevation="1" aria-label="일시정지" @click="pauseTimer">
                <v-icon>mdi-pause</v-icon>
              </v-btn>
              <v-btn icon size="default" color="secondary" elevation="1" aria-label="초기화" @click="resetTimer">
                <v-icon>mdi-refresh</v-icon>
              </v-btn>
            </template>

            <!-- PAUSED State (Warning Container Palette) -->
            <template v-else-if="currentState === TimerState.PAUSED">
              <v-btn icon size="default" color="warning" elevation="1" aria-label="계속" @click="startTimer">
                <v-icon>mdi-play</v-icon>
              </v-btn>
              <v-btn icon size="default" color="warning" variant="tonal" elevation="1" aria-label="초기화"
                @click="resetTimer">
                <v-icon>mdi-refresh</v-icon>
              </v-btn>
            </template>

            <!-- ENDED State (Error Container Palette) -->
            <template v-else-if="currentState === TimerState.ENDED">
              <v-btn icon size="default" color="error" elevation="1" aria-label="초기화" @click="resetTimer">
                <v-icon>mdi-refresh</v-icon>
              </v-btn>
            </template>
          </div>
        </v-card>
      </v-col>

      <!-- 2. Counter Section (Right) -->
      <v-col cols="12" sm="6">
        <v-card class="fill-height d-flex flex-column justify-space-between rounded-xl px-8 px-md-12 py-7"
          elevation="1">
          <!-- Card Header -->
          <div class="d-flex align-center" style="min-height: 40px;">
            <span class="text-body-large font-weight-medium text-uppercase text-medium-emphasis">
              Counter
            </span>
          </div>

          <!-- Counter Controls -->
          <div class="d-flex align-center justify-center my-8 flex-grow-1 ga-4">
            <v-btn icon size="default" color="secondary" elevation="1" aria-label="감소" @click="modifyCounter(-1);">
              <v-icon>mdi-minus</v-icon>
            </v-btn>

            <input v-model.number="counter" type="number" class="counter-input" aria-label="카운터 값"
              @blur="sanitizeCounter">

            <v-btn icon size="default" color="secondary" elevation="1" aria-label="증가" @click="modifyCounter(1);">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </div>

          <!-- Spacer for Vertical Alignment -->
          <div style="min-height: 48px;"></div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed, onUnmounted } from 'vue';

/**
 * 상태 머신 정의
 */
const TimerState = {
  IDLE: 'IDLE',
  RUNNING: 'RUNNING',
  PAUSED: 'PAUSED',
  ENDED: 'ENDED'
};

// 반응형 상태 (기본값: 3분 0초 = '000300')
const currentState = ref(TimerState.IDLE);
const inputBuffer = ref('000300');
const remainingSeconds = ref(180);
const initialConfiguredSeconds = ref(180);

const isFreshFocus = ref(true);
const counter = ref(0);
const isMuted = ref(false);

// 오디오 및 인터벌 참조
let timerInterval = null;
let alarmInterval = null;
let alarmTimeout = null;
let audioCtx = null;

/**
 * 계산된 속성
 */
const isTimerActive = computed(() => currentState.value !== TimerState.IDLE);

const timerCardStateClass = computed(() => ({
  'is-paused': currentState.value === TimerState.PAUSED,
  'is-ended': currentState.value === TimerState.ENDED
}));

const displayHours = computed(() => {
  if (currentState.value === TimerState.IDLE) {
    return inputBuffer.value.slice(0, 2);
  }
  return String(Math.floor(remainingSeconds.value / 3600)).padStart(2, '0');
});

const displayMinutes = computed(() => {
  if (currentState.value === TimerState.IDLE) {
    return inputBuffer.value.slice(2, 4);
  }
  return String(Math.floor((remainingSeconds.value % 3600) / 60)).padStart(2, '0');
});

const displaySeconds = computed(() => {
  if (currentState.value === TimerState.IDLE) {
    return inputBuffer.value.slice(4, 6);
  }
  return String(remainingSeconds.value % 60).padStart(2, '0');
});

/**
 * 시프트 버퍼 키보드 인터랙션 (IDLE 상태)
 */
const handleFocus = () => {
  isFreshFocus.value = true;
};

const handleBlur = () => {
  isFreshFocus.value = true;
};

const handleKeydown = (e) => {
  if (currentState.value !== TimerState.IDLE) return;

  if (/^[0-9]$/.test(e.key)) {
    e.preventDefault();

    if (isFreshFocus.value) {
      if (e.key === '0') {
        inputBuffer.value = '000000';
      } else {
        inputBuffer.value = ('00000' + e.key).slice(-6);
      }
      isFreshFocus.value = false;
    } else {
      inputBuffer.value = (inputBuffer.value + e.key).slice(-6);
    }
  } else if (e.key === 'Backspace') {
    e.preventDefault();
    isFreshFocus.value = false;
    inputBuffer.value = ('0' + inputBuffer.value.slice(0, -1)).padStart(6, '0');
  }
};

const sanitizeCounter = () => {
  if (isNaN(counter.value) || counter.value < 0) {
    counter.value = 0;
  }
};

/**
 * Web Audio API 신디사이저
 */
const initAudioContext = () => {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
};

const playBeepPattern = () => {
  if (isMuted.value) return;
  initAudioContext();

  const tones = [
    { freq: 880.0, start: 0.0, duration: 0.1 },
    { freq: 880.0, start: 0.15, duration: 0.1 }
  ];

  tones.forEach((tone) => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(tone.freq, audioCtx.currentTime + tone.start);

    gain.gain.setValueAtTime(0.25, audioCtx.currentTime + tone.start);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + tone.start + tone.duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(audioCtx.currentTime + tone.start);
    osc.stop(audioCtx.currentTime + tone.start + tone.duration);
  });
};

const startAlarmLoop = () => {
  stopAlarmLoop();
  playBeepPattern();

  alarmInterval = setInterval(() => {
    playBeepPattern();
  }, 1000);

  alarmTimeout = setTimeout(() => {
    stopAlarmLoop();
  }, 30000);
};

const stopAlarmLoop = () => {
  if (alarmInterval) {
    clearInterval(alarmInterval);
    alarmInterval = null;
  }
  if (alarmTimeout) {
    clearTimeout(alarmTimeout);
    alarmTimeout = null;
  }
};

const toggleMute = () => {
  isMuted.value = !isMuted.value;
  if (isMuted.value) {
    stopAlarmLoop();
  }
};

/**
 * 카운터 핸들러
 */
const modifyCounter = (delta) => {
  counter.value = Math.max(0, (parseInt(counter.value, 10) || 0) + delta);
};

/**
 * 타이머 라이프사이클 제어
 */
const startTimer = () => {
  initAudioContext();
  stopAlarmLoop();

  if (currentState.value === TimerState.IDLE) {
    const h = parseInt(inputBuffer.value.slice(0, 2), 10) || 0;
    const m = parseInt(inputBuffer.value.slice(2, 4), 10) || 0;
    const s = parseInt(inputBuffer.value.slice(4, 6), 10) || 0;
    const total = h * 3600 + m * 60 + s;

    if (total <= 0) return;

    remainingSeconds.value = total;
    initialConfiguredSeconds.value = total;
  }

  currentState.value = TimerState.RUNNING;

  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (remainingSeconds.value > 0) {
      remainingSeconds.value--;
    } else {
      handleTimerEnd();
    }
  }, 1000);
};

const pauseTimer = () => {
  currentState.value = TimerState.PAUSED;
  clearInterval(timerInterval);
};

const resetTimer = () => {
  currentState.value = TimerState.IDLE;
  clearInterval(timerInterval);
  stopAlarmLoop();
  remainingSeconds.value = initialConfiguredSeconds.value;
  isFreshFocus.value = true;
};

const handleTimerEnd = () => {
  currentState.value = TimerState.ENDED;
  clearInterval(timerInterval);
  modifyCounter(1);
  remainingSeconds.value = 0;
  startAlarmLoop();
};

/**
 * 컴포넌트 정리
 */
onUnmounted(() => {
  clearInterval(timerInterval);
  stopAlarmLoop();
  if (audioCtx && audioCtx.state !== 'closed') {
    audioCtx.close();
  }
});
</script>

<style scoped>
.app-container {
  max-width: 1100px;
  width: 100%;
}

.v-card {
  min-height: 420px;
}

/* -------------------------------------------------------------
   Timer Card Dynamic M3 Container Token States
------------------------------------------------------------- */
.timer-card {
  transition: background-color 0.3s ease, border-color 0.3s ease;
  border: 2px solid transparent;
}

.timer-card.is-paused {
  background-color: rgba(var(--v-theme-warning), 0.12) !important;
  border-color: rgba(var(--v-theme-warning), 0.38) !important;
}

.timer-card.is-ended {
  background-color: rgba(var(--v-theme-error), 0.12) !important;
  border-color: rgba(var(--v-theme-error), 0.38) !important;
}

/* -------------------------------------------------------------
   Shift-Buffer Typography Layout
------------------------------------------------------------- */
.timer-input-group {
  outline: none;
  border-bottom: 2px solid transparent;
  transition: border-bottom-color 0.2s ease;
  user-select: none;
  cursor: default;
}

.timer-input-group.is-interactive {
  cursor: pointer;
}

.timer-input-group.is-interactive:focus {
  border-bottom-color: rgb(var(--v-theme-primary));
}

.timer-input-group.is-locked {
  pointer-events: none;
  border-bottom-color: transparent !important;
}

.time-digit {
  display: inline-block;
  width: 2.2ch;
  font-size: 3.5rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  letter-spacing: -1px;
  text-align: center;
  line-height: 1;
  color: currentColor;
}

.time-separator {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1;
  margin: 0 1px;
}

.counter-input {
  width: 90px;
  font-size: 3.5rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  letter-spacing: -1px;
  text-align: center;
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  outline: none;
  color: currentColor;
  padding: 0;
  line-height: 1;
  transition: border-bottom-color 0.2s ease;
}

.counter-input:focus {
  border-bottom-color: rgb(var(--v-theme-primary));
}

/* 인풋 스핀 버튼 숨김 */
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>