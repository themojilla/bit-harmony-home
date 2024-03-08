<script lang="ts" setup>
const { data } = await useAsyncData('app', () => queryContent('/app').findOne())
</script>

<template>
  <div class="min-h-screen flex items-center relative max-w-xl mx-auto">
    <div class="absolute right-5">
      <img alt="logo" src="/assets/logo.svg" class="w-16 inline-block me-2">
      <img alt="logo" src="/assets/logotype.svg" class="w-80 inline-block">
      <p class="w-full text-primary font-bold text-2xl">
        {{ data?.description }}
      </p>
    </div>

    <Preloader class="w-10/12 rotate-45" />
  </div>
</template>
