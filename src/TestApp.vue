<template>
  <div class="flex flex-wrap gap-5">
    <div
      v-for="book in Books"
      :class="{ Fav: book.isFav }"
      @click="toggleFav(book)"
      class="flex bg-white shadow-md text-slate-950 rounded-xl mx-8 mt-5 w-full justify-between items-center px-8"
    >
      <img class="w-28 h-28 p-1" :src="book.image" alt="" />
      <h1>{{ book.title }}</h1>
      <p>{{ book.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Books: [
        {
          id: 1,
          title: 'The Alchemist',
          author: 'Paulo Coelho',
          image: 'src/img/book.jpg',
          isFav: true
        },
        {
          id: 2,
          title: 'The Power of Now',
          author: 'Eckhart Tolle',
          image: 'src/img/book.jpg',
          isFav: false
        },
        {
          id: 3,
          title: 'The 7 Habits ',
          author: 'Stephen   Covey',
          image: 'src/img/book.jpg',
          isFav: true
        },
        {
          id: 4,
          title: 'The 4-Hour Workweek',
          author: 'Timothy Ferriss',
          image: 'src/img/book.jpg',
          isFav: false
        }
      ]
    }
  },
  methods: {
    toggleFav(book) {
      book.isFav = !book.isFav
    },
    handleEvent() {
      console.log('mouse over event triggered!')
    }
  }
}
</script>
