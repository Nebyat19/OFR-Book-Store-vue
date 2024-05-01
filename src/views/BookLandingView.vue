<template>
  <main class="bg-white z-0 h-[80vh] md:h-screen w-screen overflow-hidden relative">
    <div
      class="layer overflow-hidden rounded-b-[50%] pattern-bg absolute -z-10 w-[200%] -right-1/2 h-[70%] top-0"
    >
      <div class="bg-b-light h-full w-full opacity-85"></div>
    </div>
    <!------<BookNavBar active="home" />-->
    <div class="w-[200%] h-[60%] relative bg-opacity-0 bg-b-light rounded-b-[50%] px-10 -left-1/2">
      <div class="pt-28 text-center z-50 w-full flex flex-col">
        <h3 class="text-sm font-semibold text-b-primary mb-5">Your fevorite book selection</h3>
        <h1
          class="text-2xl md:text-5xl tracking-tight font-bold text-b-secondary relative w-fit self-center"
        >
          <img
            class="h-8 w-8 md:w-10 md:h-10 absolute -top-4 -left-4 p-1 rounded-full bg-pink-200"
            src="../img/bookIcon.png"
            alt=""
          />
          Color your day with the <br />
          <span class="text-6xl text-slate-600">Ofr</span> bookstore
        </h1>
        <div class="flex flex-col items-center w-full">
          <HeroSearch />
        </div>
      </div>
    </div>
  </main>

  <section class="-mt-28 relative z-1000">
    <div class="flex justify-between w-[90%] mx-auto overflow-hidden items-center">
      <h1 class="text-b-secondary w-2/5 text-md font-semibold md:text-3xl">All our books</h1>

      <div class="w-3/5 flex">
        <PrevIcon @click="scrollTprev()" :class="'text-gray-500 '" />
        <ul
          class="w-full overflow-x-scroll no-scrollbar text-md snap-mandatory gap-16 snap-x flex justify-between font-sans"
        >
          <li id="100" class="snap-center font-bold text-md whitespace-nowrap text-b-secondary">
            Comtemporary art
          </li>
          <li id="102" class="snap-center text-b-secondary text-opacity-50 font-bold">
            Photography
          </li>
          <li id="103" class="snap-center text-b-secondary text-opacity-50 font-bold">Modeling</li>
          <li id="104" class="snap-center text-b-secondary text-opacity-50 font-bold">
            Architecture
          </li>
          <li id="105" class="snap-center text-b-secondary text-opacity-50 font-bold">Design</li>
          <li id="106" class="snap-center text-b-secondary text-opacity-50 font-bold">Film</li>
        </ul>
        <NextIcon @click="scrollTonext()" :class="'text-gray-500'" />
      </div>
    </div>

    <div class="book-cards mt-10">
      <div class="flex flex-wrap mt-20 w-[90%] gap-10 m-auto mb-20 justify-between">
        <BookCard v-for="book in books" :book="book" :key="book.id" />
      </div>
    </div>
  </section>

  <section class="h-[100vh] flex flex-col justify-center md:py-24 bg-b-light mt-10">
    <div
      class="w-[80%] mx-auto flex-col md:flex-row flex gap-10 md:gap-20 md:justify-between h-fit md:h-full"
    >
      <div class="w-full h-60 md:w-2/5 p-4 md:h-full shadow-xl rounded-lg border-2 border-gray-500">
        <img
          class="w-full shadow-lg rounded-lg h-full object-left-top object-cover inset-5"
          :src="sampleBook.imageUrl"
          dsrc="../img/book.jpg"
          alt="book icon"
        />
      </div>
      <div class="w-full md:w-3/5 flex flex-col justify-center">
        <h1 class="text-lg font-bold capitalize text-b-secondary truncate">
          {{ sampleBook.title }}
        </h1>
        <h3 class="text-b-secondary capitalize text-opacity-50 text-md mb-3">
          {{ sampleBook.author }}
        </h3>
        <span class="text-xl font-bold text-b-secondary"> {{ sampleBook.price }} </span>

        <p class="text-sm mt-8 text-clip text-b-secondary text-opacity-90 font-bold">
          {{ sampleBook.description }}
        </p>
        <div class="flex gap-5 mb-10 md:mb-auto mt-5">
          <ButtonPrimary :name="'Add to Cart'" />
          <ButtonLayout :name="'See More'" />
        </div>
      </div>
    </div>
  </section>

  <section class="max-h-fit py-10 w-[90%] m-auto bg-gray-50 overflow-hidden">
    <h1 class="text-md md:text-3xl text-b-secondary">Recently Viewed Books</h1>
    <div class="flex md:gap-5 items-center">
      <PrevIcon @click="bookPrev()" :class="'md:w-28 md:h-28   rounded-full text-black'" />
      <div
        class="flex flex-nowrap no-scrollbar mt-16 gap-9 transition-all duration-300 ease-out overflow-y-hidden justify-between"
      >
        <BookCardRecent v-for="book in computedBooks" :book="book" :key="book.id" />
      </div>
      <NextIcon
        @click="bookNext()"
        :class="'h-60 w-60  md:w-28 md:h-28   rounded-full text-black'"
      />
    </div>
    <div class="w-full mt-5 flex justify-center">
      <ButtonPrimary :name="'View All'" />
    </div>
  </section>

  <section class="min-h-[100vh] w-full bg-b-light">
    <div class="py-20 w-[90%] m-auto bg-b-light mt-20">
      <h3 class="text-xs md:text-sm font-semibold text-b-primary">Exhibitions Shop Conferences</h3>
      <h1 class="md:text-2xl text-b-secondary md:mt-3">News about the Ofr. bookshop</h1>
      <div class="flex mt-5 gap-10 md:flex-row flex-col">
        <div class="flex flex-col gap-10">
          <div class="w-full left border-2 border-gray-500 rounded-lg">
            <div class="w-full h-full flex flex-col p-5">
              <div class="pb-[65%] border-2 border-gray-500 overflow-hidden rounded-lg relative">
                <img
                  class="w-full h-full absolute inset-0 object-cover"
                  src="https://covers.openlibrary.org/b/isbn/9780061120084-L.jpg"
                  alt=""
                />
              </div>

              <h1 class="mt-5 text-md mb-5 md:text-lgtext-opacity-90 text-b-secondary">
                Reading practise
              </h1>
              <p class="mt-3 text-sm mb-5 text-clip text-b-secondary text-opacity-80">
                to Kill a Mockingbird is a novel by Harper Lee published in 1960. It was immediately
                successful, winning the Pulitzer Prize, and has become a classic of modern American
                literature. The plot and characters are loosely based on Lee's observations of her
                family, her neighbors and an event that occurred near her hometown of Monroeville,
                Alabama, in 1936, when she was ten.
              </p>
              <div class="flex justify-self-start w-fit"><ButtonPrimary :name="'Read More'" /></div>
            </div>
          </div>

          <div
            class="w-full l md:line-clamp-10 flex justify-between gap-5 p-5 border-2 border-gray-500 rounded-lg"
          >
            <img
              class="object-cover rounded-lg border border-gray-500 w-1/2 h-auto"
              src="https://covers.openlibrary.org/b/isbn/9780439554930-L.jpg"
              alt=""
            />

            <div class="py-1 md:py-8 h-full px-1 md:px-5 w-1/2">
              <h1 class="text-md mb-5 md:text-lg text-opacity-90 text-b-secondary">
                Reading practise
              </h1>
              <div class="flex h-full flex-col justify-around">
                <p class="text-xs text-clip text-b-secondary text-opacity-80">
                  Harry Potter and the Philosopher's Stone is the first novel in the Harry Potter
                  series written by J.K. Rowling. It follows Harry Potter, a young wizard who
                  discovers his magical heritage and attends Hogwarts School of Witchcraft and
                  Wizardry.
                </p>
                <div class="flex mb-3 justify-self-start w-fit">
                  <ButtonPrimary :name="'Read More'" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-10">
          <div
            class="w-full md:line-clamp-10 flex justify-between gap-5 p-5 border-2 border-gray-500 rounded-lg"
          >
            <img
              class="object-cover rounded-lg border border-gray-500 w-1/2 h-auto"
              src="https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg"
              alt=""
            />

            <div class="py-1 md:py-8 h-full px-1 md:px-5 w-1/2">
              <h1 class="text-md mb-5 md:text-lg text-opacity-90 text-b-secondary">
                Reading practise
              </h1>
              <div class="flex h-full flex-col justify-around">
                <p class="text-clip text-xs text-b-secondary text-opacity-80">
                  Pride and Prejudice is a romantic novel by Jane Austen, first published in 1813.
                  It follows the emotional development of the protagonist, Elizabeth Bennet, who
                  learns the error of making hasty judgments and comes to appreciate the difference
                  between the superficial and the essential.
                </p>
                <div class="flex mb-3 justify-self-start w-fit">
                  <ButtonPrimary :name="'Read More'" />
                </div>
              </div>
            </div>
          </div>
          <div class="w-full left border-2 border-gray-500 rounded-lg">
            <div class="w-full h-full flex flex-col p-5">
              <div class="pb-[65%] border-2 border-gray-500 overflow-hidden rounded-lg relative">
                <img
                  class="w-full h-full absolute inset-0 object-cover"
                  src="https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg"
                  alt=""
                />
              </div>

              <h1 class="mt-5 text-md mb-5 md:text-lg text-opacity-90 text-b-secondary">
                Reading practise
              </h1>
              <p class="mt-3 text-clip text-sm mb-5 text-b-secondary text-opacity-80">
                L1984 is a dystopian novel by George Orwell published in 1949. It depicts a
                totalitarian regime, led by the Party and its leader Big Brother, who monitor and
                control every aspect of society.
              </p>
              <div class="flex justify-self-start w-fit"><ButtonPrimary :name="'Read More'" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <BookFooter />
