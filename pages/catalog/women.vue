<script lang="ts" setup>
import {createClient} from "@supabase/supabase-js";
import type {Good} from "~/types/good";

const client = createClient('https://bqkjptecxnnpwafkbuxe.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxa2pwdGVjeG5ucHdhZmtidXhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE4NzYyMzAsImV4cCI6MjAxNzQ1MjIzMH0._ZccfzjEK7HnLEJLUVCVzl3IelCA7VJ8YrAF5UoK97Y')

const isLoading = ref<boolean>(false)
const items = ref<Good[]>([])
const getGoods = async () => {
  isLoading.value = true
  const {data} = await useAsyncData('goods', async () => {
    const {data} = await client.from('female_clothes').select('*')
    return data
  })
  items.value = data.value as Good[]
  console.log(data.value)
  isLoading.value = false
}
getGoods()
</script>
<template>
  <section class="border-t border-[#BEBCBD]">
    <div class="max-w-[1240px] mx-auto flex gap-[50px]">
      <sidebar/>
      <div class="content pt-[50px]">
        <p class="mb-[20px] text-[22px] font-semibold">Women’s Clothing</p>
        <div v-if="!isLoading" class="flex justify-between flex-wrap gap-[30px]">
          <catalog-item v-for="item in items" :key="item.id" :item="item"/>
        </div>
        <div v-else>
          <p>Жестокая загрузка</p>
          <div class="loader mx-auto"></div>
        </div>
      </div>
      <!-- /.content -->
    </div>
  </section>
</template>
<style scoped lang="scss">
.loader {
  --w:10ch;
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  letter-spacing: var(--w);
  width:var(--w);
  overflow: hidden;
  white-space: nowrap;
  text-shadow:
      calc(-1*var(--w)) 0,
      calc(-2*var(--w)) 0,
      calc(-3*var(--w)) 0,
      calc(-4*var(--w)) 0,
      calc(-5*var(--w)) 0,
      calc(-6*var(--w)) 0,
      calc(-7*var(--w)) 0,
      calc(-8*var(--w)) 0,
      calc(-9*var(--w)) 0;
  animation: l16 2s infinite;
}
.loader:before {
  content:"Loading...";
}
@keyframes l16 {
  20% {text-shadow:
      calc(-1*var(--w)) 0,
      calc(-2*var(--w)) 0 red,
      calc(-3*var(--w)) 0,
      calc(-4*var(--w)) 0 #ffa516,
      calc(-5*var(--w)) 0 #63fff4,
      calc(-6*var(--w)) 0,
      calc(-7*var(--w)) 0,
      calc(-8*var(--w)) 0 green,
      calc(-9*var(--w)) 0;}
  40% {text-shadow:
      calc(-1*var(--w)) 0,
      calc(-2*var(--w)) 0 red,
      calc(-3*var(--w)) 0 #e945e9,
      calc(-4*var(--w)) 0,
      calc(-5*var(--w)) 0 green,
      calc(-6*var(--w)) 0 orange,
      calc(-7*var(--w)) 0,
      calc(-8*var(--w)) 0 green,
      calc(-9*var(--w)) 0;}
  60% {text-shadow:
      calc(-1*var(--w)) 0 lightblue,
      calc(-2*var(--w)) 0,
      calc(-3*var(--w)) 0 #e945e9,
      calc(-4*var(--w)) 0,
      calc(-5*var(--w)) 0 green,
      calc(-6*var(--w)) 0,
      calc(-7*var(--w)) 0 yellow,
      calc(-8*var(--w)) 0 #ffa516,
      calc(-9*var(--w)) 0 red;}
  80% {text-shadow:
      calc(-1*var(--w)) 0 lightblue,
      calc(-2*var(--w)) 0 yellow,
      calc(-3*var(--w)) 0 #63fff4,
      calc(-4*var(--w)) 0 #ffa516,
      calc(-5*var(--w)) 0 red,
      calc(-6*var(--w)) 0,
      calc(-7*var(--w)) 0 grey,
      calc(-8*var(--w)) 0 #63fff4,
      calc(-9*var(--w)) 0 ;}
}
</style>
