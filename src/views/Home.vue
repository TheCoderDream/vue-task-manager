<template>
  <UIHeader/>
  <div class="home">
    <Tabs :search-placeholder="'subject or reference'" :tabs-names="['Employees', 'Departments']"></Tabs>
    <Board></Board>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Tabs from '@/libs/ui/common/Tabs.vue'
import UIHeader from '@/libs/ui/common/UIHeader.vue'
import Board from '@/libs/ui/common/Board.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Board,
    UIHeader,
    Tabs
  }
})
</script>

<style scoped>
.home {
  margin: 35px auto;
  max-width: 1200px;
}
</style>
