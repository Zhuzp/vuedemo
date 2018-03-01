<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="nav">
      <div class="nav-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from "./components/header/header.vue"

  const ERR_OK = 0;

  export default {
    data() {
      return {
        seller: {}
      }
    },
    created() {
      this.$http.get('/news/index').then(response => {
        this.seller = response.body;
        console.log(this.seller)
      }, response => {
        // error callback

      })
    },
    components: {
      'v-header': header
    }
  }
</script>

<style>

</style>
