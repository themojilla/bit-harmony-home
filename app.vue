<script setup lang="ts">
const { data: app } = await useAsyncData('app', () => queryContent('/app').findOne())

useHead({
  title: app.value?.name,
  meta: [
    { name: 'description', content: app.value?.description },
  ],
  bodyAttrs: {
    class: 'antialiased',
  },
})
</script>

<template>
  <main>
    <div class="bg-[url('/assets/background.svg')] fixed inset-0 opacity-30 xl:opacity-20 z-[-1] pointer-events-none" />
    <NuxtPage />
  </main>
</template>

<style>
html,
body {
  height: 100vh;
  margin: 0;
  padding: 0;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
