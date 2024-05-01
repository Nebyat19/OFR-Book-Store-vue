<template>
  <main class="bg-black z-0 min-h-[100vh] w-screen relative">
    <div class="layer overflow-hidden pattern-bg absolute -z-10 w-full h-full top-0">
      <div class="bg-b-light h-full w-full opacity-85"></div>
    </div>
   <!------<BookNavBar active="home" />-->

    <div
      class="px-5 w-[80vw] mx-auto flex flex-col-reverse md:flex-row gap-10 self-center pt-16 h-full"
    >
      <div class="w-full md:w-1/2 md:p-10">
        <h1 class="text-lg md:text-3xl leading-tight text-b-secondary/90 font-bold font-mono mb-5">
          Where Every Page Holds a New Adventure
        </h1>
        <p class="text-sm leading-loose text-b-secondary/60">
          Step into a world where imagination knows no bounds and stories come to life. At Our
          Bookstore, we invite you to embark on a journey through the written word. With shelves
          lined with tales of adventure, wisdom, and wonder, there's a story waiting for every
          reader.
        </p>
      </div>
      <div class="relative w-full md:w-1/2 rounded-lg overflow-hidden">
        <img src="../img/old-books.jpg" alt="" />
        <div
          class="bg-gray-50/80 flex flex-col justify-center top-1/3 -translate-x-1/2 left-1/2 w-1/2 h-1/4 rounded-lg absolute text-center"
        >
          <span class="text-center text-xl md:text-6xl text-b-secondary font-bold">Ofr.</span>
        </div>
      </div>
    </div>
  </main>
  <section class=""></section>
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
  name: 'BooksStoreView',
  data() {
    return {
      books: books
    }
  }
}
</script>
