import { Store } from 'vuex'

export function uuid (): string {
  return Math.random().toString(16).slice(2)
}

const STATE_NAME = 'board'

export function saveStatePlugin (store: Store<any>): void {
  store.subscribe(
    (mutation, state) => {
      localStorage.setItem(
        STATE_NAME,
        JSON.stringify(state.board)
      )
    }
  )
}
