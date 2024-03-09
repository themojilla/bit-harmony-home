<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  cardClass: {
    type: String,
    required: true,
  },
  contentClass: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="rounded-full shadow-md flex flex-col items-center justify-center gap-4" :class="cardClass">
    <h3 class="font-bold text-lg">
      {{ title }}
    </h3>
    <p class="text-sm px-4 text-center text-neutral-800" :class="contentClass">
      {{ description }}
    </p>
  </div>
</template>
