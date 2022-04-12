<template>
  <Card class="column">
    <AppDrop
      @drop="moveTaskOrColumn"
    >
      <AppDrag
        :transferData="{
        type: 'column',
        fromColumnIndex: columnIndex
      }"
      >
        <div class="column__name">
          {{ column.name }}
        </div>
        <div class="list-reset">
          <ColumnTask
            v-for="(task, $taskIndex) of column.tasks"
            :key="$taskIndex"
            :task="task"
            :taskIndex="$taskIndex"
            :column="column"
            :columnIndex="columnIndex"
            :board="board"
            :style="{borderBottom: board.columns.length !== ($taskIndex + 1) && '1px solid #EEEEEE'}"
          />
        </div>
      </AppDrag>
    </AppDrop>
  </Card>
</template>

<script>
import { defineComponent } from 'vue'
import { MovingTaskAndColumnMixin } from '../../mixins/moving-task-and-column.mixin'
import ColumnTask from './ColumnTask.vue'
import AppDrag from '../dnd/Drag.vue'
import AppDrop from '../dnd/Drop.vue'
import Card from '@/libs/ui/common/Card'

export default defineComponent({
  components: {
    Card,
    ColumnTask,
    AppDrag,
    AppDrop
  },
  mixins: [MovingTaskAndColumnMixin],
  methods: {
    pickupColumn (e, fromColumnIndex) {
      e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.dropEffect = 'move'

      e.dataTransfer.setData('from-column-index', fromColumnIndex)
      e.dataTransfer.setData('type', 'column')
    }
    /*     createTask (e, tasks) {
      this.$store.commit('CREATE_TASK', {
        tasks,
        name: e.target.value
      })
      e.target.value = ''
    }  */
  }
})
</script>

<style scoped lang="scss">
.column {
  min-width: 350px;
  overflow: hidden;

  &__name {
    background: #F9FAFB;
    padding: 12px 19px;
    border: 1px solid #EEEEEE;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;

    color: #665E74;
  }
}

</style>
