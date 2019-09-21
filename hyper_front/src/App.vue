<template>
  <div id="app">

    <router-view v-if="!this.$store.state.loading" />

  </div>
</template>

<script>

export default {
  // components:{
  //   compHeader
  // }
}


</script>

<style lang="scss">
@import './styles/_global.scss';
</style>