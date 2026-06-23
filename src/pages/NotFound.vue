<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const currentPath = computed(() => {
  return route.path + (route.fullPath.includes('?') ? route.fullPath.substring(route.path.length) : '')
})
</script>

<template>
  <div class="not-found-wrapper">
    <main class="error-container">
      <h1 class="error-code">404</h1>
      <h2 class="error-title">That’s an error.</h2>
      <p class="error-description">
        The requested URL
        <span class="highlight-url">{{ currentPath }}</span>
        was not found on this server.<br>
        That’s all we know.
      </p>
      <router-link to="/" class="btn-home">Return to Home</router-link>
    </main>
  </div>
</template>

<style scoped>
.not-found-wrapper {
  --color-bg: #F8F9FA;
  --color-main: #A91D3A;
  --color-main-hover: #C12745;
  --color-main-active: #8E1831;
  --color-text: #212529;
  --color-white: #FFFFFF;

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-bg);
  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;
}

.error-container {
  font-family: 'Pretendard', -apple-system, sans-serif;
  max-width: 500px;
  width: 90%;
  padding: 50px 30px;
  text-align: center;
}

.error-code {
  font-size: 5rem;
  font-weight: 800;
  color: var(--color-text);
  margin: 0;
  line-height: 1;
}

.error-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 15px 0 10px;
  color: var(--color-main);
}

.error-description {
  font-size: 1rem;
  color: var(--color-text);
  opacity: 0.7;
  margin-bottom: 35px;
  line-height: 1.5;
}

.btn-home {
  display: inline-block;
  background-color: var(--color-white);
  color: var(--color-main);
  border: 2px solid var(--color-main);
  text-decoration: none;
  padding: 12px 28px;
  border-radius: 8px;
  font-weight: bold;
  transition: all 0.2s ease;
  cursor: pointer;
}

.btn-home:hover {
  background-color: var(--color-main);
  color: var(--color-white);
}

.btn-home:active {
  background-color: var(--color-main-active);
  border-color: var(--color-main-active);
  color: var(--color-white);
  transform: scale(0.98);
}

.highlight-url {
  font-family: 'Cascadia Code', Consolas, monospace;
  font-weight: bold;
  color: var(--color-main);
  background-color: rgba(169, 29, 58, 0.05);
  padding: 2px 6px;
  border-radius: 4px;
}
</style>