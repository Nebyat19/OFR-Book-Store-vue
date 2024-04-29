<template>
   <button
              class=" px-5 py-2 hover:bg-b-secondary hover:text-b-primary text-sm capitalize  a rounded-lg bg-b-primary text-white">
              {{ name }}
        </button>

</template>


<script>
export default {
  name: 'ButtoPrimary',
  props:['class', 'name']
}
</script>