<template>
  <div class="px-8 mt-5">
    <h1 class="w-full text-center text-2xl capitalize text-gray-800">Popular destinations</h1>
    <p class="w-full text-center mt-5 text-gray-600">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet vero, d m provident quia ex
      odit eos?
    </p>

    <div class="flex flex-wrap -mx-4">
      <DestinationCard
        v-for="destination in poularDesination"
        :key="destination.id"
        :destination="destination"
      />
    </div>
  </div>
</template>

<script>
import DestinationCard from '../components/DestinationCard.vue'
export default {
  components: {
    DestinationCard
  },

  data() {
    return {
      poularDesination: [
        {
          id: 1,
          title: 'Avocados',
          price: 120,
          image: 'src/img/girl-jim.jpg'
        },
        {
          id: 2,
          title: 'sugar cane',
          price: 120,
          image: 'src/img/hero-banner-7462.jpg'
        },

        {
          id: 3,
          title: 'jungle',
          price: 120,
          image: 'src/img/home-water-1366.jpg'
        }
      ]
    }
  }
}
</script>
