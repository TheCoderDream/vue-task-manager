import { ComponentOptionsMixin } from 'vue'
import { Mutations } from '@/store/types/mutations'

export const MovingTaskAndColumnMixin: ComponentOptionsMixin = {
  props: {
    column: {
      type: Object,
      required: true
    },
    columnIndex: {
      type: Number,
      required: true
    },
    board: {
      type: Object,
      required: true
    }
  },
  methods: {
    moveTaskOrColumn (transferData: any): void {
      if (transferData.type === 'task') {
        this.moveTask(transferData)
      } else {
        this.moveColumn(transferData)
      }
    },
    moveTask ({ fromColumnIndex, fromTaskIndex }: { fromColumnIndex: number, fromTaskIndex: number}): void {
      const fromTasks = this.board.columns[fromColumnIndex].tasks

      this.$store.commit(Mutations.MOVE_TASK, {
        fromTasks,
        fromTaskIndex,
        toTasks: this.column.tasks,
        toTaskIndex: this.taskIndex
      })
    },
    moveColumn ({ fromColumnIndex }: { fromColumnIndex: number}) {
      this.$store.commit(Mutations.MOVE_COLUMN, {
        fromColumnIndex,
        toColumnIndex: this.columnIndex
      })
    }
  }
}
