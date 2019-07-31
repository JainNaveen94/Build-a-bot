<template>
  <v-app id="app">
    <TopNavigation/>
    <router-view />
  </v-app>
</template>

<script>
import TopNavigation from './components/Globals/TopNavigation.vue';

export default {
  name: 'app',
  components: {
    TopNavigation,
  },
};
</script>

<style>
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
#app {
  font-family: "Avenir", Arial, Helvetica, sans-serif;
}
main {
  margin: 0px auto;
  padding: 30px;
  background-color: white;
  width: 1024px;
  min-height: 300px;
}
</style>
