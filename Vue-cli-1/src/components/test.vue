<template>
<div id="test">
   <p>登录组件</p>
   <button @click="$router.push('/')">back to helloWS</button>
</div>
</template>

<script>
export default {
    beforeCreate: function () {},
    created: function () {},
    beforeMount: function () {},
    mounted: function () {
        console.log("I'm hello !");
        
    }
}
</script>

<style scoped>
#test {
    margin: 0 auto;
    height: 500px;
    width: 100%;
    background-color: #f0f0f0;
}

.newclass {
    font-size: 20px;
    background-color: #ccc;
}
</style>
