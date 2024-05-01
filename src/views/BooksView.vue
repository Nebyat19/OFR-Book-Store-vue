<template>
  <main class="bg-black z-0 h-[40vh] w-screen relative">
    <div class="layer overflow-hidden pattern-bg absolute -z-10 w-full h-full top-0">
      <div class="bg-b-light h-full w-full opacity-85"></div>
    </div>
  <!------<BookNavBar active="home" />-->

    <div class="px-5 flex flex-col gap-2 self-center pt-16 h-full">
      <h1 class="text-center capitalize text-2xl md:text-5xl font-bold text-b-secondary">
        See Our Books
      </h1>
      <p class="text-center capitalize text-sm text-opacity-80 text-b-secondary">
        <span class="text-xl md:text-3xl text-b-primary">Ofr.</span> Book Store is more than just a
        place to buy books; it's a community.
      </p>
    </div>
  </main>
  <section class="">
    <div class="flex flex-wrap mt-20 w-[90%] gap-10 m-auto mb-20 justify-between">
      <BookCard v-for="book in books" :book="book" :key="book.id" />
    </div>
  </section>
  <hr />
  <BookFooter />
</template>

<script>
import BookNavBar from '../components/BookNavBar.vue'
import BookFooter from '@/components/BookFooter.vue'
import BookCard from '@/components/BookCard.vue'

import { books } from '../stores/Books.js'

export default {
  components: {
    BookNavBar,
    BookFooter,
    BookCard
  },
  name: 'BooksView',
  data() {
    return {
      books: books
    }
  }
}
</script>
