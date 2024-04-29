<template>
  <homeView />
  <DestinationCardView />
  <div class="flex flex-wrap mt-20 bg-slate-950 mb-20 justify-between">
    <propertyCard v-for="property in propertys" :property="property" />
  </div>
  <StarIcon />
</template>

<script>
import DestinationCardView from './views/DestinationCardView.vue'
import homeView from './views/HomeView.vue'

import PropertyCard from './components/PropertyCard.vue'

export default {
  components: {
    DestinationCardView,
    homeView,
    PropertyCard
  },
  methods: {
    // methods go here
   
  },
 /*computed: {
    // computed properties go here

    filterProperty() {
      return this.propertys.filter((property) => property.isNew)
    }
  },
  */
  data() {
    return {
      propertys: [
        {
          id: 1,
          img: 'src/img/yellow-girl-siting.jpg',
          title: 'Modern home in city center ',
          beds: 4,
          bath: 2,
          formatedPrice: '$1588',
          rating: 3.1,
          revieCount: 458,
          isNew: true
        },
        {
          id: 1,
          img: 'src/img/yellow-sitting.jpg',
          title: 'Modern home in city center ',
          beds: 4,
          bath: 2,
          formatedPrice: '$5210',
          rating: 5,
          revieCount: 458,
          isNew: false
        },
        {
          id: 1,
          img: 'src/img/home-water-1366.jpg',
          title: 'Modern home in city center ',
          beds: 4,
          bath: 2,
          formatedPrice: '$210',
          rating: 2,
          revieCount: 458,
          isNew: true
        }
      ]
    }
  }
}
</script>
