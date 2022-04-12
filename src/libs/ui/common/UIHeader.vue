<template>
  <div class="header">
    <!-- Todo Extract to separate component -->
    <div class="breadcrumb">
      <img src="../../../assets/icons/logo.svg" alt="Logo">
      <div class="breadcrumb__location">
        <img src="../../../assets/icons/folder.svg">
        <h3>Projects</h3>
      </div>
    </div>
    <!-- Todo Extract to separate component -->
    <div class="actions"></div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'UIHeader'
}
</script>
<style scoped lang="scss">
.header {
  padding: 18px 24px;
  border-bottom: 1px solid #EEEEEE;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.breadcrumb {
  display: flex;

  & > img {
    margin-right: 22px;
  }

  &__location {
    display: flex;
    align-items: center;

    & > img {
      margin-right: 10px;
    }

    h3 {
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
      color: #48525F;
    }
  }
}
</style>
