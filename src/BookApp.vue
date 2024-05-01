<template>
<BookNavBar/>
    <RouterView/>
</template>
    
    <script>
  
   
   import BookNavBar from './components/BookNavBar.vue';
   import { RouterView,useRoute } from 'vue-router';
    
        export default {
            data(){
                return{
                     route : useRoute(),
                     currentPath : ""

                }
            },
            name: 'BookApp',
            components: {
                RouterView, BookNavBar
            },

         
            mounted() {
  const currentPath = () => this.$route.path;
  console.log(currentPath());
},

unmounted() {
    
}


        }
    </script>

