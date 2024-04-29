<template>

<div
              class="py-1 px-2  w-[50%] md:w-[32%] h-[80px]  flex mt-20 justify-between border-2 border-t-b-secondary border-r-b-secondary border-opacity-50 border-l-b-secondary border-b-b-secondary rounded-lg">
              <div class="flex w-full border  ">
                <input placeholder="Author" class="rounded-l-lg   text-slate-600 px-4 w-full text-sm " type="text">
                <div class="h-full text-xl   border border-r-gray-100"></div>
                <input placeholder="Title, Author..." class=" w-full  text-sm px-4 text-slate-600   " type="text">
  
                <button
                  class="px-6  hover:bg-b-secondary hover:text-b-primary text-sm capitalize py-2 rounded-r-lg bg-b-primary text-white">Search!</button>
              </div>
            </div>
</template>

<script>
export default {
  name: 'HeroSearch'
}
</script>