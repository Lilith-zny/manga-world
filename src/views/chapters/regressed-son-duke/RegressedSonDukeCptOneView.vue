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
            src="https://www.up-manga.com/wp-content/uploads/2024/03/The-Regressed-Son-of-a-Duke-is-an-Assassin-ep1-1.jpg"
          />
          <img
            src="https://www.up-manga.com/wp-content/uploads/2024/03/The-Regressed-Son-of-a-Duke-is-an-Assassin-ep1-2.jpg"
          />
          <img
            src="https://www.up-manga.com/wp-content/uploads/2024/03/The-Regressed-Son-of-a-Duke-is-an-Assassin-ep1-3.jpg"
          />
          <img
            src="https://www.up-manga.com/wp-content/uploads/2024/03/The-Regressed-Son-of-a-Duke-is-an-Assassin-ep1-4.jpg"
          />
          <img
            src="https://www.up-manga.com/wp-content/uploads/2024/03/The-Regressed-Son-of-a-Duke-is-an-Assassin-ep1-5.jpg"
          />
          <img
            src="https://www.up-manga.com/wp-content/uploads/2024/03/The-Regressed-Son-of-a-Duke-is-an-Assassin-ep1-6.jpg"
          />
          <img
            src="https://www.up-manga.com/wp-content/uploads/2024/03/The-Regressed-Son-of-a-Duke-is-an-Assassin-ep1-7.jpg"
          />
          <img
            src="https://www.up-manga.com/wp-content/uploads/2024/03/The-Regressed-Son-of-a-Duke-is-an-Assassin-ep1-8.jpg"
          />
          <img
            src="https://www.up-manga.com/wp-content/uploads/2024/03/The-Regressed-Son-of-a-Duke-is-an-Assassin-ep1-9.jpg"
          />
          <img
            src="https://www.up-manga.com/wp-content/uploads/2024/03/The-Regressed-Son-of-a-Duke-is-an-Assassin-ep1-10.jpg"
          />
          <img
            src="https://www.up-manga.com/wp-content/uploads/2024/03/The-Regressed-Son-of-a-Duke-is-an-Assassin-ep1-11.jpg"
          />
          <img
            src="https://www.up-manga.com/wp-content/uploads/2024/03/The-Regressed-Son-of-a-Duke-is-an-Assassin-ep1-12.jpg"
          />
          <img
            src="https://www.up-manga.com/wp-content/uploads/2024/03/The-Regressed-Son-of-a-Duke-is-an-Assassin-ep1-13.jpg"
          />
          <img
            src="https://www.up-manga.com/wp-content/uploads/2024/03/The-Regressed-Son-of-a-Duke-is-an-Assassin-ep1-14.jpg"
          />
          <img
            src="https://www.up-manga.com/wp-content/uploads/2024/03/The-Regressed-Son-of-a-Duke-is-an-Assassin-ep1-15.jpg"
          />
          <img
            src="https://www.up-manga.com/wp-content/uploads/2024/03/The-Regressed-Son-of-a-Duke-is-an-Assassin-ep1-22.jpg"
          />
        </div>
      </div>
      <div class="flex justify-end p-4 shadow-lg">
        <RouterLink
          :to="{ name: 'regressed-son-duke-cpt-2' }"
          class="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full btn-lg flex items-center gap-2 text-white"
        >
          NEXT TO >>
        </RouterLink>
      </div>
    </section>
  </MangaLayout>
</template>
