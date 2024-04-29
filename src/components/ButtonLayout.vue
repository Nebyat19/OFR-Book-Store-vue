<template>
   <button
              class=" px-5 py-2 hover:bg-b-primary hover:text-b-secondary text-sm capitalize  a rounded-lg border  border-bk-primary  text-b-primary">
              {{ name }}
        </button>

</template>


<script>
export default {
  name: 'ButtoSecondary',
  props:['class', 'name']
}
</script>