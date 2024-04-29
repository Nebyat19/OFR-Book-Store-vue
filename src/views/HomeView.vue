<template>
  <div>
    <GreenNav />
    <Hero />
  </div>
  <Card />
</template>

<script>
import GreenNav from '../components/GreenNav.vue'
import Hero from '../components/Hero.vue'
export default {
  components: {
    GreenNav,
    Hero
  },
  name: 'HomeView'
}
</script>
