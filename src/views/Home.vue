<template>
  <div class="home">
    <div v-for="(book, index) in books" :key="index">
      <p>{{ book.title }}</p>
      <img :src="book.imgs[0]" :alt="book.title" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapState(['books'])
  },
  watch: {
    books(val) {
      console.log('books: ', val)
    }
  },
  created () {
    this.$store.dispatch('bindBooks')

    setTimeout(() => {
      // this.$store.dispatch('writeToBooks')
    }, 2000);
  },
}
</script>
