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
            src="https://www.go-manga.com/wp-content/uploads/2024/04/The-Last-Adventurer.png"
            class="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 class="text-5xl font-bold">
                The Last Adventurer
            </h1>
            <p class="py-6">
                ในยุคแห่งการผจญภัยที่เริ่มต้นจากการวางไข่ของ Gates โดดเด่นด้วยความสิ้นหวัง สิ้นหวัง สิ้นหวัง และความสิ้นหวัง ทุกคนสิ้นหวังและสูญเสียความกล้าหาญที่จะต่อสู้ต่อไป ยกเว้นนักผจญภัยคนหนึ่งที่ไม่ยอมลงไปจนลมหายใจสุดท้าย . “เหลือคุณเพียงคนเดียวเท่านั้น Last Adventurer Elpam” เมื่อประวัติศาสตร์ของนักผจญภัยถูกบังคับให้ต้องจบลง นักผจญภัยคนสุดท้ายก็กลับมาที่จุดเริ่มต้นของเรื่องราวนี้
            </p>
            <ul class="border border-white p-2 w-72 text-pink-100 m-2 rounded-md">
                <li>
                  <RouterLink :to="{ name: 'last-adventurer-cpt-1' }" href="#"
                    >Chapter 1</RouterLink
                  >
                </li>
            </ul>
            <ul class="border border-white p-2 w-72 text-pink-200 m-2 rounded-md">
                <li>
                  <RouterLink :to="{ name: 'last-adventurer-cpt-2' }" href="#"
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
