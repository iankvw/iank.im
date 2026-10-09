<script setup>
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
    <i-card class="card" variant="clear">i-card</i-card>
    <i-card class="card">i-card</i-card>
    <i-card class="card" variant="clear">i-card</i-card>
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
    <div class="bg-glass card">bg-glass</div>
    <div class="bg-glass-clear card">bg-glass-clear</div>
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
</style>