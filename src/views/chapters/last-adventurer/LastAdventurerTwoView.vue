<script setup>
import { RouterLink } from "vue-router";

import MangaLayout from "@/layouts/MangaLayout.vue";
</script>

<template>
  <MangaLayout>
    <section>
      <div class="w-full h-full flex justify-center items-center">
        <div>Manga</div>
        <div>
          <img
            src="https://www.up-manga.com/wp-content/uploads/2024/04/The-Last-Adventurer-ep2-1.jpg"
          />
          <img
            src="https://www.up-manga.com/wp-content/uploads/2024/04/The-Last-Adventurer-ep2-2.jpg"
          />
          <img
            src="https://www.up-manga.com/wp-content/uploads/2024/04/The-Last-Adventurer-ep2-3.jpg"
          />
          <img
            src="https://www.up-manga.com/wp-content/uploads/2024/04/The-Last-Adventurer-ep2-4.jpg"
          />
          <img
            src="https://www.up-manga.com/wp-content/uploads/2024/04/The-Last-Adventurer-ep2-5.jpg"
          />
          <img
            src="https://www.up-manga.com/wp-content/uploads/2024/04/The-Last-Adventurer-ep2-6.jpg"
          />
          <img
            src="https://www.up-manga.com/wp-content/uploads/2024/04/The-Last-Adventurer-ep2-7.jpg"
          />
          <img
            src="https://www.up-manga.com/wp-content/uploads/2024/04/The-Last-Adventurer-ep2-8.jpg"
          />
          <img
            src="https://www.up-manga.com/wp-content/uploads/2024/04/The-Last-Adventurer-ep2-9.jpg"
          />
          <img
            src="https://www.up-manga.com/wp-content/uploads/2024/04/The-Last-Adventurer-ep2-10.jpg"
          />
          <img
            src="https://www.up-manga.com/wp-content/uploads/2024/04/The-Last-Adventurer-ep2-11.jpg"
          />
          <img
            src="https://www.up-manga.com/wp-content/uploads/2024/04/The-Last-Adventurer-ep2-12.jpg"
          />
          <img
            src="https://www.up-manga.com/wp-content/uploads/2024/04/The-Last-Adventurer-ep2-13.jpg"
          />
        </div>
      </div>
      <div class="flex justify-end p-4 shadow-lg">
        <RouterLink
          
          class="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full btn-lg flex items-center gap-2 text-white"
        >
          NEXT TO >>
        </RouterLink>
      </div>
    </section>
  </MangaLayout>
</template>
