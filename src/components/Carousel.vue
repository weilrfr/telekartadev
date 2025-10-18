<template>
  <div class="carousel-container">
    <div class="carousel-track">
      <span
        v-for="i in 3"
        :key="i"
        class="city-list"
      >
        <span
          v-for="city in cities"
          :key="city + i"
          class="city-name"
        >
          {{ city }}
        </span>
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const cities = ref([
  'Астана',
  'Алматы',
  'Шымкент',
  'Караганда',
  'Актобе',
  'Тараз',
  'Павлодар',
  'Семей',
  'Усть-Каменогорск',
  'Костанай',
  'Кызылорда',
  'Уральск',
  'Атырау',
  'Актау',
  'Петропавловск',
  'Туркестан',
  'Экибастуз',
]);
</script>

<style scoped>
@keyframes scroll-left {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-33.3333%);
  }
}

.carousel-container {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  padding: 10px 0;
}

.carousel-track {
  display: inline-block; 
  animation: scroll-left 100s linear infinite;
}

.city-list {
  display: inline-block;
}

.city-name {
  display: inline-block;
  font-size: 1em;
  font-weight: 600;
  color: #333;
  padding: 0 40px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.city-name:hover {
  cursor: default;
}

.carousel-track:hover {
  animation-play-state: paused;
}
</style>