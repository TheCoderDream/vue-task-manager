<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style scoped>
.card {
  background: #FFFFFF;
  border: 1px solid #EEEEEE;
  box-sizing: border-box;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
}
</style>
