<template>
  <div
    draggable="true"
    @dragstart.self="onDrag"
    @dragover.prevent="dragOver"
    @dragenter.prevent
  >
    <slot/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    transferData: {
      type: Object,
      required: true
    }
  },
  methods: {
    onDrag (e: DragEvent): void {
      window.document.body.classList.remove('grabbable')
      if (e.dataTransfer) {
        e.dataTransfer.effectAllowed = 'move'
        e.dataTransfer.dropEffect = 'move'
        e.dataTransfer.setData('payload', JSON.stringify(this.transferData))
      }
    },
    dragOver (e: DragEvent): void {
      e.preventDefault()
      if (e.dataTransfer) {
        e.dataTransfer.dropEffect = 'move'
      }
    },
    dragEnd (e: DragEvent): void {
      window.document.body.classList.add('grabbable')
    }
  }
})
</script>

<style>

</style>
