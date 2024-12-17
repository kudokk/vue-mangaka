<script setup lang="ts">
import HomeButton from '@/commons/button/HomeButton.vue'
import CardInnerFrame from '@/commons/frame/CardInnerFrame.vue'
import HeroImage from '@/commons/HeroImage.vue'
</script>
<template>
  <div class="home-top">
    <div class="home-top-inner">
      <HeroImage src="./src/assets/image/sample_mangaka1.jpg" back-color="black">
        <CardInnerFrame header="漫画家になろう - あなたの才能を収益化" class="home-top-inner-frame">
          <p class="home-top-desc">
            漫画家になろうは、あなたの漫画作品を世界中のファンに届け、その人気に応じて収益を得られるプラットフォームです。<br>才能あふれる皆さま、ここで夢を叶えましょう！
          </p>
          <div class="button-wrapper">
            <HomeButton class="button-left" text="今すぐ登録" />
            <HomeButton text="詳細を見る" />
          </div>
        </CardInnerFrame>
      </HeroImage>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.home-top
  display: flex
  justify-content: center

  &-inner-frame :deep(.card-inner-frame-header)
    color: white

.home-top-desc
  color: white
  font-size: 1em
  margin-top: 1.125em
  margin-bottom: 1.125em

.button-wrapper
  display: flex

.button-left
  margin-right: 10px
</style>