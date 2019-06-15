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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
@media screen and (min-width:1050px) {
  html,body{font-size: 40px !important;}
  
    header{padding:2% 4% !important;}
    .toggleMenu, .menuClose{padding:1% 0 0 0 !important;}
}
</style>
