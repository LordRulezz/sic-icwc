<template>

 <div class="wrapper">

<NavBar/>
<router-view/>
<FooterBlock/>

 </div>

</template>

<script setup>

import NavBar from '@/components/Header/NavBar.vue'
import FooterBlock from '@/components/Footer/FooterBlock.vue'

</script>

