<script setup lang="ts">
defineOptions({name: 'AButton'})
defineProps<{
  label?: string
}>()
</script>
<template>
  <button class="flex justify-between items-center px-[72px] py-4 text-lg leading-0 rounded-lg text-center font-bold">
    <slot /> {{ label}}
  </button>
</template>
