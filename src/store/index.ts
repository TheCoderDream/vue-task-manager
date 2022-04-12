import { createStore } from 'vuex'
import { MockBoardData } from '@/libs/mock/board'
import { Mutations } from './types/mutations'
import { uuid } from '@/libs/utils'

export default createStore({
  state: {
    board: MockBoardData,
    searchText: ''
  },
  getters: {
    getTask ({ board }) {
      return (id: string) => {
        for (const column of board.columns) {
          for (const task of column.tasks) {
            if (task.id === id) {
              return task
            }
          }
        }
      }
    },
    filteredBoard ({ board, searchText }) {
      const query = (searchText || '').trim().toLocaleLowerCase()
      if (!query) {
        return board
      }
      const newBoard = {
        ...board
      }
      newBoard.columns = board.columns
        .map(column => ({
          ...column,
          tasks: column.tasks.filter(task => {
            return task.name.toLocaleLowerCase().includes(query) ||
              task.description.toLocaleLowerCase().includes(query) ||
              task.title.toLocaleLowerCase().includes(query)
          })
        }))
      return newBoard
    }
  },
  mutations: {
    [Mutations.CREATE_TASK] (state, { tasks, name }) {
      tasks.push({
        name,
        id: uuid(),
        description: ''
      })
    },
    [Mutations.CREATE_COLUMN] (state, { name }) {
      state.board.columns.push({
        name,
        tasks: []
      })
    },
    [Mutations.UPDATE_TASK] (state, { task, key, value }) {
      task[key] = value
    },
    [Mutations.MOVE_TASK] (state, { fromTasks, toTasks, fromTaskIndex, toTaskIndex }) {
      const taskToMove = fromTasks.splice(fromTaskIndex, 1)[0]
      toTasks.splice(toTaskIndex, 0, taskToMove)
    },
    [Mutations.MOVE_COLUMN] (state, { fromColumnIndex, toColumnIndex }) {
      const columnList = state.board.columns

      const columnToMove = columnList.splice(fromColumnIndex, 1)[0]
      columnList.splice(toColumnIndex, 0, columnToMove)
    },
    [Mutations.FILTER_TASK] (state, searchText) {
      state.searchText = searchText
    }
  },
  actions: {
  },
  modules: {
  }
})
