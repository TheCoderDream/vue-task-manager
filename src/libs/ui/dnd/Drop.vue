<template>
  <div
    @drop.stop="onDrop"
    @dragover.prevent
    @dragenter.prevent
  >
    <slot :data="data"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data () {
    return {
      data: null
    }
  },
  emits: ['drop'],
  methods: {
    onDrop (e: DragEvent): void {
      if (e.dataTransfer) {
        this.data = JSON.parse(e.dataTransfer.getData('payload'))
        this.$emit('drop', this.data)
      }
    }
  }
})
</script>

<style lang="css" scoped>
</style>
