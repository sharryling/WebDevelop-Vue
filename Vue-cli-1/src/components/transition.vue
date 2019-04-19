<template>
  <div id="transition">
    <button v-on:click="show = !show">Toggle</button>
    <transition name="fade">
      <!-- <p v-if="show">hello</p> -->
    </transition>

    <transition name="ballTrans" v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:after-enter="afterEnter" v-on:leave="leaveTo">
      <div class="ball" v-if="show" ></div>
    </transition>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      flag: false,
      show: false
    };
  },
  methods: {
    beforeEnter: function(el) {
      el.style.backgroundColor = "#ccc";
      console.log("beforeEnter");
    },
    enter: function(el,done) {
        el.style.backgroundColor = "orange";
        //done()
    },
    afterEnter: function(el) {
        el.style.backgroundColor = "#ccc";
    },
    leaveTo: function(el,done) {
        el.style.backgroundColor = "red";
        //done()
    },
  }
};
</script>

<style scoped>
#login {
  background-color: aqua;
  height: 20px;
  width: 20px;
  margin: 0 auto;
}

.ball {
  height: 10px;
  width: 10px;
  border-radius: 5px;
  background-color: orange;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to
 {
  opacity: 0;
}



.ballTrans-enter{
    opacity:0;
    transform: translate(100px,100px);
}
.ballTrans-leave-to{
    opacity:0;
    transform: translate(100px,100px);
}
.ballTrans-enter-active{
    transition: cubic-bezier(1.0, 0.5, 0.8, 1.0) 1s  All;
    -webkit-transition:cubic-bezier(1.0, 0.5, 0.8, 1.0) 1s  All;
    -moz-transition: cubic-bezier(1.0, 0.5, 0.8, 1.0) 1s  All;
}
.ballTrans-leave-active{
    transition: ease 2s  All;
    -webkit-transition:ease 2s  All;
    /* -moz-transition:ease 6s  All; */
}
</style>
