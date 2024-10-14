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
            src="https://www.go-manga.com/wp-content/uploads/2024/02/The-Regressed-Son-of-a-Duke-Is-an-Assassin.jpg"
            class="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 class="text-5xl font-bold">
              The Regressed Son of a Duke is an Assassin
            </h1>
            <p class="py-6">
              Cyan Vert ไชอัน เวอร์ท ลูกชายนอกสมรสของ Duke
              และนักฆ่าที่ยิ่งใหญ่ที่สุดของจักรวรรดิ
              ถูกทรยศโดยพี่ชายผู้ชอบธรรมซึ่งมีเงาที่เขาอาศัยอยู่มาโดยตลอด
              แต่ก่อนที่อันตรายร้ายแรงจะเข้าที่คอของเขา Cyan
              ก็ตื่นขึ้นมาและพบว่าเขากลับมาเป็นเด็กอีกครั้ง
              นายน้อยได้เกิดใหม่แล้ว และคราวนี้เขาจะไม่ต้องอยู่ภายใต้เงาของใคร!
            </p>
            <ul class="border border-white p-2 w-72 text-pink-100 m-2 rounded-md">
                <li>
                  <RouterLink :to="{ name: 'regressed-son-duke-cpt-1' }" href="#"
                    >Chapter 1</RouterLink
                  >
                </li>
            </ul>
            <ul class="border border-white p-2 w-72 text-pink-200 m-2 rounded-md">
                <li>
                  <RouterLink :to="{ name: 'regressed-son-duke-cpt-2' }" href="#"
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
