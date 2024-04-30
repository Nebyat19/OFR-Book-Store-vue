<template>
   <header :class="Class" class="w-screen  bg-opacity-50   pt-7  overflow-hidden">
  
        <nav class="  flex items-center w-[90%] mx-auto  justify-between">
          <div>
            <h1 class="hover:text-b-primary cursor-pointer  text-3xl font-bold text-b-secondary">Ofr.</h1>
          </div>
          <ul v-if="navShow"
            class="w-[90%] z-50 h-fit  absolute md:bg-transparent md:p-0 bg-b-secondary rounded-lg p-3 font-bold -m-2 md:m-0 md:w-fit top-20  md:static flex flex-col gap-3 mb-4 md:flex-row md:ml-60 lg:ml-80  lg:gap-10 justify-between capitalize text-sm text-b-secondary">
            <li class=" md:bg-transparent hover:text-b-primary  bg-gray-50 rounded-lg px-2 py-1 w-full md:px-0 md:bg-b-light md:w-fit"><a
                href="">books</a> </li>
  
            <li class="md:bg-transparent hover:text-b-primary bg-gray-50  rounded-lg px-2 py-1 w-full md:bg-b-light md:w-fit"><a
                href="">store</a> </li>
            <li class="md:bg-transparent hover:text-b-primary bg-gray-50  rounded-lg px-2 py-1 w-full md:bg-b-light md:w-fit"><a
                href="">About us</a> </li>
          </ul>
        
  
          <div class="flex gap-5  items-center"  >
            <IconMenuBar   @click="toggleNabBar" :Class="'w-10 text-b-secondary h-10  md:hidden fill-current '" />
            <CartIcon  :Class="'w-7 text-b-secondary h-7 fill-current text-opacity-70' " />
            <button
              class=" px-5 py-2 hover:bg-b-secondary hover:text-b-primary text-sm capitalize  a rounded-lg bg-b-primary text-white">sign
              up</button>
          </div>
        </nav>
      </header>
</template>

<script>
import IconMenuBar from './icons/IconMenuBar.vue'
import CartIcon from './icons/CartIcon.vue';  
    export default {
      props:['Class']
        
  ,
      data(){
        return{
          navShow:true
        }
      },
      methods:{
        toggleNabBar(){
         
          this.navShow = !this.navShow
        },
      
    
      },
        components: {
            IconMenuBar, CartIcon
        },
        name: "BookNavBar"
    }
</script>

