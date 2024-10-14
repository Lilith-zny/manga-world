<script setup>

import { RouterLink } from 'vue-router'
import { defineProps } from "vue";



defineProps({
    mangas: Array
})


</script>

<template>
  <section class="grid grid-cols-4 gap-10">
    <div
      v-for="(manga, index) in mangas"
      class="card bg-base-100 w-96 shadow-xl"
    >
    <figure>
      <RouterLink :to="{ name: manga.route}">
        <img
          class="w-56 h-auto hover:scale-105 transition duration-200 rounded-md"
          :src="manga.url"
        />
      </RouterLink>
    </figure>
      <div class="card-body">
        <h2 class="card-title">
          {{ manga.title }}
          <div class="badge bg-gradient-to-r from-pink-200 to-pink-400 text-white uppercase" v-if="manga.isNew">New</div>
        </h2>
        <RouterLink
          :to="{ name: manga.route }"
          class="bg-gradient-to-r from-red-500 to-purple-500 w-20 text-white rounded-full shadow-red shadow-lg flex items-center justify-center"
          href="#"
          >ตอนที่ 1</RouterLink
        >
        <div class="card-actions justify-end">
          <div class="badge badge-outline">{{ manga.genres }}</div>
          <div class="badge badge-outline">Drama</div>
        </div>
      </div>
    </div>
  </section>
</template>
