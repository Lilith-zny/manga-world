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
            src="https://www.up-manga.com/wp-content/uploads/2023/09/Your-Talent-is-Mine.jpg"
            class="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 class="text-5xl font-bold">Your Talent is Mine</h1>
            <p class="py-6">
                ชายหนุ่ม Ye Tian ได้รับความสามารถในการคัดลอกพรสวรรค์ของผู้อื่น และตอนนี้ต่อสู้กับสวรรค์เพื่อเปลี่ยนแปลงชะตากรรมของเขา เขาพยายามดิ้นรนเพื่อเอาชีวิตรอดและปกป้องน้องสาวของเขาจากการรุกรานของสัตว์ต่างดาว เพื่อที่จะแข็งแกร่งขึ้น
                เขาเริ่มสำรวจโลกที่ไม่รู้จัก และค่อยๆ เปิดเผยความลับเบื้องหลังการรุกรานของมิติต่างดาว
            </p>
            <ul
              class="border border-white p-2 w-72 text-pink-100 m-2 rounded-md"
            >
              <li>
                <RouterLink :to="{ name: 'your-talent-mine-cpt-1' }" href="#"
                  >Chapter 1</RouterLink
                >
              </li>
            </ul>
            <ul
              class="border border-white p-2 w-72 text-pink-200 m-2 rounded-md"
            >
              <li>
                <RouterLink :to="{ name: 'your-talent-mine-cpt-2' }" href="#"
                  >Chapter 2</RouterLink
                >
              </li>
            </ul>
            <ul
              class="border border-white p-2 w-72 text-pink-300 m-2 rounded-md"
            >
              <li>
                <RouterLink href="#"
                  >Chapter 3</RouterLink
                >
              </li>
            </ul>
            <ul
              class="border border-white p-2 w-72 text-pink-400 m-2 rounded-md"
            >
              <li>
                <RouterLink href="#"
                  >Chapter 4</RouterLink
                >
              </li>
            </ul>
            <ul
              class="border border-white p-2 w-72 text-pink-500 m-2 rounded-md"
            >
              <li>
                <RouterLink href="#"
                  >Chapter 5</RouterLink
                >
              </li>
            </ul>
            <ul
              class="border border-white p-2 w-72 text-pink-600 m-2 rounded-md"
            >
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
