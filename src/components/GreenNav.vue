<template>
  <div class="mt-0 relative h-16 Header bg-slate-950 w-full text-green-500">
    <nav class="w-[80%] h-full items-center justify-between mx-auto flex">
      <div
        class="w-18 py-1 rounded-md text-sm px-2 capitalize bg-green-600 text-yellow-50 text-center"
      >
        sample
      </div>

      <ul
        id="nav-links-2"
        v-if="navShow"
        class="duration-150 transition-all ease-in top-16 z-40 flex flex-col items-center md:flex-row gap-6 pb-5 md:pb-0 absolute md:static text-sm bg-slate-950 w-full left-0 md:w-fit capitalize"
      >
        <li
          class="w-full text-center md:w-fit border-b pb-1 border-green-950 md:p-0 md:border-none"
        >
          <a class="hover:border border border-green-500 rounded-lg p-1 text-white" href="">home</a>
        </li>
        <li
          class="w-full text-center md:w-fit border-b pb-1 border-green-950 md:p-0 md:border-none"
        >
          <a class="hover:border border-green-500 rounded-lg p-1 hover:text-white" href=""
            >aboute us</a
          >
        </li>
        <li
          class="w-full text-center md:w-fit border-b pb-1 border-green-950 md:p-0 md:border-none"
        >
          <a class="hover:border border-green-500 rounded-lg p-1 hover:text-white" href=""
            >service</a
          >
        </li>
        <li
          class="w-full text-center md:w-fit border-b pb-1 border-green-950 md:p-0 md:border-none"
        >
          <a class="hover:border border-green-500 rounded-lg p-1 hover:text-white" href=""
            >contact us</a
          >
        </li>
        <li
          class="w-full text-center md:w-fit border-b pb-1 border-green-950 md:p-0 md:border-none"
        >
          <a class="hover:border border-green-500 rounded-lg p-1 hover:text-white" href=""
            >product</a
          >
        </li>
      </ul>

      <div class="flex gap-5">
        <button class="py-0.5 font-bold border-green-600 border rounded-lg px-5">Now!</button>
        <svg
          @click="navShow = !navShow"
          id="menu-btn2"
          class="w-6 md:hidden cursor-pointer"
          data-slot="icon"
          aria-hidden="true"
          fill="none"
          stroke-width="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'GreenNav',
  components: {},
  data() {
    return {
      navShow: true
    }
  }
}
</script>
