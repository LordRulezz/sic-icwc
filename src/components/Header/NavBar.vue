<template>
    <header class="header">
    <nav class="header__nav" :class="{color: scrollValue > 0}">
      <div class="container">
        <router-link to="/" class="header__logo">
          <img src="@/assets/images/logo.png" alt="" class="header__logo-img"/>
        </router-link>
        <button class="menu" :class="{active: burger}" @click="burger = !burger">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul class="header__list" @click="burger = false">
          <li v-for="(link, i) in links" :key="i">
            <router-link :to="link.url" class="header__link">{{ link.title }}</router-link>
          </li>
          <li>
            <router-link to="/search" class="header__link">
              <img src="@/assets/images/search.svg" alt="" />
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const burger = ref(false)
const scrollValue = ref(0)

window.addEventListener('scroll', () => scrollValue.value = window.scrollY)



const links = ref([
    { title: 'О НИЦ МКВК', url: '/about' },
    { title: 'Ресурсы', url: '/resurce' },
    { title: 'Публикации', url: '/publications' },
    { title: 'Медиа', url: '/media' },
    { title: 'Проекты', url: '/project' },
])
</script>
