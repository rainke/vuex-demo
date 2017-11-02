<template>
  <div id="app">
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/cookbook">Go to cookbook</router-link>
    <router-link to="/counter">Go to counter</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-active{
  color: red;
}
</style>
