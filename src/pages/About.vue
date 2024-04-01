<template>
  <Event :eventImage="eventImage2"
      event-title="О НИЦ МКВК"
      event-description="Научно-информационный центр Межгосударственной координационной водохозяйственной комиссии" />

<Switcher/>
</template>

<script setup>
import eventImage2 from '@/assets/images/bg_about.jpg';
import Event from '@/components/Event/Event.vue'
import Switcher from '@/components/UI/Switcher.vue'

</script>

