<script setup lang="ts">
import Account from '@/components/header/Account.vue'
</script>
<template>
  <header>
    <div class="header-inner">
      <img src="@/assets/image/sample_logo4.ico" alt="ロゴ画像" class="logo" />
      <h1>
        <RouterLink to="/">日本初の漫画投稿サイト</RouterLink>
      </h1>
    </div>
    <Account />
  </header>
</template>

<style lang="sass" scoped>
header
  display: flex
  align-items: center
  justify-content: space-between
  height: 2.5rem

.header-inner
  display: flex

.logo
  height: 2.25rem
  width: 2.25rem

h1
  line-height: 1

h1 a
  color: black
  font-size: 2.25rem
  padding: 0
</style>