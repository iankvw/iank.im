<script setup>
/*
 * Test.vue
 */
import { ref, computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useDisplay, useTheme } from 'vuetify'

import ICard from '@/components/ICard.vue'

const route = useRoute()
const { lgAndUp } = useDisplay()
const isDesktop = computed(() => lgAndUp.value)

const drawer = ref(isDesktop.value)

watch(isDesktop, (newValue) => {
  drawer.value = newValue
})

watch(
  () => route.path,
  () => {
    setTimeout(() => {
      const scroller = document.getElementById('main-scroller')
      if (scroller) {
        scroller.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }
    }, 10)
  }
)

const theme = useTheme()
const isDark = computed(() => theme.global.current.value.dark)

const toggleTheme = () => {
  theme.global.name.value = isDark.value ? 'iankim' : 'iankimDark'
}
</script>

<template>
  <v-btn :icon="isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'" variant="text" @click="toggleTheme"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'" />
  <button>button</button>
  <v-btn>v-btn</v-btn>
  <div class="box">
    <v-card class="card">v-card</v-card>
    <v-card class="bg-glass card">v-card bg-glass</v-card>
    <v-card class="bg-glass-clear card">v-card bg-glass-clear</v-card>

    <i-card class="card">i-card</i-card>
    <i-card class="card" variant="clear">i-card variant clear</i-card>
    <i-card class="card">i-card</i-card>
    <i-card class="card" variant="clear">i-card variant clear</i-card>
    <i-card>
          <div class="d-flex flex-wrap flex-md-no-wrap justify-space-between align-center">
            <div class="flex-grow-1">
              <v-card-item>
                <v-card-title class="text-title-large font-weight-bold">System Architecture</v-card-title>
                <v-card-subtitle>Documentation v4.0</v-card-subtitle>
              </v-card-item>
              <v-card-text class="text-body-medium">
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
        </i-card>

        <i-card class="sample-card overflow-hidden" hover>
          <v-img src="https://picsum.photos/id/10/600/400" aspect-ratio="16/9" cover class="align-end">
            <v-card-title class="text-white">Forest Journey</v-card-title>
          </v-img>
          <v-card-text class="pt-4">
            글래스 카드 위에 이미지를 얹으면 보더 라인이 투명하게 겹치면서 고급스러운 느낌을 줍니다.
          </v-card-text>
          <v-card-actions class="px-4 pb-4">
            <v-btn color="primary" variant="tonal" rounded="xl" block>Explore More</v-btn>
          </v-card-actions>
        </i-card>
    <div class="bg-glass card">bg-glass</div>
    <div class="bg-glass-clear card">bg-glass-clear</div>

    <div class="glass-control card">glass-control</div>
    <div class="glass-card-body card">glass-card-body</div>
    <div class="glass-card-banner card">glass-card-banner</div>
    <div class="glass-card-banner card" style="width: 100px; margin-right: 70vw;">glass-card-banner</div>
  </div>
</template>

<style scoped>
.box {
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwpUizsdL8_XhiNeEcaC_afoALZzCwRnqWOeADMym02KT7D2VVBayss10&s=10");
  background-repeat: repeat-y;
  background-size: 50%;
  padding: 10px;
}

.card {
  width: 80%;
  margin: 10px auto;
  padding: 30px;
  height: 100px;
}

/* 1. 버튼 및 상단 툴바 (얇고 투명한 유리) */
.glass-control {
  background-color: rgba(248, 248, 252, 0.4);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
}

/* 2-A. 카드 본체 (우측 상단 하이라이트 + 채도 감쇄 블러) */
.glass-card-body {
  background: radial-gradient(
    circle at 100% 0px,
    rgba(255, 255, 255, 0.85) 0px,
    rgba(245, 245, 245, 0.13) 183%
  );
  backdrop-filter: blur(15px) saturate(86%);
  -webkit-backdrop-filter: blur(15px) saturate(86%);
}

/* 2-B. 카드 헤더 배너 (텍스트 보호용 두꺼운 유리) */
.glass-card-banner {
  background-color: rgba(248, 248, 252, 0.85);
  backdrop-filter: blur(15px) saturate(86%);
  -webkit-backdrop-filter: blur(15px) saturate(86%);
}
</style>