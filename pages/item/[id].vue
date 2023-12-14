<script setup lang="ts">
  import StarIcon from '~/assets/icons/star.svg';
  import MessageIcon from '~/assets/icons/message.svg';
  import CartIcon from '~/assets/icons/cart.svg';
  import SecureIcon from '~/assets/icons/secure.svg';
  import ShippingIcon from '~/assets/icons/shipping.svg';
  import SizeIcon from '~/assets/icons/size.svg';
  import ReturnIcon from '~/assets/icons/return.svg';
  import Topic from '~/components/topic/index.vue';

  import { createClient } from '@supabase/supabase-js';
  import type { Good } from '~/types/good';

  defineProps<{
    item: Good;
  }>();

  const route = useRoute();

  const config = useRuntimeConfig();
  const client = createClient(config.public.ulr, config.public.secret);

  const currentSlide = ref<number>(0);
  const isLoading = ref<boolean>(false);

  const item = ref<Good>({} as Good);
  const getGoods = async () => {
    isLoading.value = true;
    const { data } = await useAsyncData('goods', async () => {
      const { data } = await client
        .from('female_clothes')
        .select()
        .eq('id', route.params.id);
      return data;
    });
    item.value = (data.value as Good[])[0];
    currentSize.value = item.value.size.size[0];
    currentColor.value = item.value.color.color[0];

    isLoading.value = false;
  };
  getGoods();

  const slideTo = (val: number) => {
    currentSlide.value = val;
  };

  const currentSize = ref<string>('');
  const currentColor = ref<string>('');
