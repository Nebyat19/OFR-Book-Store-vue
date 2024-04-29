<template>

<div :id="book.id" class="book-card border w-full lg:w-1/3 xl:w-1/5 px-5 md:px-0">
            <div class="book-card-img pb-[110%] rounded-lg shadow-lg relative w-full  overflow-hidden " >
                <img class="absolute h-full w-full inset-0 " :src="book.imageUrl" fsrc="../img/book.jpg" :alt="book.alt">
            </div>
  
            <div class="  relative z-1000 ">
              <div class="book-card-info rounded-lg  bg-white shadow-lg  px-5 pt-5">
             
              <h1 class="text-b-secondary font-bold text-md text-opacity-80 truncate">{{ book.title }}</h1>
                <p class="text-b-secondary text-opacity-50 mt-2 text-sm font-sans" >{{ book.author }}</p>
                <div class="mt-2 flex items-center">
            <StarIcon
              v-for="i in 5"
              :key="i"
              :class="i <= book.rating ? 'text-green-600' : 'text-gray-400'"
              :Class="'w-4 h-4 fill-current '"
            />
            <span class="text-gray-600 text-xs ml-2">({{ book.viewCount }}reviews) </span>
          </div>
                <div class="mt-8 pb-5 flex justify-between items-baseline">
                  
                  <p class="text-b-secondary text-opacity-90 font-bold text-lg mt-5">{{ book.price }} </p>
                  <button class="px-3 py-2 hover:bg-b-primary rounded-lg text-xs bg-b-secondary text-white font-sans">Add to Cart</button>
                </div>
              
                </div>
            </div>
  
          </div>
</template>

<script>
import StarIcon from './icons/StarIcon.vue';
export default {
  name: 'BookCard',
  components:{
    StarIcon
  },
  props:{
    book:{}
  }

}
</script>