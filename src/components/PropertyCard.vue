<template>
  <div class="p-8 w-full lg:w-1/2 xl:w-1/3 flex mb-5 antialiased text-gray-900">
    <div class="rounded-lg w-full overflow-hidden">
      <div class="relative pb-5/6">
        <img
          class="absolute inset-o object-cover h-full w-full rounded-lg shadow-md"
          :src="property.img"
          alt=""
        />
      </div>
      <div class="px-4 relative -mt-16">
        <div class="p-6 bg-white shadow-lg rounded-lg">
          <div class="flex items-baseline">
            <span
              v-show="true"
              :url="{ fave: property.isNew }"
              :class="property.isNew ? 'bg-green-200 ' : 'bg-red-200'"
              class="inline-block uppercase mr-2 text-slate-900 text-xs px-2 rounded-lg mb-2"
              >{{ property.isNew ? 'new' : 'old' }}</span
            >
            <div class="text-gray-600 text-xs font-semibold tracking-wide">
              {{ property.beds }} beds &bull; {{ property.bath }} baths
            </div>
          </div>
          <h4 class="font-semibold font-lg truncate">{{ property.title }}</h4>

          <div class="mt-4 leading-tight">
            {{ property.formatedPrice }} <span class="text-gray-600 text-sm">/wk</span>
          </div>
          <div class="mt-2 flex items-center">
            <StarIcon
              v-for="i in 5"
              :key="i"
              :class="i <= property.rating ? 'text-green-600' : 'text-gray-400'"
              :Class="'w-4 h-4 fill-current '"
            />
            <span class="text-gray-600 ml-2">{{ property.revieCount }} reviews </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarIcon from './icons/StarIcon.vue'
export default {
  components: {
    StarIcon
  },

  data() {
    return {
      condition: 'new'
    }
  },
  name: 'PropertyCard',
  props: ['property']
}
</script>
