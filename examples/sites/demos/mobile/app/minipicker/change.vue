<template>
  <div class="tiny-mobile-mini-picker-demo">
    <tiny-button @click="fn">cliclk me!</tiny-button>
    <tiny-mini-picker
      title="触发change事件"
      :columns="columns1"
      :visible="boxVisibility"
      @update:visible="boxVisibility = $event"
      @change="Echange"
    ></tiny-mini-picker>
  </div>
</template>

<script lang="jsx">
import { TinyMiniPicker, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyMiniPicker,
    TinyButton
  },
  data() {
    return {
      boxVisibility: false,
      columns1: ['小花', '小草', '小叶', '小树', '小星', '小月']
    }
  },
  methods: {
    fn() {
      this.boxVisibility = true
    },
    Echange(value) {
      console.log(value, '改变后的值')
    }
  }
}
</script>
