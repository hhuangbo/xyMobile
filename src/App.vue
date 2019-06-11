<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
    name:'APP'
    
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
@media screen and (min-width:1050px) {
  html,body{font-size: 40px !important;}
}
</style>
