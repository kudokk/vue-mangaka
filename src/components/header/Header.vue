<script setup lang="ts">
import Account from '@/components/header/Account.vue'
</script>
<template>
  <header>
    <h1>日本初の漫画投稿サイト</h1>
    <p>漫画家応援サイト</p>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <Account />
  </header>
</template>