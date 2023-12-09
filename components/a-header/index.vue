<script setup lang="ts">
import HeartIcon from '@/assets/icons/heart.svg'
import UserIcon from '@/assets/icons/user.svg'
import CartIcon from '@/assets/icons/cart.svg'
import LogoIcon from '@/assets/icons/logo.svg'

const links: string[] = [
    'Shop',
    'Men',
    'Women',
    'Combos',
    'Joggers'
]

const icons: string[] = [
    HeartIcon,
    UserIcon,
    CartIcon
]

const input = ref<string>('')
</script>
<template>
  <nav class="flex items-center justify-between max-w-[1240px] mx-auto py-[31px]">
    <div class="w-[90px] h-[45px]">
      <NuxtImg width="90px" src="/image/logo.png" alt="Logo" />
    </div>
    <ul class="flex gap-10">
      <li class="text-[#807D7E] cursor-pointer transition hover:text-[#3C4242] text-[22px] font-bold" v-for="(link, idx) in links" :key="idx">
        {{link}}
      </li>
    </ul>
    <div>
        <label for="simple-search" class="sr-only">Search</label>
        <div class="relative w-full">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M16.6363 17.697C16.9292 17.9899 17.4041 17.9899 17.697 17.697C17.9899 17.4041 17.9899 16.9292 17.697 16.6363L16.6363 17.697ZM13.9167 8.83334C13.9167 11.6408 11.6408 13.9167 8.83334 13.9167V15.4167C12.4692 15.4167 15.4167 12.4692 15.4167 8.83334H13.9167ZM8.83334 13.9167C6.02589 13.9167 3.75 11.6408 3.75 8.83334H2.25C2.25 12.4692 5.19746 15.4167 8.83334 15.4167V13.9167ZM3.75 8.83334C3.75 6.02589 6.02589 3.75 8.83334 3.75V2.25C5.19746 2.25 2.25 5.19746 2.25 8.83334H3.75ZM8.83334 3.75C11.6408 3.75 13.9167 6.02589 13.9167 8.83334H15.4167C15.4167 5.19746 12.4692 2.25 8.83334 2.25V3.75ZM12.4697 13.5303L16.6363 17.697L17.697 16.6363L13.5303 12.4697L12.4697 13.5303Z" fill="#807D7E"/>
            </svg>
          </div>
          <input v-model="input" type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required>
        </div>
    </div>
    <ul class="flex gap-3">
      <li v-for="(svg, idx) in icons" :key="idx" class="icon cursor-pointer p-3 bg-[#F6F6F6] transition hover:bg-[#01add5] hover:text-white text-[20px] rounded-lg">
        <component :is="svg" filled />
      </li>
    </ul>
  </nav>
</template>
<style scoped lang="scss">
.icon:hover > *{
  filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(198deg) brightness(105%) contrast(102%);
}
</style>
