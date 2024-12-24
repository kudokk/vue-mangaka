<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/header/Header.vue'
import Login from '@/components/account/Login.vue'
import { useLoginModalStore } from '@/stores/loginModal'

const loginModalStore = useLoginModalStore()

</script>

<template>
  <div class="body">
    <Header />
    <RouterView />
    <Login v-if="loginModalStore.isOpenLoginModal" />
  </div>
</template>

<style lang="sass" scoped>
.body
  background-image: url('@/assets/image/sample_mangaka_back.jpg')
</style>
