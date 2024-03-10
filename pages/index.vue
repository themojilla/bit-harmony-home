<script setup lang="ts">
const { data: app } = await useAsyncData('app', () => queryContent('/app').findOne())
const { data: features } = await useAsyncData('features', () => queryContent('/features').findOne())
</script>

<template>
  <div class="py-5 min-h-screen md:flex items-center">
      <div class="xl:flex-1 h-full border-r">
        <div class="border-b pb-5 xl:pb-20">
          <div class="relative h-60 xl:h-96 min-w-fit w-72 xl:w-96 ml-24 xl:mx-auto flex flex-col justify-center">
            <div>
              <img alt="logo" src="/assets/logo.svg" class="w-10 xl:w-14 inline-block me-2">
              <img alt="logo" src="/assets/logotype.svg" class="w-48 xl:w-80 inline-block">
            </div>
            <p class="text-primary font-bold text-sm xl:text-2xl ps-1">
              {{ app?.description }}
            </p>
            <Preloader class="absolute -left-20 xl:-left-32 w-60 xl:w-96 pointer-events-none rotate-45" />
          </div>
        </div>

        <nav class="py-2 px-4 mb-5 xl:mb-0">
          <ul class="flex items-center justify-center gap-5 text-primary text-xs">
            <li>
              <NuxtLink to="/">Showcase</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">Contact</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">FAQ</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/blog">Blog</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>

      <div class="flex-1 h-full flex items-center">
        <div class="flex flex-wrap w-full px-5">
          <div v-for="({ title, description, cardClass, contentClass }, index) in features?.items" :key="index" class="w-full xl:w-1/2 p-1 flex">
            <FeatureItem :title="title" :description="description" :card-class="cardClass" :content-class="contentClass" />
          </div>
        </div>
      </div>
    </div>
</template>

