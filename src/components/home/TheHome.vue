<script setup lang="ts">
import HomeEnd from '@/components/home/HomeEnd.vue'
import HomeIntroduceFunc from '@/components/home/HomeIntroduceFunc.vue'
import HomeIntroduceGenre from '@/components/home/HomeIntroduceGenre.vue'
import HomeProfit from '@/components/home/HomeProfit.vue'
import HomeStepFlow from '@/components/home/HomeStepFlow.vue'
import HomeSuccessStory from '@/components/home/HomeSuccessStory.vue'
import HomeSupport from '@/components/home/HomeSupport.vue'
import HomeTop from '@/components/home/HomeTop.vue'
</script>

<template>
  <div class="main-body">
    <div style="white-space:pre-wrap;width:100%" data-node-view-content="">
      <div data-node-view-content-inner="document" style="white-space:inherit">
        <HomeTop />
        <HomeStepFlow />
        <HomeProfit />
        <HomeSupport />
        <HomeIntroduceFunc />
        <HomeIntroduceGenre />
        <HomeSuccessStory />
        <HomeEnd />
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
html
  min-height: var(--\31 00vh)
  min-height: -webkit-fill-available
  height: var(--\31 00vh)
  height: -webkit-fill-available

body
  position: relative
  --\31 00vh: 100vh
  --editor-width: 100vw

[data-node-view-content-inner="paragraph"]:empty::after
  content: " "

.main-body
  font-size: 1.125rem
  width: 100vw
</style>
