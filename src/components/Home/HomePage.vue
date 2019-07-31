<template>
  <div class="home">
    <div>
      <img class="robot" src="../../assets/robot-home.png" aria-hidden="true">
    </div>
    <div>
      <router-link :to="{name: 'RobotBuilder'}">Get Started</router-link>building Your First Robot !
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
.home {
  text-align: center;
}
.robot {
  height: 300px;
}
</style>
