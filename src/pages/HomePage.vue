<template>

    <Event event-image="src/assets/images/AralAI.jpg"
      event-title="Первое событие"
      event-description="Описание первого события"
      eventBtn="Подробнее >>"/>

    <News/>
    <Products/>

</template>

<script setup>
import Event from '@/components/Event/Event.vue'
import News from '@/components/News/News.vue'
import Products from '@/components/Products/Products.vue'

</script>

