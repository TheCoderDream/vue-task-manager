<template>
  <label class="checkbox-container">
    <template v-if="label">
      {{label}}
    </template>
    <slot v-else :checked="modelValue"></slot>
    <input type="checkbox" @change="$emit('update:modelValue', $event.target.checked)" :value="modelValue" />
    <span class="check"></span>
  </label>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Checkbox',
  props: {
    modelValue: Boolean,
    label: String
  },
  emits: ['update:modelValue'],
  inheritAttrs: false
})
</script>

<style scoped lang="scss">
.checkbox-container {
  position: relative;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #212121;
  padding-left: 20px;
  & input {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;

    &:checked ~ .check {
      background:#2980b9;
      &::after {
        transition: transform .1s linear;
        opacity: 1;
        transform: rotate(45deg) scale(1);
      }
    }
  }
  & .check {
    position: absolute;
    top: 0;
    left: 0;
    width: 16px;
    height: 16px;
    background: #fff;
    border: 1px solid #24599C;
    box-sizing: border-box;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background: rgba(255, 255, 255, 0.9);;
    }

    &::after {
      position: absolute;
      content: "";
      left: 5px;
      top: 2px;
      width: 4px;
      height: 8px;
      border-color: #fff;
      border-style: solid;
      border-width: 0 1px 1px 0;
      transform: rotate(45deg) scale(0.5);
      opacity: 0;
      transition: transform .1s linear;
    }
  }
}
</style>
