<script lang="ts" setup>
import type {Good} from "~/types/good";
import {truncateString} from "~/helpers/trunicateString";

defineOptions({name: 'CatalogItem'})
defineProps<{
  item: Good
}>()
</script>
<template>
  <div class="flex flex-col gap-[30px]">
    <nuxt-link :to="`item/${item.id}`" />
    <div class="overflow-hidden rounded-xl transition hover:scale-110 cursor-pointer">
      <NuxtImg class="w-full h-full" :src="item.description.src[0]"/>
    </div>
    <div class="flex justify-between items-center">
      <div class="flex flex-col items-start gap-[2px]">
        <p class="text-base font-semibold leading-normal">{{ truncateString(item.description.Fabric || '', 21) }}</p>
        <p class="text-sm text-[#807D7E] leading-normal">{{ truncateString(item.name, 21) }}</p>
      </div>
      <div class="py-2.5 px-4 rounded-lg bg-[#F6F6F6] text-sm font-bold">
        ${{ item.price }}
      </div>
    </div>
  </div>
</template>
