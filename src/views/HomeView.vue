<script setup>
import MangaLayout from "@/layouts/MangaLayout.vue";
import { RouterLink } from "vue-router";
import { storeToRefs } from "pinia";
// component
import Manga from "@/components/Manga.vue";
// stores
import { useMangaStore } from "@/stores/manga";
const mangaStore = useMangaStore();

// const { mangas } = storeToRefs(mangaStore);

mangaStore.fetchProducts();
</script>

<template>
  <MangaLayout>
    <Manga :mangas="mangaStore.mangas">
    </Manga>
  </MangaLayout>
</template>
