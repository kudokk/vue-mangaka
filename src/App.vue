<script setup lang="ts">
import { RouterView } from 'vue-router'
import Footer from '@/components/footer/Footer.vue'
import Header from '@/components/header/Header.vue'
</script>

<template>
  <div class="body">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<style lang="sass" scoped>
.body
  background-image: url('@/assets/image/sample_mangaka_back.jpg')
</style>
