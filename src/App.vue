<template>
  <v-app :class="{
    'bg-grid': $route.meta.useGrid,
    'bg-plain': $route.meta.usePlain
  }">
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
//
</script>
