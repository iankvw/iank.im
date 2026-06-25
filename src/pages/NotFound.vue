<template>
  <div class="not-found-page">
    <div class="error-container">
      <div class="error-code mb-6" aria-hidden="true">404</div>
      <h1 class="text-h4 font-weight-bold mb-3 text-primary">That's an error.</h1>
      <p class="text-body-1 text-medium-emphasis mb-8">
        The requested URL
        <code class="highlight-url">{{ route.fullPath }}</code>
        was not found on this server.<br>
        That's all we know.
      </p>
      <v-btn color="primary" variant="tonal" size="x-large" rounded="xl" to="/">
        Return to Home
      </v-btn>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style scoped>
.not-found-page {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.error-container {
  max-width: 560px;
  width: 100%;
  text-align: center;
}

.error-code {
  font-size: clamp(100px, 20vw, 200px);
  line-height: 1;
  letter-spacing: -0.05em;
  font-weight: 900;
  user-select: none;
  background: linear-gradient(135deg,
      rgb(var(--v-theme-primary)) 0%,
      rgba(var(--v-theme-primary), 0.6) 50%,
      rgba(var(--v-theme-primary), 0.3) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.highlight-url {
  font-family: 'Fira Code', 'Cascadia Code', Consolas, monospace;
  font-size: 0.9em;
  font-weight: 600;
  color: rgb(var(--v-theme-primary));
  background: rgba(var(--v-theme-primary), 0.08);
  padding: 2px 8px;
  border-radius: 6px;
  word-break: break-all;
}
</style>