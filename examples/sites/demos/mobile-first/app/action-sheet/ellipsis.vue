<template>
  <div>
    <div>
      <p>单选，值：{{ activeName1 }}</p>
      <tiny-button @click=";(ellipsis = true), (boxVisibility1 = true)">内容超出隐藏</tiny-button>
      <tiny-button @click=";(ellipsis = false), (boxVisibility1 = true)">内容超出显示</tiny-button>
    </div>
    <br />
    <div>
      <p>多选，值：{{ activeName2 }}</p>
      <tiny-button @click=";(ellipsis = true), (boxVisibility2 = true)">内容超出隐藏</tiny-button>
      <tiny-button @click=";(ellipsis = false), (boxVisibility2 = true)">内容超出显示</tiny-button>
    </div>

    <tiny-action-sheet
      v-model="activeName1"
      title="标题1"
      :ellipsis="ellipsis"
      :show-footer="true"
      :visible="boxVisibility1"
      @update:visible="boxVisibility1 = $event"
    ></tiny-action-sheet>
    <tiny-action-sheet
      v-model="activeName2"
      title="标题2"
      multiple
      :ellipsis="ellipsis"
      :show-footer="true"
      :visible="boxVisibility2"
      @update:visible="boxVisibility2 = $event"
    ></tiny-action-sheet>
  </div>
</template>

<script>
import { TinyActionSheet, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyActionSheet,
    TinyButton
  },
  data() {
    return {
      activeName1: 1,
      activeName2: [],
      ellipsis: false,
      boxVisibility1: false,
      boxVisibility2: false
    }
  },
  methods: {}
}
</script>