</template>

<script>
import BookNavBar from '../components/BookNavBar.vue'
import HeroSearch from '../components/HeroSearch.vue'
import BookCard from '../components/BookCard.vue'
import ButtonPrimary from '../components/ButtonPrimary.vue'
import ButtonLayout from '../components/ButtonLayout.vue'
import BookCardRecent from '../components/BookCardRecent.vue'
import BookFooter from '../components/BookFooter.vue'
import NextIcon from '../components/icons/NextIcon.vue'
import PrevIcon from '../components/icons/PrevIcon.vue'

import { books } from '../stores/Books.js'
//import axios from 'axios'
export default {
  name: 'BookLandingView',
  components: {
    BookNavBar,
    HeroSearch,
    BookCard,
    ButtonPrimary,
    ButtonLayout,
    BookCardRecent,
    BookFooter,
    NextIcon,
    PrevIcon
  },
  computed: {
    computedBooks() {
      return this.books //.slice(4,8)
    }
  },
  methods: {
    bookNext() {
      this.bookId += 10
      if (this.bookId >= 80) {
        this.bookId = 10
      }
      document.getElementById(this.bookId).scrollIntoView()
    },
    bookPrev() {
      this.bookId -= 10
      if (this.bookId < 10) {
        this.bookId = 80
      }
      document.getElementById(this.bookId).scrollIntoView()
    },

    scrollTonext() {
      ++this.id
      if (this.id >= 106) {
        this.id = 100
      }
      document.getElementById(this.id).scrollIntoView()
    },
    scrollTprev() {
      --this.id
      if (this.id < 100) {
        this.id = 106
      }
      document.getElementById(this.id).scrollIntoView()
    },
    bookUrl() {
      return 'https://covers.openlibrary.org/b/id/12547191-L.jpg'
    }
  },

  data() {
    return {
      bookId: 10,
      id: 100,
      sampleBook: {
        author: 'F. Scott Fitzgerald',
        title: 'The Great Gatsby',
        price: '$12.50',
        description:
          'The Great Gatsby is a novel written by American author F. Scott Fitzgerald that follows a cast of characters living in the fictional towns of West Egg and East Egg on prosperous Long Island in the summer of 1922. The story primarily concerns the young and mysterious millionaire Jay Gatsby and his quixotic passion and obsession with the beautiful former debutante Daisy Buchanan.',
        imageUrl: 'https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg'
      },

      books: books
    }
  }
}
</script>
