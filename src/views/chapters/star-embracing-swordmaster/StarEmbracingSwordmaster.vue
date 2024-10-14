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
            src="https://www.up-manga.com/wp-content/uploads/2023/10/Star-Embracing-Swordmaster.jpg"
            class="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 class="text-5xl font-bold">
                Star-Embracing Swordmaster
            </h1>
            <p class="py-6">
                วลาดเป็นเด็กเร่ร่อนในสลัมที่ชื่นชมอัศวินมาโดยตลอด หลังจากเหตุการณ์ที่เขาถูกฟ้าผ่าสีดำ เขาก็เริ่มได้ยินเสียง วันหนึ่งอัศวินแห่งแสงจันทร์สีน้ำเงินปรากฏตัวขึ้น และชีวิตของวลาดในตรอกหลังกลับพลิกผัน… แม้แต่ดาวที่คลุมเครือซึ่งไม่ส่องแสงบนยอดเขาที่สูงที่สุดของท้องฟ้ายามค่ำคืนก็ยังเป็นดวงดาวได้หากต้องการส่องแสง
            </p>
            <ul class="border border-white p-2 w-72 text-pink-100 m-2 rounded-md">
                <li>
                  <RouterLink :to="{ name: 'star-embracing-swordmaster-cpt-1' }" href="#"
                    >Chapter 1</RouterLink
                  >
                </li>
            </ul>
            <ul class="border border-white p-2 w-72 text-pink-200 m-2 rounded-md">
                <li>
                  <RouterLink :to="{ name: 'star-embracing-swordmaster-cpt-2' }" href="#"
                    >Chapter 2</RouterLink
                  >
                </li>
            </ul>
            <ul class="border border-white p-2 w-72 text-pink-300 m-2 rounded-md">
                <li>
                  <RouterLink :to="{ name: 'star-embracing-swordmaster' }" href="#"
                    >Chapter 3</RouterLink
                  >
                </li>
            </ul>
            <ul class="border border-white p-2 w-72 text-pink-400 m-2 rounded-md">
                <li>
                  <RouterLink :to="{ name: 'star-embracing-swordmaster' }" href="#"
                    >Chapter 4</RouterLink
                  >
                </li>
            </ul>
            <ul class="border border-white p-2 w-72 text-pink-500 m-2 rounded-md">
                <li>
                  <RouterLink :to="{ name: 'star-embracing-swordmaster' }" href="#"
                    >Chapter 5</RouterLink
                  >
                </li>
            </ul>
            <ul class="border border-white p-2 w-72 text-pink-600 m-2 rounded-md">
                <li>
                  <RouterLink :to="{ name: 'star-embracing-swordmaster' }" href="#"
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
