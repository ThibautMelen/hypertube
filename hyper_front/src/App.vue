<template>
  <div id="app">

    <!-- <comp-header v-if="true"/> -->
    <router-view v-if="true"/>

  </div>
</template>

<script>
// import compHeader from  './components/Header-Footer/Header'

export default {
  // components:{
  //   compHeader
  // }
}


</script>

<style lang="scss">
@import './styles/_global.scss';
</style>