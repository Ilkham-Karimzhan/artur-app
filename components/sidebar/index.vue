<script lang="ts" setup>
import FilterIcon from '~/assets/icons/filter.svg'
import ArrowRight from '~/assets/icons/arrow-right.svg'

interface ClothType {
  id: number;
  label: string;
}

const clothTypes: ClothType[] = [
  {
    id: 1,
    label: 'Tops',
  },
  {
    id: 2,
    label: 'Printed T-shirts',
  },
  {
    id: 3,
    label: 'Plain T-shirts',
  },
  {
    id: 4,
    label: 'Kurti',
  },
  {
    id: 5,
    label: 'Boxers',
  },
  {
    id: 6,
    label: 'Full sleeve T-shirts',
  },
  {
    id: 7,
    label: 'Joggers',
  },
  {
    id: 8,
    label: 'Payjamas',
  },
  {
    id: 9,
    label: 'Jeans',
  },
];

const colors = [
  {
    hex: '#8434E1',
    label: 'Purple'
  },
]

const isPriceOpen = ref<boolean>(false);
const isColorOpen = ref<boolean>(false);

const priceFrom = ref<number>(0);
const priceTo = ref<number>(0);
</script>
<template>
  <div class="w-[295px] text-[#807D7E]">
    <div class="filter ">
      <div class="flex justify-between items-center px-[30px] py-5 border-r border-l border-b  border-[#BEBCBD]">
        <p class="text-[22px] font-semibold leading-normal">Filter</p>
        <filter-icon class="text-[16px]" filled/>
      </div>
      <div class="px-[30px] py-10 border-r border-l border-b  border-[#BEBCBD]">
        <ul class="flex flex-col gap-[18px]">
          <li v-for="cloth in clothTypes"
              :key="cloth.id"
              class="flex justify-between items-center text-base font-semibold cursor-pointer transition hover:text-[#00c5ee]">
            <p>{{ cloth.label }}</p>
            <arrow-right filled/>
          </li>
        </ul>
      </div>
    </div>
    <!-- /.filter -->
    <div class="price">
      <div class="flex justify-between items-center px-[30px] py-5 border-r border-l border-b  border-[#BEBCBD]">
        <p class="text-[22px] font-semibold leading-normal">Price</p>
        <arrow-right :class="['text-[16px] cursor-pointer transition-all rotate-90', {'rotate-[270deg]': isPriceOpen}]"
                     filled
                     @click="isPriceOpen = !isPriceOpen"/>
      </div>
      <Transition name="">
        <div v-if="isPriceOpen" class="flex justify-between items-center gap-[30px] px-[30px] py-5 border-r border-l border-b  border-[#BEBCBD]">
          <input v-model="priceFrom" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 type="text">
          <span>to</span>
          <input v-model="priceTo" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 type="text">
        </div>
      </Transition>
    </div>
    <!-- /.price -->
    <div class="colors">
      <div class="flex justify-between items-center px-[30px] py-5 border-r border-l border-b  border-[#BEBCBD]">
        <p class="text-[22px] font-semibold leading-normal">Colors</p>
        <arrow-right :class="['text-[16px] cursor-pointer transition-all rotate-90', {'rotate-[270deg]': isPriceOpen}]"
                     filled
                     @click="isColorOpen = !isColorOpen"/>
      </div>
      <div>

      </div>
    </div>
    <!-- /.colors -->
  </div>
</template>
