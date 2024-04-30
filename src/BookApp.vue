<template>
 
        <AboutView />
   
  
</template>

<script>
import BookLandingView from './views/BookLandingView.vue'
import AboutView from './views/AboutUsView.vue';
    export default {
        name: 'BookApp',
        components: {
            BookLandingView, AboutView
        }
    }
</script>

