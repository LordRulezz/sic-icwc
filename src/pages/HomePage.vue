<template>

    <Event :eventImage='eventImage2'
      event-title="Первое событие"
      event-description="Описание первого события"
      eventBtn="Подробнее >>"/>

    <News/>
    <Products/>

</template>

<script setup>

import eventImage2 from '@/assets/images/AralAI.jpg';
import Event from '@/components/Event/Event.vue'
import News from '@/components/News/News.vue'
import Products from '@/components/Products/Products.vue'

</script>

