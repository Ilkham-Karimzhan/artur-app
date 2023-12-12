<script lang="ts" setup>
import ArrowBig from '@/assets/icons/arrow-left-big.svg'
import ArrowRightBig from '@/assets/icons/arrow-right-big.svg'
import ArrowLeftMain from '@/assets/icons/arrow-left-main.svg'
import ArrowDown from '@/assets/icons/arrow-down.svg'
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'

useHead({
  title: 'Главная - Beyoung',
})

interface Arrival {
  image: string
  title: string
}

definePageMeta({
  colorMode: 'light',
});

const swiperMain = ref<HTMLElement | null>(null)
const swiperNewArrival = ref<HTMLElement | null>(null)

const arrival: Arrival[] = [
  {
    image: '/image/new-arrival-1.png',
    title: 'Knitted Joggers'
  },
  {
    image: '/image/new-arrival-2.png',
    title: 'Full Sleeve'
  },
  {
    image: '/image/new-arrival-3.png',
    title: 'Active T-Shirts'
  },
  {
    image: '/image/new-arrival-4.png',
    title: 'Urban Shirts'
  },
  {
    image: '/image/new-arrival-1.png',
    title: 'Knitted Joggers'
  },
  {
    image: '/image/new-arrival-2.png',
    title: 'Full Sleeve'
  },
  {
    image: '/image/new-arrival-3.png',
    title: 'Active T-Shirts'
  },
  {
    image: '/image/new-arrival-4.png',
    title: 'Urban Shirts'
  },
  {
    image: '/image/new-arrival-1.png',
    title: 'Knitted Joggers'
  },
  {
    image: '/image/new-arrival-2.png',
    title: 'Full Sleeve'
  },
  {
    image: '/image/new-arrival-3.png',
    title: 'Active T-Shirts'
  },
  {
    image: '/image/new-arrival-4.png',
    title: 'Urban Shirts'
  },
]


</script>
<template>
  <section class="relative w-full">
    <Carousel ref="swiperMain" :autoplay="4000" :items-to-show="1" class="w-full" items-to-show="1">
      <Slide v-for="slide in 10" :key="slide">
        <div class="w-full py-[130px] text-white carousel-item">
          <div class="max-w-[1240px] mx-auto gap-y-10 flex flex-col text-left justify-start">
            <p class="text-[32px] capitalize">
              T-shirt / Tops
            </p>
            <h2 class="text-[78px] font-extrabold max-w-[440px] leading-[94px]">Summer <br>Value Pack</h2>
            <p class="text-[32px] leading-[47px]">cool / colorful / comfy</p>
            <div>
              <a-button class="bg-white transition hover:bg-[#ededed] text-black">Shop Now</a-button>
            </div>
          </div>
        </div>
      </Slide>
      <template #addons>
        <pagination/>
      </template>
    </Carousel>
    <div class="absolute top-[50%] flex justify-between items-center w-full px-[40px] text-[24px]">
      <div class="cursor-pointer" @click="swiperMain.prev">
        <arrow-big filled/>
      </div>
      <div class="cursor-pointer" @click="swiperMain.next">
        <arrow-right-big filled/>
      </div>
    </div>
  </section>
  <section class="max-w-[1240px] mx-auto pt-[130px]">
    <div class="sales flex justify-between gap-[30px]">
      <div class="sales__item w-full flex flex-col items-start pt-[67px] pl-[28px] pb-[80px] text-white rounded-xl">
        <p class="text-lg font-extrabold mb-[25px]">Low Price</p>
        <h3 class="text-[34px] font-extrabold mb-2.5">High Coziness</h3>
        <span class="text-base mb-[42px]">UPTO 50% OFF</span>
        <button class="text-[20px] transition hover:underline font-extrabold">Explore Items</button>
      </div>
      <div class="sales__item w-full flex flex-col items-end pt-[67px] pr-[28px] pb-[80px] text-white rounded-xl">
        <p class="text-lg font-extrabold mb-[25px]">Beyoung Presents</p>
        <h3 class="text-[34px] leading-[45px] font-extrabold mb-2.5">Breezy Summer <br> Style</h3>
        <span class="text-base mb-[42px]">UPTO 50% OFF</span>
        <button class="text-[20px] transition hover:underline font-extrabold">Explore Items</button>
      </div>
    </div>
  </section>
  <section class="max-w-[1240px] mx-auto pt-[100px]">
    <topic class="mb-[70px]" title="New Arrival"/>
    <div class="relative">
      <Carousel ref="swiperNewArrival" :items-to-show="4" class=" px-[35px]" snap-align="start">
        <Slide v-for="slide in arrival" :key="slide">
          <div class="text-left">
            <NuxtImg :draggable="false" :src="slide.image" alt="New Arrival"
                     class="arrival__card cursor-pointer transition w-[262px] mb-[32px] rounded-lg"/>
            <p class="text-xl font-bold">
              {{ slide.title }}
            </p>
          </div>
        </Slide>
      </Carousel>
      <div class="absolute top-[50%] flex justify-between items-center w-full text-[14px]">
        <div class="cursor-pointer" @click="swiperNewArrival.prev">
          <arrow-left-main filled/>
        </div>
        <div class="cursor-pointer rotate-180" @click="swiperNewArrival.next">
          <arrow-left-main filled/>
        </div>
      </div>
    </div>
  </section>
  <section class="max-w-[1240px] mx-auto py-[100px]">
    <topic class="mb-[70px]" title="Big Saving Zone"/>
    <div class="save-zone flex justify-between gap-5 text-white mb-5">
      <div class="save-zone__item w-full rounded-xl py-[65px] px-5">
        <h5 class="text-[28px] font-semibold leading-[38px] mb-2.5">Hawaiian <br>Shirts</h5>
        <p class="text-sm mb-2.5 font-semibold">Dress up in summer vibe</p>
        <p class="text-lg font-bold mb-[30px]">UPTO 50% OFF</p>
        <div class="ml-[45px] mb-[45px]">
          <arrow-down class="text-[24px]" filled/>
        </div>
        <button class="leading-0 rounded-md py-2.5 px-[25px] text-xs border border-white uppercase">Shop now</button>
      </div>
      <div class="save-zone__item w-full flex flex-col items-end rounded-xl py-[65px] px-5">
        <h5 class="text-[28px] font-semibold leading-[38px] mb-2.5">Printed <br>T-Shirt</h5>
        <p class="text-sm mb-2.5 font-semibold">New Designs Every Week</p>
        <p class="text-lg font-bold mb-[30px]">UPTO 40% OFF</p>
        <div class="ml-[45px] mb-[45px]">
          <arrow-down class="text-[24px]" filled/>
        </div>
        <button class="leading-0 rounded-md py-2.5 px-[25px] text-xs border border-white uppercase">Shop now</button>
      </div>
      <div class="save-zone__item text-[#3C4242] w-full flex flex-col items-end pr-[17px] rounded-xl py-[65px]">
        <div>
          <h5 class="text-[28px] font-semibold leading-[38px] mb-2.5">Cargo <br>Joggers</h5>
          <p class="text-sm mb-2.5 font-semibold">Move with style & comfort</p>
          <p class="text-lg font-bold mb-[30px]">UPTO 50% OFF</p>
          <div class="ml-[45px] mb-[45px]">
            <arrow-down class="text-[24px]" filled/>
          </div>
          <button class="leading-0 rounded-md py-2.5 px-[25px] text-xs border border-[#3C4242] uppercase">Shop now
          </button>
        </div>
      </div>
    </div>
    <div class="save-zone flex justify-between gap-5 text-[#3C4242]">
      <div
          class="save-zone__item save-zone__item--second w-full flex flex-col items-start pl-[359px] rounded-xl py-[65px]">
        <h5 class="text-[28px] font-semibold leading-[38px] mb-2.5">Hawaiian <br>Shirts</h5>
        <p class="text-sm mb-2.5 font-semibold">Dress up in summer vibe</p>
        <p class="text-lg font-bold mb-[30px]">UPTO 50% OFF</p>
        <div class="ml-[45px] mb-[45px]">
          <arrow-down class="text-[24px]" filled/>
        </div>
        <button class="leading-0 rounded-md py-2.5 px-[25px] text-xs border border-[#3C4242] uppercase">Shop now
        </button>
      </div>
      <div
          class="save-zone__item save-zone__item--second w-full flex flex-col items-start pl-[359px] rounded-xl py-[65px]">
        <h5 class="text-[28px] font-semibold leading-[38px] mb-2.5">Printed <br>T-Shirt</h5>
        <p class="text-sm mb-2.5 font-semibold">New Designs Every Week</p>
        <p class="text-lg font-bold mb-[30px]">UPTO 40% OFF</p>
        <div class="ml-[45px] mb-[45px]">
          <arrow-down class="text-[24px]" filled/>
        </div>
        <button class="leading-0 rounded-md py-2.5 px-[25px] text-xs border border-[#3C4242] uppercase">Shop now
        </button>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.carousel {
  &-item {
    background-image: url('/image/carousel-1.jpg');
    background-size: cover;
    background-repeat: no-repeat;
  }
}

