<template>
  <div class="index-bar-wrapper">
    <tiny-index-bar :index-list="indexList" @change="indexChange" @select="selectIndex">
      <div v-for="item in indexList" :key="item">
        <tiny-index-bar-anchor :index="item"></tiny-index-bar-anchor>
        <div>内容 {{ item }}</div>
        <div>内容 {{ item }}</div>
        <div>内容 {{ item }}</div>
        <div>内容 {{ item }}</div>
      </div>
    </tiny-index-bar>
  </div>
</template>

<script lang="jsx">
import { TinyIndexBar, TinyIndexBarAnchor, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyIndexBar,
    TinyIndexBarAnchor
  },
  data() {
    return {
      indexList: []
    }
  },
  mounted() {
    this.indexList = Array.from(new Array(26), (ele, index) => String.fromCharCode(65 + index))
  },
  methods: {
    indexChange(value) {
      TinyModal.message({ message: 'change事件:' + value })
    },
    selectIndex(value) {
      TinyModal.message({ message: 'select事件:' + value })
    }
  }
}
</script>

<style scoped>
.index-bar-wrapper {
  width: 414px;
}
</style>
