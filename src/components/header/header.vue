<template>
  <div>
    <div class="photo">
      <img :src="seller.seller.imgUrl" alt="">
    </div>
    <div class="name">
      {{seller.seller.name}}
    </div>
    <div class="description">

    </div>
    <div class="support">

    </div>
  </div>
</template>

<script>
    export default {
        props:["seller"]
    }

</script>

<style scoped>

</style>
