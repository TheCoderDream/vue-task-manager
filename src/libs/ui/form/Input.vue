<template>
  <div class="input-group">
    <label :for="id" v-if="label">{{label}}</label>
    <input
      :type="type"
      :id="id"
      :placeholder="placeholder"
      :value="modelValue"
      :style="{paddingRight: $slots.icon ? '40px' : '20px' }"
      @input="updateValue($event.target.value)"
    />
    <div class="icon" v-if="$slots.icon">
      <slot name="icon"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Input',
  props: {
    id: String,
    label: String,
    placeholder: String,
    modelValue: String,
    type: {
      type: String,
      default: 'text',
      validator (value: string) {
        return ['text', 'number', 'password', 'email', 'date'].includes(value)
      }
    }
  },
  emits: ['update:modelValue'],
  methods: {
    updateValue (value: string) {
      this.$emit('update:modelValue', value)
    }
  }
})
</script>

<style scoped>
.input-group {
  position: relative;
}

.icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
}

input, select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  outline: none;
  background: #FFFFFF;
  border: 1px solid #EEEEEE;
  border-radius: 6px;
}

label {
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #48525F;
  margin: 10px 0;
}
</style>
