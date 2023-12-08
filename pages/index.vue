<script lang="ts" setup>
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'

definePageMeta({
  colorMode: 'light',
});
</script>
<template>
  <section class="w-full">
    <Carousel :items-to-show="1" class="w-full" items-to-show="1">
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
        <navigation/>
      </template>
    </Carousel>
  </section>
  <section class="max-w-[1240px] mx-auto">
    <div class="sales">
      <div class="sales-item">
        <p>Low Price</p>
        <h3>High Coziness</h3>
        <span>UPTO 50% OFF</span>
        <a-button>Explore Items</a-button>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.carousel {
  &-item {
    background-image: url('@/public/image/carousel-1.jpg');
    background-size: cover;
    background-repeat: no-repeat;
  }
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
        &:first-child button:after{
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
