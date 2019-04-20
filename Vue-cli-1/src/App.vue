<template>
  <div id="app">
     <router-view></router-view>
  </div>
  
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html,body{
  height: 100%;
  width: 100%;
}
#app {
  font-family: 'Microsoft YaHei',sans-serif;
  text-align: center;
  color: #ccc;
  margin: 0 auto;
  height: 100%;
  width: 100%;
}
button,button:focus,button:active{
  outline: 0;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: #DDDDDD;
}
</style>
