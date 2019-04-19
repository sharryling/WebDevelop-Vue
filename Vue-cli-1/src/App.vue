<template>
  <div id="app">
    <hello :sonValue="fatherValue" v-on:getSon="getFromSon"/>
  </div>
</template>

<script>
import hello from './components/hello'

export default {
  name: 'App',
  data:function(){
    return {
      fatherValue:'papa'
    }
  },
  components: {
    hello
  },
  methods:{
    getFromSon:function(data){
      console.log('son value =',data)
    }
  }
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
</style>
