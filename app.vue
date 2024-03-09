<script setup lang="ts">
const { data: app } = await useAsyncData('app', () => queryContent('/app').findOne())
const { data: features } = await useAsyncData('features', () => queryContent('/features').findOne())

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
    <div class="bg-[url('/assets/background.svg')] fixed inset-0 opacity-30 lg:opacity-15 z-[-1] pointer-events-none" />

    <div class="py-5 min-h-screen md:flex items-center">
      <div class="lg:flex-1 h-full">
        <div class="ms-20 lg:ms-64 relative flex flex-col justify-center h-60 lg:h-96">
          <div>
            <img alt="logo" src="/assets/logo.svg" class="w-10 xl:w-14 inline-block me-2">
            <img alt="logo" src="/assets/logotype.svg" class="w-52 xl:w-80 inline-block">
          </div>
          <p class="text-primary font-bold xl:text-2xl ps-1 w-full">
            {{ app?.description }}
          </p>
          <Preloader class="absolute -left-20 lg:-left-36 w-60 lg:w-96 pointer-events-none rotate-45" />
        </div>
      </div>

      <div class="flex-1 h-full flex items-center">
        <div class="flex flex-wrap w-full">
          <div v-for="({ title, description, cardClass, contentClass }, index) in features?.items" :key="index" class="w-full xl:w-1/2 p-1 flex">
            <FeatureItem :title="title" :description="description" :card-class="cardClass" :content-class="contentClass" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
html,
body {
  height: 100vh;
  margin: 0;
  padding: 0;
}
</style>
