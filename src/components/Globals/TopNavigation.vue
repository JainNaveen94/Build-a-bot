<template>
  <v-toolbar class="top-bar" dark>
    <router-link class="nav-link" to="/">
      <v-img
        max-height="43px"
        max-width="100px"
        :src="require('../../assets/build-a-bot-logo.png')"
      />
      <v-toolbar-title class="title">
        <span>Build-a-Bot</span>
      </v-toolbar-title>
    </router-link>
    <span id="line-icon">|</span>
    <v-spacer></v-spacer>
    <!-- <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Link One</v-btn>
      <v-btn flat>Link Two</v-btn>
      <v-btn flat>Link Three</v-btn>
    </v-toolbar-items>-->
  </v-toolbar>
</template>

<script>
export default {
  name: 'TopNavigation',
};
</script>

<style scoped>
#line-icon {
  font-size: 45px;
}
.title {
  margin: 0px;
  font-size: 20px;
  font-weight: bold;
}
.nav-link {
  text-decoration: none;
  color: inherit;
}
.top-bar .v-toolbar__content{
  padding: 0px;
}
</style>
