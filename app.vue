<script setup lang="ts">
import { appName } from '~/constants/app'

useHead({
  title: appName,
})
</script>

<template>
  <NuxtLayout>
    <div class="min-h-screen w-full flex items-center justify-center bg-gray-10">
      <svg fill="none" class="w-full max-w-xl stroke-1 w-1/2" viewBox="0 0 340 340">
        <circle cx="170" cy="170" r="160" stroke="#E2007C" />
        <circle cx="170" cy="170" r="135" stroke="#404041" />
        <circle cx="170" cy="170" r="110" stroke="#E2007C" />
        <circle cx="170" cy="170" r="85" stroke="#404041" />
      </svg>
    </div>
  </NuxtLayout>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}

circle {
  animation: preloader 6s ease-in-out infinite;
  transform-origin: 170px 170px;
}

circle:nth-of-type(1) {
  stroke-dasharray: 600;
}

circle:nth-of-type(2) {
  stroke-dasharray: 500;
}

circle:nth-of-type(3) {
  stroke-dasharray: 400;
}

circle:nth-of-type(4) {
  stroke-dasharray: 300;
}

circle:nth-of-type(1) {
  animation-delay: 0s;
}

circle:nth-of-type(2) {
  animation-delay: -0.3s;
}

circle:nth-of-type(3) {
  animation-delay: -0.6s;
}

circle:nth-of-type(4) {
  animation-delay: -0.1s;
}

@-webkit-keyframes preloader {
  50% {
    transform: rotate(360deg);
  }
}

@keyframes preloader {
  50% {
    transform: rotate(360deg);
  }
}
</style>
