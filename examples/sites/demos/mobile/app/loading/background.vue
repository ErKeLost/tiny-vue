<template>
  <div id="demo-loading"></div>
</template>

<script>
import { TinyLoading } from '@opentiny/vue'

export default {
  mounted() {
    TinyLoading.service({
      background: '#19191960',
      text: '自定义遮罩层背景色',
      target: document.getElementById('demo-loading'),
      tiny_mode: 'mobile'
    })
  }
}
</script>

<style scoped>
#demo-loading {
  height: 100%;
}
</style>
