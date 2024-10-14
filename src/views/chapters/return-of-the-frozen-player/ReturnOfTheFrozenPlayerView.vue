<script setup>
import { RouterLink } from "vue-router";
// MangaLayout
import MangaLayout from "@/layouts/MangaLayout.vue";
</script>

<template>
  <MangaLayout>
    <section>
      <div class="hero bg-base-200 min-h-screen">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src="https://www.up-manga.com/wp-content/uploads/2023/09/Return-of-the-Frozen-Player.jpg"
            class="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 class="text-5xl font-bold">
                Return of the Frozen Player
            </h1>
            <p class="py-6">
                เมื่อซอ จุนโฮและพรรคพวกเสียสละตัวเองเพื่อเอาชนะราชินีน้ำแข็ง พวกเขาคิดว่าพวกเขากำลังคืนความสงบสุขให้กับโลก ซึ่งถูกเคลียร์แล้ว ในฐานะผู้เดียวที่ถือกุญแจในการเคลียร์ชั้นถัดไปและทำลายเพื่อน ๆ ของเขา จุนโฮจึงต้องก้าวขึ้นมา อีกครั้ง แต่ฮีโร่คนนี้จำศีลนานเกินไปที่จะรับมือกับศัตรูใหม่ที่น่ากลัวของโลกหรือไม่
            </p>
            <ul class="border border-white p-2 w-72 text-pink-100 m-2 rounded-md">
                <li>
                  <RouterLink :to="{ name: 'return-of-the-frozen-player-cpt-1' }" href="#"
                    >Chapter 1</RouterLink
                  >
                </li>
            </ul>
            <ul class="border border-white p-2 w-72 text-pink-200 m-2 rounded-md">
                <li>
                  <RouterLink :to="{ name: 'return-of-the-frozen-player-cpt-2' }" href="#"
                    >Chapter 2</RouterLink
                  >
                </li>
            </ul>
            <ul class="border border-white p-2 w-72 text-pink-300 m-2 rounded-md">
                <li>
                  <RouterLink href="#"
                    >Chapter 3</RouterLink
                  >
                </li>
            </ul>
            <ul class="border border-white p-2 w-72 text-pink-400 m-2 rounded-md">
                <li>
                  <RouterLink href="#"
                    >Chapter 4</RouterLink
                  >
                </li>
            </ul>
            <ul class="border border-white p-2 w-72 text-pink-500 m-2 rounded-md">
                <li>
                  <RouterLink href="#"
                    >Chapter 5</RouterLink
                  >
                </li>
            </ul>
            <ul class="border border-white p-2 w-72 text-pink-600 m-2 rounded-md">
                <li>
                  <RouterLink href="#"
                    >Chapter 6</RouterLink
                  >
                </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </MangaLayout>
</template>