</script>
<template>
  <section class="border-t border-[#BEBCBD]">
    <div
      class="max-w-[1240px] mx-auto flex justify-between gap-[72px]"
      v-if="!isLoading"
    >
      <div class="w-[50%] flex flex-col items-center">
        <div class="w-[520px] mb-2.5">
          <Carousel
            :items-to-show="1"
            :wrap-around="false"
            v-model="currentSlide"
          >
            <Slide v-for="slide in item.description.src" :key="slide">
              <div class="w-[520px] h-[705px]">
                <NuxtImg class="w-full" :src="slide" />
              </div>
            </Slide>
          </Carousel>
        </div>

        <div class="w-[292px]">
          <Carousel
            :items-to-show="
              item.description.src.length > 4 ? 4 : item.description.src.length
            "
            v-model="currentSlide"
            ref="carousel"
          >
            <Slide v-for="(slide, idx) in item.description.src" :key="slide">
              <div class="w-[68px] h-[68px]" @click="slideTo(idx)">
                <NuxtImg :src="slide" />
              </div>
            </Slide>
          </Carousel>
        </div>
      </div>
      <div class="flex flex-col gap-[35px] w-[50%] pt-[30px]">
        <p class="text-[#807D7E]">
          Shop / <nuxt-link to="/catalog/women">Women</nuxt-link> /
          {{ item.id }}
        </p>
        <h2 class="text-[34px] font-semibold leading-[140%]">
          {{ item.name }}
        </h2>
        <div class="flex items-center gap-[28px] text-[#807D7E]">
          <div class="flex items-center gap-2">
            <star-icon
              class="text-[22px]"
              filled
              v-for="star in Math.floor(item.raiting)"
              :key="star"
            />
            <span>{{ item.raiting }}</span>
          </div>
          <div class="flex items-center gap-2">
            <message-icon filled class="text-[22px]" />
            <span>{{ item.comments_count }}</span>
          </div>
        </div>
        <div>
          <p class="mb-[25px] text-[18px] font-semibold">Select Size</p>
          <div class="flex items-center gap-5">
            <div
              class="flex items-center justify-center cursor-pointer transition hover:border-[#3C4242] w-[40px] h-[40px] border border-[#BEBCBD] rounded-xl"
              :class="{
                'bg-[#3C4242] border-[#3C4242] text-white':
                  currentSize === size,
              }"
              v-for="(size, idx) in item.size.size"
              :key="idx"
              @click="currentSize = size"
            >
              <span>{{ size }}</span>
            </div>
          </div>
        </div>
        <div>
          <p class="mb-[25px] text-[18px] font-semibold">Colours Available</p>
          <div class="flex items-center gap-3">
            <div
              class="flex items-center justify-center w-[30px] h-[30px] rounded-full transition hover:border"
              :class="{ 'border-2 border-[#3C4242]': currentColor === color }"
              v-for="(color, idx) in item.color.color"
              :key="idx"
              @click="currentColor = color"
            >
              <span
                class="w-[22px] h-[22px] rounded-full border"
                :style="{ 'background-color': color }"
              ></span>
            </div>
          </div>
        </div>
        <div class="flex gap-[25px]">
          <button
            class="flex items-center gap-3 text-white text-[18px] font-semibold bg-[#8A33FD] rounded-lg py-[12px] px-[40px] transition cursor-pointer hover:scale-105"
          >
            <cart-icon class="white-icon" filled /><span>Add to cart</span>
          </button>
          <button
            class="flex items-center gap-3 text-[18px] font-semibold border border-[#3C4242] rounded-lg py-[12px] px-[40px] transition cursor-default"
          >
            <span>${{ item.price }}</span>
          </button>
        </div>
        <hr class="bg-[#BEBCBD]" />
        <div>
          <ul class="flex flex-wrap gap-x-[100px] gap-y-[26px]">
            <li class="flex items-center gap-[15px]">
              <div><secure-icon class="text-[44px]" filled /></div>
              <p class="text-[18px]">Secure payment</p>
            </li>
            <li class="flex items-center gap-[15px]">
              <div><shipping-icon class="text-[44px]" filled /></div>
              <p class="text-[18px]">Size & Fit</p>
            </li>
            <li class="flex items-center gap-[15px]">
              <div><size-icon class="text-[44px]" filled /></div>
              <p class="text-[18px]">Secure payment</p>
            </li>
            <li class="flex items-center gap-[15px]">
              <div><return-icon class="text-[44px]" filled /></div>
              <p class="text-[18px]">Secure payment</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div v-if="!isLoading" class="max-w-[1240px] mx-auto pt-[100px]">
      <topic title="Product Description" />
      <p class="my-[30px] text-[#BEBCBD]">{{ item.description.base }}</p>
      <div class="flex bg-[#F6F6F6] w-fit rounded-2xl">
        <div>
          <div v-if="item.description.Fabric" class="py-[24px] px-[48px] border-b border-r border-[#BEBCBD]">
            <p class="mb-3 text-[#807D7E] text-base">Fabric</p>
            <p>{{ item.description.Fabric }}</p>
          </div>
          <div v-if="item.description.neck" class="py-[24px] px-[48px] border-r border-[#BEBCBD]">
            <p class="mb-3 text-[#807D7E] text-base">Neck</p>
            <p>{{ item.description.neck }}</p>
          </div>
          <div v-if="item.description.side_length" class="py-[24px] px-[48px] border-r border-[#BEBCBD]">
            <p class="mb-3 text-[#807D7E] text-base">Длина по боковому шву</p>
            <p>{{ item.description.side_length }}</p>
          </div>
        </div>
        <div>
          <div v-if="item.description.pattern" class="py-[24px] px-[48px] border-b border-r border-[#BEBCBD]">
            <p class="mb-3 text-[#807D7E] text-base">Pattern</p>
            <p>{{ item.description.pattern }}</p>
          </div>
          <div v-if="item.description.sleeve" class="py-[24px] px-[48px] border-r border-[#BEBCBD]">
            <p class="mb-3 text-[#807D7E] text-base">Sleeve</p>
            <p>{{ item.description.sleeve }}</p>
          </div>
          <div v-if="item.description.width_bottom" class="py-[24px] px-[48px] border-r border-[#BEBCBD]">
            <p class="mb-3 text-[#807D7E] text-base">Ширина по низу</p>
            <p>{{ item.description.width_bottom }}</p>
          </div>
        </div>
        <div>
          <div v-if="item.description.fit" class="py-[24px] px-[48px] border-b border-[#BEBCBD]">
            <p class="mb-3 text-[#807D7E] text-base">Fit</p>
            <p>{{ item.description.fit }}</p>
          </div>
          <div v-if="item.description.style" class="py-[24px] px-[48px] border-[#BEBCBD]">
            <p class="mb-3 text-[#807D7E] text-base">Style</p>
            <p>{{ item.description.style }}</p>
          </div>
        </div>
        <div>
          <div v-if="item.description.zipper" class="py-[24px] px-[48px] border-b border-l border-[#BEBCBD]">
            <p class="mb-3 text-[#807D7E] text-base">Застежка </p>
            <p>{{ item.description.zipper }}</p>
          </div>
          <div v-if="item.description.pocket" class="py-[24px] px-[48px] border-l border-[#BEBCBD]">
            <p class="mb-3 text-[#807D7E] text-base">Карманы</p>
            <p>{{ item.description.pocket }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
  .white-icon {
    filter: brightness(0) saturate(100%) invert(98%) sepia(2%) saturate(3%)
      hue-rotate(8deg) brightness(115%) contrast(100%);
  }
</style>
