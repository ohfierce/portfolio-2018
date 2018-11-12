<template>
  <div class="section section--stack">
    <div class="stack">
      <swiper :options="swiperOption">
      <swiper-slide><img :src="require('@/assets/images/laravel.svg')"></swiper-slide>
      <swiper-slide><img :src="require('@/assets/images/vue.svg')"></swiper-slide>
      <swiper-slide><img :src="require('@/assets/images/sass.svg')"></swiper-slide>
      <swiper-slide><img :src="require('@/assets/images/vscode.svg')"></swiper-slide>
      <swiper-slide><img :src="require('@/assets/images/debian.svg')"></swiper-slide>
      <swiper-slide><img :src="require('@/assets/images/git.svg')"></swiper-slide>
      <swiper-slide><img :src="require('@/assets/images/npm.svg')"></swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script src="./stack.js"></script>
<style src="./stack.sass" lang="sass" scoped></style>