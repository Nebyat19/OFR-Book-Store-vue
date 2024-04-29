<template>
<footer class="bg-gray-50 w-screen ">
<div class="px-32 mt-10 flex justify-between items-center ">
    <div class=" flex flex-col gap-10 justify-between py-5">
<h1 class="uppercase text-lg font-bold text-b-secondary">get our New latter</h1>

<div class="flex border rounded-md border-opacity-50  border-bk-secondary p-1">
    <input class="p-2 text-sm text-gray-500 border border-bk-primary" type="text">
    <button class="px-3 py-2 bg-b-primary text-white text-xs tracking-wider hover:bg-bk-secondary rounded-r-lg">Subscribe</button>
</div>
</div>

<ul class="grid grid-cols-3 gap-x-28 gap-y-10 text-xs text-opacity-70 text-b-secondary grid-rows-2">
   <li><a href="">about us</a></li>
   <li><a href="">books</a></li>
   <li><a href="">contact us</a></li>
   <li><a href="">store</a></li>
   <li><a href="">blog</a></li>
   <li><a href="">pages</a></li>
</ul>
</div>
<div class="mt-5 flex flex-col items-center"> 
    <hr  class=" w-60   h-[0.2px] bg-b-secondary ">
    <span class="pt-2    font-sans font-bold text-b-secondary">Made with <span class="font-bold">❤️</span> <a href="https://github.com/Nebyat19/">by Hetu</a></span> </div>

</footer>


</template>

<script>

export default {
  name: 'BookFooter'
}
</script>