<script setup lang="ts">
import { getRecentTime } from '@/commons/date/date'

const mangas = {
  title: '回復術士のやり直し',
  img: 'https://dummyimage.com/320x400/000/fff',
  desc: 'I’ve become a rogue lord in another world! This is the story of a game I was playing! The story of the protagonist, who has become a rogue lord who dies after two days, successfully uses the game’s history and system to escape his impending doom and become the strongest.',
  updateTime: '2024-12-19 09:26:54',
  views: 3085481,
  chpaters: [{ no: 1, updateTime: '2018-03-03 05:54:54' }, { no: 2, updateTime: '2024-12-19 09:26:54' }]
}

const getChapter = (chapter: number) => `${chapter}章`
</script>

<template>
  <main>
    <section>
      <div>
        <img :src="mangas.img" />
      </div>
      <div>
        <h2>{{ mangas.title }}</h2>
        <p>{{ mangas.desc }}</p>
        <span>{{ getRecentTime(mangas.updateTime) }}</span>
        <span>{{ mangas.views }}</span>
      </div>
    </section>
    <section>
      <h2>章</h2>
      <ul>
        <li v-for="chapter in mangas.chpaters">
          <button type="button">{{ getChapter(chapter.no) }}</button>
          <span>{{ getRecentTime(chapter.updateTime) }}</span>
        </li>
      </ul>
    </section>
  </main>
</template>

<style lang="sass" scoped>
main
  color: black
  display: flex
  flex-direction: column
  align-items: center
  width: 100vw
</style>
