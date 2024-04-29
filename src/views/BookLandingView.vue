<template>
  
        <main class="bg-white z-0  h-[80vh] md:h-screen w-screen overflow-hidden relative">
      <div
        class="layer overflow-hidden rounded-b-[50%] pattern-bg  absolute z-10 w-[200%] -right-1/2 h-[70%]  opacity-10  top-0">
  
      </div>
      <BookNavBar />
      <div class="w-[200%] h-[60%] absolute   bg-b-light rounded-b-[50%] px-10  -left-1/2">
  
        <div class="mt-28 md:mt-24 text-center z-50  relative w-full  flex flex-col ">
          <h3 class="text-sm font-semibold text-b-primary mb-5">Your fevorite book selection</h3>
          <h1 class=" text-2xl md:text-5xl  tracking-tight   font-bold text-b-secondary relative  w-fit self-center"><img
              class="h-8 w-8 md:w-10 md:h-10 absolute  -top-4 -left-4 p-1 rounded-full bg-pink-200"
              src="../img/bookIcon.png" alt=""> Color your day with the <br> <span
              class="text-6xl text-slate-600">Ofr</span> bookstore</h1>
          <div class="flex flex-col items-center w-full ">
  
          <HeroSearch/>
         
        </div>
  
        </div>
      </div>
    </main>
    
    <section class="-mt-24  relative z-1000">
      <div class="flex justify-between w-[90%] mx-auto  items-baseline">
        <h1 class="text-b-secondary  text-md font-semibold md:text-3xl">All our books</h1>
        <div>
          <ul class=" gap-5 text-md hidden md:flex  justify-between font-sans">
            <li class=" font-bold text-md text-b-secondary">Comtemporary art</li>
            <li class="text-b-secondary text-opacity-50  font-bold">Photography</li>
            <li class="text-b-secondary text-opacity-50  font-bold">Mode</li>
            <li class="text-b-secondary text-opacity-50 font-bold">Architecture</li>
          </ul>
        </div>
      </div>
  
      <div class="book-cards mt-10">
  
        <div class="flex flex-wrap mt-20 w-[90%] gap-10 m-auto  mb-20 justify-between">
  
         <BookCard 
         v-for="book in books" :book="book" :key="book.id"
         
         />
         
  
          </div>
         
         
  </div>
  
  
    </section>   

    <section class="h-[100vh] py-10 md:py-24  bg-b-light mt-10 ">
      <div class="w-[80%] mx-auto  flex-col md:flex-row flex gap-10   md:gap-20 md:justify-between h-full">
        <div class="w-full h-60 md:w-2/5 p-4 md:h-full shadow-xl rounded-lg border-2 border-gray-500  ">
            <img class="w-full shadow-lg rounded-lg h-full object-left-top object-cover inset-5" :src="sampleBook.imageUrl" dsrc="../img/book.jpg" alt="book icon">
        </div>
        <div class="w-full md:w-3/5 flex flex-col justify-center">
            <h1 class="text-lg font-bold capitalize text-b-secondary truncate">{{ sampleBook.title }}</h1>
            <h3 class="text-b-secondary capitalize text-opacity-50 text-md mb-3">{{ sampleBook.author }}</h3>
            <span class="text-xl font-bold text-b-secondary"> {{ sampleBook.price }} </span>

            <p class="text-sm mt-8 line-clamp-3 text-b-secondary text-opacity-90 font-bold">{{ sampleBook.description }}

            </p>
            <div class="flex gap-5 mt-5">
               <ButtonPrimary :name="'Add to Cart'"/>
                <ButtonLayout :name="'See More'"/>
            </div>
        </div>
    </div>
    </section>

    <section class="h-[100vh] py-10  w-[90%] m-auto bg-gray-50 ">
        <div class="">
            <h1 class="text-3xl text-b-secondary">Recently Viewed Books</h1>
            <div class="flex flex-wrap mt-16 gap-10   mb-20 justify-between">
            <BookCardRecent
            v-for="book in computedBooks" :book="book" :key="book.id" 
            />
            <div class="w-full mt-5 flex justify-center">
                <ButtonPrimary :name="'View All'"/>
            </div>
            </div>
            </div>
        </section>
      
   
