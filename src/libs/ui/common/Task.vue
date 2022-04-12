<template>
  <div class="task">
    <span class="task__status_icon">
      <img src="../../../assets/icons/leaf.svg" alt="">
    </span>
    <div class="task__desc">
      <div class="task__header">
        <span>{{task.userAssigned.fullName}}</span>
        <h3>{{task.title}}</h3>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'Task',
  props: {
    task: Object
  }
}
</script>

<style scoped lang="scss">
.task {
  display: flex;
  align-items: start;
  &__status_icon {
    display: inline-block;
    background: #3BC38E;
    border-radius: 6px;
    padding: 15px;
    margin-right: 12px;
  }
  &__header {
    span {
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #9FA6B1;
    }
    h3 {
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
      color: #48525F;
    }
  }
}
</style>
