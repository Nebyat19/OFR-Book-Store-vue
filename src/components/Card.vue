<template>
  <div :id="id" v-if="showCard" class="card">
    <h1>{{ title }}</h1>
    <h3>{{ Card.title }}</h3>
    <p>{{ Card.content }}</p>

    <button @click="changeTitle">Click me</button>
  </div>
  <div>
    <button v-on:click="showCard = !showCard">toogleShow</button>
    <span v-if="showCard" @click="showCard = false">hide card</span>
    <span v-if="!showCard" @click="showCard = true"> showCard</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 7,
      title: 'Card Title',
      showCard: true,
      Card: {
        title: 'Card Title',
        content: 'Card Content',
        key: '1'
      }
    }
  },

  name: 'SimpleCard',

  methods: {
    changeTitle() {
      this.title = 'New j Title'
    }
  }
}
</script>
