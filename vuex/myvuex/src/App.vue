<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <br />
    <button @click="goBack">后退</button><button @click="Go">前进</button><button @click="goHome">返回首页</button><br />
    <router-link to="/">home</router-link> |
    <router-link to="/Params">Params</router-link> |
    <router-link to="/gohome">gohome</router-link>|
    <router-link to="/goParams/2019">goParams</router-link> |
    <router-link to="/Hi1">Hi1</router-link> |
    <router-link to="/Hi1_1">Hi1_1</router-link> |
    <router-link to="*">404</router-link>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    goBack(){
      this.$router.go(-1)
    },
    Go(){
      this.$router.go(1)
    },
    goHome(){
      this.$router.push('/')
    }
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity .5s;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  opacity: 0;
  transition: opacity .5s;
}
</style>
