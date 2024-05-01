<template>
<BookNavBar/>
    <RouterView/>
</template>
    
    <script>
  
   
   import BookNavBar from './components/BookNavBar.vue';
   import { RouterView } from 'vue-router';
    
        export default {
            name: 'BookApp',
            components: {
                RouterView, BookNavBar
            }
        }
    </script>

