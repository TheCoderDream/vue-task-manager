<template>
  <div class="tabs">
    <div v-if="searchPlaceholder" class="flex">
      <Input v-model="searchText" class="ml-auto" type="text" :placeholder="searchPlaceholder">
        <template #icon>
          <img src="../../../assets/icons/search.svg" alt="">
        </template>
      </Input>
    </div>
    <div class="flex border-b">
      <div
        class="tab flex items-center justify-center border-t-2 border-l-2 border-r-2 rounded-t p-5 cursor-pointer"
        :class="active === tab ? 'border-4' : ''"
        v-for="(tab, index) in tabsNames"
        :key="index"
        @click="changeTab(tab)"
      >
        <slot
          v-if="$slots.content"
          name="content"
          :tab="tab"
          :index="index"
        ></slot>
        <template v-else>{{tab}}</template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Input from '@/libs/ui/form/Input.vue'
import { Mutations } from '@/store/types/mutations'

export default defineComponent({
  name: 'Tabs',
  components: { Input },
  props: {
    tabsNames: {
      type: Array as PropType<Array<string>>,
      required: true
    },
    searchPlaceholder: String
  },
  data: function () {
    return {
      active: this.tabsNames && this.tabsNames.length > 0 ? this.tabsNames[0] as string : '',
      searchText: ''
    }
  },
  emits: ['changed'],
  methods: {
    changeTab: function (tab: string) {
      this.active = tab
      this.$emit('changed', tab)
    }
  },
  watch: {
    searchText (newValue: string): void {
      this.$store.commit(Mutations.FILTER_TASK, newValue)
    }
  }
})
</script>
