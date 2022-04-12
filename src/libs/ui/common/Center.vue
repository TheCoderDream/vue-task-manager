<template>
  <div class="container">
    <div class="container-item">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Center'
}
</script>

<style scoped lang="scss">
.container {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
