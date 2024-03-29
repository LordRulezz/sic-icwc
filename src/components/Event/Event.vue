<template>
  <section class="mainEvent">
    <img :src="eventImage" alt="">
    <div class="container">
      <div class="mainEvent__block">
        <h2 class="mainEvent__block-title">{{ eventTitle }}</h2>
        <p class="mainEvent__block-desc">{{ eventDescription }}</p>
        <a href="#" class="mainEvent__block-btn btn">{{ eventBtn }}</a>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  eventImage: String,
  eventTitle: String,
  eventDescription: String,
  eventBtn: String
});
</script>
