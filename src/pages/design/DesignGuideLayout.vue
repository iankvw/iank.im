<template>
  <v-layout class="design-guide-layout">
    <v-navigation-drawer
      v-model="drawer"
      :permanent="isDesktop"
      :temporary="!isDesktop"
      class="design-guide-nav bg-glass"
      width="280"
      elevation="0"
    >
      <div class="pa-6 nav-header" @click="goToHome">
        <h2 class="text-h6 font-weight-bold text-primary">Design Guide</h2>
        <div class="text-caption text-medium-emphasis">iank.im</div>
      </div>

      <v-divider class="my-2" />

      <v-list density="compact" nav class="px-3">
        <v-list-subheader class="text-overline text-uppercase">
          Foundation
        </v-list-subheader>

        <v-list-item
          v-for="item in foundationItems"
          :key="item.path"
          :to="item.path"
          :prepend-icon="item.icon"
          rounded="xl"
          color="primary"
          exact
          @click="closeDrawerOnMobile"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>

        <v-list-subheader class="text-overline text-uppercase mt-6">
          Components
        </v-list-subheader>

        <v-list-item
          v-for="item in componentItems"
          :key="item.path"
          :to="item.path"
          :prepend-icon="item.icon"
          rounded="xl"
          color="primary"
          exact
          @click="closeDrawerOnMobile"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>

      <template #append>
        <div class="pa-4">
          <v-btn
            block
            :prepend-icon="isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'"
            variant="tonal"
            color="primary"
            size="large"
            @click="toggleTheme"
          >
            {{ isDark ? 'Light Mode' : 'Dark Mode' }}
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar
      v-if="!isDesktop"
      scroll-behavior="hide"
      scroll-target="#main-scroller"
      class="design-guide-appbar bg-glass"
      elevation="0"
      density="comfortable"
    >
      <v-btn
        :icon="drawer ? 'mdi-close' : 'mdi-menu'"
        variant="text"
        @click="drawer = !drawer"
        :aria-label="drawer ? 'Close navigation' : 'Open navigation'"
      />

      <v-app-bar-title class="font-weight-bold appbar-title" @click="goToHome">
        iank.im Design Guide
      </v-app-bar-title>

      <v-btn
        :icon="isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'"
        variant="text"
        @click="toggleTheme"
        :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
      />
    </v-app-bar>

    <v-main class="design-guide-main" id="main-scroller">
      <div class="design-guide-content">
        <router-view />
      </div>
    </v-main>
  </v-layout>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useDisplay, useTheme } from 'vuetify'

const router = useRouter()
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

const closeDrawerOnMobile = () => {
  if (!isDesktop.value) {
    drawer.value = false
  }
}

const goToHome = () => {
  router.push('/design')
  closeDrawerOnMobile()
}

const foundationItems = [
  { title: 'Overview', path: '/design', icon: 'mdi-home-outline' },
  { title: 'Colors', path: '/design/colors', icon: 'mdi-palette-outline' },
  { title: 'Typography', path: '/design/typography', icon: 'mdi-format-title' },
  { title: 'Elevation', path: '/design/elevation', icon: 'mdi-layers-outline' },
]

const componentItems = [
  { title: 'Buttons', path: '/design/buttons', icon: 'mdi-gesture-tap-button' },
  { title: 'Forms', path: '/design/forms', icon: 'mdi-form-textbox' },
  { title: 'Cards', path: '/design/cards', icon: 'mdi-card-outline' },
  { title: 'Dialogs', path: '/design/dialogs', icon: 'mdi-message-text-outline' },
  { title: 'Navigation', path: '/design/navigation', icon: 'mdi-compass-outline' },
  { title: 'Tables', path: '/design/tables', icon: 'mdi-table' },
]
</script>

<style scoped>
.design-guide-layout {
  height: 100vh;
  overflow: hidden;
}

.nav-header {
  cursor: pointer;
  transition: opacity 0.2s ease;
  user-select: none;
}

.nav-header:hover {
  opacity: 0.7;
}

.appbar-title {
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.appbar-title:hover {
  opacity: 0.7;
}

:deep(.design-guide-nav .v-navigation-drawer__content) {
  overflow-y: auto !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

:deep(.design-guide-nav .v-navigation-drawer__content)::-webkit-scrollbar {
  display: none;
}

:deep(.design-guide-nav)::-webkit-scrollbar {
  display: none;
}

@media (max-width: 1279px) {
  :deep(.design-guide-nav.v-navigation-drawer--temporary) {
    top: 57px !important;
    height: calc(100vh - 57px) !important;
  }
}

.design-guide-main {
  background: transparent;
  height: 100vh;
  overflow-y: auto;
}

.design-guide-content {
  max-width: 1440px;
  margin: 0 auto;
  padding: 48px 48px 120px;
}

@media (max-width: 1279px) {
  .design-guide-content {
    padding: 32px 24px 120px;
  }
}
</style>