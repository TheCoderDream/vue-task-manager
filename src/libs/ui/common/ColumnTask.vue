<template>
  <AppDrop
    @drop="moveTaskOrColumn"
  >
    <AppDrag
      class="task"
      :transferData="{
        type: 'task',
        fromColumnIndex: columnIndex,
        fromTaskIndex: taskIndex
      }"
      @click="goToTask(task)"
    >
      <Task :task="task"/>
    </AppDrag>
  </AppDrop>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Task as TaskModel } from '@/libs/mock/board'
import { MovingTaskAndColumnMixin } from '../../mixins/moving-task-and-column.mixin'
import AppDrag from '../dnd/Drag.vue'
import AppDrop from '../dnd/Drop.vue'
import Task from '@/libs/ui/common/Task.vue'

export default defineComponent({
  components: { Task, AppDrag, AppDrop },
  mixins: [MovingTaskAndColumnMixin],
  props: {
    task: {
      type: Object,
      required: true
    },
    taskIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    goToTask (task: TaskModel) {
      // TODO: implement task detail page
      // this.$router.push({ name: 'task', params: { id: task.id } })
    }
  }
})
</script>

<style lang="css">
.task {
  padding: 20px 16px;
}
</style>
