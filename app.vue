<script setup lang="ts">
const { data } = await useAsyncData('app', () => queryContent('/app').findOne())

useHead({
  title: data.value?.name,
  meta: [
    { name: 'description', content: data.value?.description },
  ],
})
</script>

<template>
  <main>
    <div class="bg-[url('/assets/background.svg')] absolute inset-0 opacity-30" />
    <NuxtPage />
  </main>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}
</style>
