<script setup lang="ts">
import Account from '@/components/header/Account.vue'
</script>
<template>
  <header>
    <div>
      <img />
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

h1
  line-height: 1

h1 a
  color: black
  font-size: 2.25rem
  padding: 0
</style>