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