</template>

<script>
import BookNavBar from '../components/BookNavBar.vue'
import HeroSearch from '../components/HeroSearch.vue'
import BookCard from '../components/BookCard.vue'
import ButtonPrimary from '../components/ButtonPrimary.vue'
import ButtonLayout from '../components/ButtonLayout.vue'
import BookCardRecent from '../components/BookCardRecent.vue'
//import axios from 'axios'
    export default {
        name: 'BookLandingView',
        components: {
            BookNavBar, HeroSearch, BookCard, ButtonPrimary, ButtonLayout, BookCardRecent
        },
        computed: {
            computedBooks(){
                return this.books.slice(4,8)
            }
        },
        methods: {
   bookUrl() {
   return "https://covers.openlibrary.org/b/id/12547191-L.jpg"
  }
},
   
        data(){
            return{
            sampleBook: {
  author: "F. Scott Fitzgerald",
  title: "The Great Gatsby",
  price: "$12.50",
  description: "The Great Gatsby is a novel written by American author F. Scott Fitzgerald that follows a cast of characters living in the fictional towns of West Egg and East Egg on prosperous Long Island in the summer of 1922. The story primarily concerns the young and mysterious millionaire Jay Gatsby and his quixotic passion and obsession with the beautiful former debutante Daisy Buchanan.",
  imageUrl: "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg"
}

,
books: [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    rating: 4.27,
    date: "July 11, 1960",
    reviewCount: 4226956,
    imageUrl: "https://covers.openlibrary.org/b/isbn/0061120081-L.jpg",
    alt: "To Kill a Mockingbird Book Cover",
    price: "$10.99",
    viewCount: 100,
    isNew: false
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    rating: 4.19,
    date: "June 8, 1949",
    reviewCount: 3794679,
    imageUrl: "https://covers.openlibrary.org/b/isbn/0451524934-L.jpg",
    alt: "1984 Book Cover",
    price: "$8.99",
    viewCount: 1560,
    isNew: true
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    rating: 3.92,
    date: "April 10, 1925",
    reviewCount: 3911405,
    imageUrl: "https://covers.openlibrary.org/b/isbn/0743273567-L.jpg",
    alt: "The Great Gatsby Book Cover",
    price: "$12.50",
    viewCount: 20084,
    isNew: false
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    rating: 4.26,
    date: "January 28, 1813",
    reviewCount: 3085997,
    imageUrl: "https://covers.openlibrary.org/b/isbn/0141439513-L.jpg",
    alt: "Pride and Prejudice Book Cover",
    price: "$9.99",
    viewCount: 7700,
    isNew: true
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    rating: 3.81,
    date: "July 16, 1951",
    reviewCount: 2768991,
    imageUrl: "https://covers.openlibrary.org/b/isbn/0316769487-L.jpg",
    alt: "The Catcher in the Rye Book Cover",
    price: "$11.25",
    viewCount: 1000,
    isNew: false
  },
  {
    id: 6,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    rating: 4.27,
    date: "September 21, 1937",
    reviewCount: 2981756,
    imageUrl: "https://covers.openlibrary.org/b/isbn/0345339681-L.jpg",
    alt: "The Hobbit Book Cover",
    price: "$14.99",
    viewCount: 500,
    isNew: true
  },
  {
    id: 7,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    rating: 4.47,
    date: "June 26, 1997",
    reviewCount: 7771519,
    imageUrl: "https://covers.openlibrary.org/b/isbn/0439554934-L.jpg",
    alt: "Harry Potter and the Philosopher's Stone Book Cover",
    price: "$15.99",
    viewCount: 10080,
    isNew: false
  },
  {
    id: 8,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    rating: 4.5,
    date: "July 29, 1954",
    reviewCount: 5821629,
    imageUrl: "https://covers.openlibrary.org/b/isbn/0618640150-L.jpg",
    alt: "The Lord of the Rings Book Cover",
    price: "$19.99",
    viewCount: 20040,
    isNew: false
  }
]
,

        }
    
    }
        
    }
</script>

