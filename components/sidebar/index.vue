<script lang="ts" setup>
import FilterIcon from '~/assets/icons/filter.svg';
import ArrowRight from '~/assets/icons/arrow-right.svg';
import {colors} from '~/assets/static-data/useColors';
import {clothTypes} from '~/assets/static-data/useClothTypes';
import {clothSizes} from '~/assets/static-data/useClothSizes';

const isPriceOpen = ref<boolean>(false);
const isColorOpen = ref<boolean>(false);
const isSizeOpen = ref<boolean>(false);

const priceFrom = ref<number>(5000);
const priceTo = ref<number>(32000);
const selectedColor = ref<string[]>([]);
const selectedSize = ref<string>('');

const emit = defineEmits(['filter']);
const handleColorChange = (color: string) => {
  if (selectedColor.value.includes(color)) {
    selectedColor.value = selectedColor.value.filter((c) => c !== color);
  } else {
    selectedColor.value.push(color);
  }
};

const triggerNullify = () => {
  priceFrom.value = 0
  priceTo.value = 0
  selectedColor.value = []
  selectedSize.value = ''
}
watch([priceFrom, priceTo, selectedSize, selectedColor], () => {
  emit('filter', {
    priceFrom: priceFrom.value,
    priceTo: priceTo.value,
    selectedColor: selectedColor.value,
    selectedSize: selectedSize.value,
  })
}, {deep: true} )
</script>
<template>
  <div class="min-w-[295px] max-w-[295px] text-[#807D7E] select-none">
    <div class="filter">
      <div
          class="flex justify-between items-center px-[30px] py-5 border-r border-l border-b border-[#BEBCBD]"
      >
        <p class="text-[22px] font-semibold leading-normal">Filter</p>
        <filter-icon class="text-[16px]" filled/>
      </div>
      <div class="px-[30px] py-10 border-r border-l border-b border-[#BEBCBD]">
        <ul class="flex flex-col gap-[18px]">
          <li
              v-for="cloth in clothTypes"
              :key="cloth.id"
              class="flex justify-between items-center text-base font-semibold cursor-pointer transition hover:text-[#00c5ee]"
          >
            <p>{{ cloth.label }}</p>
            <arrow-right filled/>
          </li>
        </ul>
      </div>
    </div>
    <!-- /.filter -->
    <div class="price">
      <div
          class="flex justify-between items-center px-[30px] py-5 border-r border-l border-b border-[#BEBCBD]"
      >
        <p class="text-[22px] font-semibold leading-normal">Price</p>
        <arrow-right
            :class="[
            'text-[16px] cursor-pointer transition-all rotate-90',
            { 'rotate-[270deg]': !isPriceOpen },
          ]"
            filled
            @click="isPriceOpen = !isPriceOpen"
        />
      </div>
      <Transition name="slide">
        <div
            v-show="isPriceOpen"
            class="flex justify-between items-center gap-[30px] px-[30px] py-5 border-r border-l border-b border-[#BEBCBD]"
        >
          <input
              id="small-input"
              v-model="priceFrom"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="number"
          />
          <span>to</span>
          <input
              id="small-input"
              v-model="priceTo"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="number"
          />
        </div>
      </Transition>
    </div>
    <!-- /.price -->
    <div class="colors">
      <div
          class="flex justify-between items-center px-[30px] py-5 border-r border-l border-b border-[#BEBCBD]"
      >
        <p class="text-[22px] font-semibold leading-normal">Colors</p>
        <arrow-right
            :class="[
            'text-[16px] cursor-pointer transition-all rotate-90',
            { 'rotate-[270deg]': !isColorOpen },
          ]"
            filled
            @click="isColorOpen = !isColorOpen"
        />
      </div>
      <div
          v-if="isColorOpen"
          class="px-[30px] py-5 border-r border-l border-b border-[#BEBCBD]"
      >
        <ul class="flex justify-between flex-wrap gap-[18px]">
          <li
              v-for="(color, idx) in colors"
              :key="idx"
              class="flex flex-col justify-center items-center w-[40px] gap-[18px] text-sm font-bold"
              @click="handleColorChange(color.label)"
          >
            <div
                :class="{ 'border-2 border-[#c987ff]': selectedColor.includes(color.label)}"
                :style="{ 'background-color': color.hex }"
                class="w-[36px] h-[36px] rounded-xl transition hover:scale-110 cursor-pointer"
            ></div>
            <p>{{ color.label }}</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- /.colors -->
    <div class="sizes">
      <div
          class="flex justify-between items-center px-[30px] py-5 border-r border-l border-b border-[#BEBCBD]"
      >
        <p class="text-[22px] font-semibold leading-normal">Sizes</p>
        <arrow-right
            :class="[
            'text-[16px] cursor-pointer transition-all rotate-90',
            { 'rotate-[270deg]': !isSizeOpen },
          ]"
            filled
            @click="isSizeOpen = !isSizeOpen"
        />
      </div>
      <div
          v-if="isSizeOpen"
          class="px-[30px] py-5 border-r border-l border-b border-[#BEBCBD]"
      >
        <ul class="flex flex-wrap gap-5 text-sm font-bold">
          <li
              v-for="(size, idx) in clothSizes"
              :key="idx"
              :class="{'border-[#F05A00]': selectedSize === size}"
              class="flex items-center justify-center cursor-pointer transition hover:scale-110 w-[61px] h-[32px] px-[17px] py-[7px] rounded-lg border border-[#BEBCBD]"
              @click="selectedSize = size"
          >
            <span>{{ size }}</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- /.sizes -->
    <a-button @click="triggerNullify" class="border mx-auto mt-5 transition hover:bg-[#00c5ee] hover:text-white">Null Filter</a-button>
  </div>
</template>
<style lang="scss" scoped>
.slide-enter-active {
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
}

.slide-leave-active {
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
}

.slide-enter-to,
.slide-leave {
  transform: scale(1);
}

.slide-enter,
.slide-leave-to {
  display: none;
}
</style>
