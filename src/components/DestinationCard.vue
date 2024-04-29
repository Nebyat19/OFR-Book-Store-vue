<template>
  <div class="mt-10 px-4 w-full lg:w-1/2 xl:w-1/3">
    <div
      :id="destination.id"
      class="flex items-center overflow-hidden rounded-lg bg-white shadow-lg"
    >
      <img class="w-32 h-32 flex-shrink-0 object-cover" :src="destination.image" alt="" />

      <div class="px-6">
        <h3 class="text-lg font-semibold text-slate-800">{{ destination.title }}</h3>
        <p class="text-gray-600 lowercase">${{ destination.price }}/ night average</p>

        <h1 class="mt-6 capitalize text-sm text-indigo-500">explore your wayout</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DestinationCard',
  props: ['destination']
}
</script>
