<template>
  <div>
    <header>
      <img src="../assets/nasaLogo.png" alt="NASA logo">
      <h2>NASA Images</h2>
      <form @submit.prevent="getResults(query)">
        <input type="text" v-model="query" placeholder="Search">
        <button type="submit">Go</button>
      </form>
    </header>
    <div class="content">
      <ul  v-if="results">
        <li v-for="(result, index) in results" :key="index">
          <img :src="result.links[0].href" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      query: '',
      results: ''
    }
  },
  methods: {
    getResults (query) {
      axios.get('https://images-api.nasa.gov/search?q=' + query + '&media_type=image').then(response => {
        console.log(response.data.collection.items)
        this.results = response.data.collection.items
      })
    }
  },
  mounted () {
    // this.getResults(this.query)
  }
}
</script>

<style lang="sass" scoped>
  @mixin bp-tablet
    @media (min-width: 1200px)
      @content

  header
    padding: 0 70px
    height: 100px
    background: #999
    color: white
    display: flex
    flex-direction: row
    align-items: center
    justify-content: space-between
    @media screen and (max-width: 700px)
      flex-direction: column
      height: auto
      padding: 40px
    img
      width: 100px
      height: 80px
    input
      width: 250px
      height: 30px
      padding-left: 10px
    button
      padding: 0 20px
      border: none
      border-radius: 4px
      height: 30px
      cursor: pointer
      transition: .4s
      &:hover
        background: white
  .content
    width: 80%
    margin: 40px auto
    @media screen and (max-width: 700px)
      width: 96%
    ul
      column-count: 3
      column-gap: 10px
      @media screen and (max-width: 900px)
        column-count: 2
      @media screen and (max-width: 700px)
        column-count: 1
      li
        list-style: none
        margin-bottom: 10px
        img
          width: 100%
          display: block
          box-shadow: 0 2px 10px #444
</style>
