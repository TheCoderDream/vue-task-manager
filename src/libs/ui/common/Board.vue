<template>
  <div class="board">
    <div class="flex flex-row items-start">
      <BoardColumn
        v-for="(column, $columnIndex) of filteredBoard.columns"
        :key="column.name"
        :column="column"
        :columnIndex="$columnIndex"
        :board="board"
        :style="{marginTop: '20px', marginRight: board.columns.length !== ($columnIndex + 1) && '20px'}"
      />
    </div>
<!--    <div
      class="task-bg"
      v-if="isTaskOpen"
      @click.self="close"
    >
      <router-view/>
    </div>-->
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { mapState, mapGetters } from 'vuex'
import BoardColumn from './BoardColumn'

export default defineComponent({
  components: { BoardColumn },
  data () {
    return {
      newColumnName: ''
    }
  },
  computed: {
    ...mapState(['board']),
    ...mapGetters(['filteredBoard'])
    /*     isTaskOpen () {
      return this.$route.name === 'task'
    } */
  },
  methods: {/*
    close () {
      this.$router.push({ name: 'board' })
    }
        createColumn () {
      this.$store.commit('CREATE_COLUMN', {
        name: this.newColumnName
      })

      this.newColumnName = ''
    } */
  }
})
</script>

<style lang="css">
.board {
}

.task-bg {
}
</style>
