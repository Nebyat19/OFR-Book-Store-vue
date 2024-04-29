<template>
    <div class="relative overflow-hidden">
      <div class="flex transition-transform duration-300 ease-in-out" :style="{ transform: `translateX(-${currentIndex * slideWidth}px)` }">
        <div v-for="(category, index) in categories" :key="index" class="w-full">
          <div class="bg-gray-200 p-4">
            <h2 class="font-bold text-lg">{{ category.name }}</h2>
            <p>{{ category.description }}</p>
          </div>
        </div>
      </div>
      <div class="absolute top-0 right-0 flex items-center h-full px-4" @click="nextCategory">
        <svg class="h-6 w-6 text-gray-500 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentIndex: 0,
        categories: [
          { name: 'Category 1', description: 'Description for category 1' },
          { name: 'Category 2', description: 'Description for category 2' },
          { name: 'Category 3', description: 'Description for category 3' }
        ],
        slideWidth: 0
      };
    },
    mounted() {
      // Set the initial slide width
      this.setSlideWidth();
      // Listen for window resize events and update slide width accordingly
      window.addEventListener('resize', this.setSlideWidth);
    },
    beforeUnmount() {
      // Remove the resize event listener when component is destroyed
      window.removeEventListener('resize', this.setSlideWidth);
    },
    methods: {
      setSlideWidth() {
        // Calculate the slide width based on the slider container width and number of categories
        const slider = this.$refs.slider;
        const sliderWidth = slider.offsetWidth;
        this.slideWidth = sliderWidth / this.categories.length;
      },
      nextCategory() {
        this.currentIndex = (this.currentIndex + 1) % this.categories.length;
      }
    }
  };
  </script>
  
  <style>
  /* Add Tailwind CSS classes as needed */
  </style>
  