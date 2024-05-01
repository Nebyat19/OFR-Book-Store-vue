<template>

<main class="bg-black z-0  h-[40vh]  w-screen  relative">
      <div
      class="layer overflow-hidden  pattern-bg  absolute -z-10 w-full h-full   top-0">
      <div class=" bg-b-light h-full w-full opacity-85 "></div>
      </div>
     <!------<BookNavBar active="home" />-->
    
       
       <div class=" px-5 flex flex-col gap-2 self-center pt-16 h-full"> 
         <h1 class=" text-center capitalize text-3xl md:text-5xl mb-4 font-bold text-b-secondary">About Us</h1>
        <p class="text-center capitalize text-sm text-opacity-80 text-b-secondary">Telling our inspiring story from the very beginning to our days   </p>
        </div>
    </main>
<section class="mb-10 md:px-36 mt-5 md:mt-10">
  <div class="flex flex-col-reverse md:flex-row gap-10 justify-between">
    <div class="w-full flex-col justify-center md:w-1/2 p-5 pr-20">
    <h1 class="text-2xl text-center md:text-left md:text-4xl font-serif text-b-secondary/80 font-bold mb-5">Discover <span class="text-5xl text-b-primary">Ofr.</span> <br>Book Store</h1>
     <p class="text-md   leading-wider text-slate-400 font-serif">Welcome to Ofer Book Store, where every page holds a promise of adventure, knowledge, and inspiration. Nestled in the heart of we are more than just a bookstore; we are a sanctuary for bibliophiles, a hub for literary enthusiasts, and a haven for those seeking the magic that only a good book can provide. At Ofer Book Store, we believe in the power of storytelling to transform lives. 
<br>
      But Ofer Book Store is more than just a place to buy books; it's a community. Join us for author signings, book clubs, and literary events that celebrate the vibrant tapestry of voices that make up our literary landscap
.</p>
  </div>
  <div class="w-full md:w-1/2" >
    <div class="relative pb-5/6 "><img class="absolute w-full px-10 pt-10 rounded-full h-full inset-0" src="../img/about.jpg" alt=""></div>

  </div>
  </div>
</section>
<hr>
<BookFooter/>
</template>



<script>

import BookNavBar from '../components/BookNavBar.vue'
import BookFooter from '@/components/BookFooter.vue';

export default {
  components: {
    BookNavBar, BookFooter
  },
  name: 'AboutUsView'
}
</script>