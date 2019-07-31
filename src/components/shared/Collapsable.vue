<template>
  <div>
    <div class="header">
      <span v-if="open" @click="open = !open">&#x25B2; Collapse</span>
      <span v-if="!open" @click="open = !open">&#x25BC; Expand</span>
    </div>
    <!-- Togglable Component -->
    <slot v-if="open"></slot>
  </div>
</template>

<script>
export default {
  name: 'Collapsable',
  data: () => ({
    open: true,
  }),
};
</script>

<style scoped>
.header {
  background-color: #bbb;
  padding: 3px;
  cursor: pointer;
}
.flex .header {
    width: 100%;
}
</style>
