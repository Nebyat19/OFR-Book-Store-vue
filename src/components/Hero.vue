<template>
  <main class="relative bg-hero-pattern bg-center bg-cover w-screen h-[90vh]">
    <div class="absolute w-full h-full inset-0 bg-primary bg-opacity-20"></div>

    <div class="flex w-full h-full text-center md:text-left">
      <div class="w-full md:w-2/3 px-5 md:px-32 pt-24">
        <h1 class="text-3xl md:text-6xl font-bold text-lime-100">Hellow Every one!</h1>
        <p class="text-sm text-gray-300 mt-5">
          get ready Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus ti vel labore
          rerum, quas doloremque?
        </p>
        <h3 class="mt-6 text-md text-gray-50 capitalize">here is your chance</h3>

        <button
          class="mt-8 px-8 py-2 border border-white bg-primary text-slate-100 z-40 rounded-lg"
        >
          Start now
        </button>
      </div>

      <div class="hidden relative md:block mr-32 mt-20 rounded-xl w-1/3 h-1/2 bg-slate-950">
        <img
          class="h-full w-full object-cover rounded-xl border border-slate-500"
          src="../img/hero-banner-7462.jpg"
          alt=""
        />
        <h1
          class="absolute px-4 py-3 bg-green-600 rounded-full -top-5 -left-3 font-bold text-yellow-50 text-4xl"
        >
          +
        </h1>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Hero'
}
</script>