.sales {
  &__item {
    &:first-child {
      background-image: url('/image/carousel-2.jpg');
    }

    &:last-child {
      background-image: url('/image/carousel-4.jpeg');
      transform: scaleX(-1);

      & > * {
        transform: scaleX(-1)
      }
    }

    box-shadow: -38px 2px 53px 11px rgba(34, 60, 80, 0.2);
    background-size: cover;
    background-repeat: no-repeat;
    transition: 0.3s;

    &:hover {
      box-shadow: -38px 2px 53px 11px rgba(34, 60, 80, 0.4);
      scale: 1.01;
    }
  }
}

.save-zone {
  &__item {
    &:nth-child(1) {
      background-image: url('/image/save-zone-1.png');
    }

    &:nth-child(2) {
      background-image: url('/image/save-zone-3.png');
    }

    &:nth-child(3) {
      background-image: url('/image/save-zone-2.png');
    }

    &--second {
      &:nth-child(1) {
        background-image: url('/image/save-zone-4.png');
      }

      &:nth-child(2) {
        background-image: url('/image/save-zone-5.png');
      }
    }

    background-size: cover;
    background-repeat: no-repeat;

    & button {
      transition: 0.3s;
      &:hover {
        border: white solid 1px;
        background-color: #ffffff;
        color: #000000;
      }
    }
  }
}

.arrival__card:hover {
  box-shadow: -6px 6px 24px 0px rgba(34, 60, 80, 0.2);
}

:deep {
  .carousel {
    position: relative;

    &__pagination {
      position: absolute;
      transform: translateX(-50%);
      left: 50%;
      bottom: 50px;

      &-item {
        button {
          padding: 0;

          &:after {
            width: 63px;
            height: 10px;
            margin: 0;
            background-color: #ffffff;
            opacity: 0.5;
          }

        }

        &:first-child button:after {
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
        }

        &:last-child button:after {
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
        }
      }
    }
  }

  .carousel__pagination-button--active::after {
    opacity: 1 !important;
  }
}

</style>
