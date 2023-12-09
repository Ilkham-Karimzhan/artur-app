<script setup lang="ts">
defineOptions({name: 'Topic'})
defineProps<{
  title?: string
}>()
</script>
<template>
  <article class="flex items-center gap-[20px]">
    <div class="w-[6px] h-[30px] bg-[#8A33FD] rounded-[10px]"></div>
    <h4 class="text-[#3C4242] text-[34px] font-semibold">{{title}}</h4>
  </article>
</template>
