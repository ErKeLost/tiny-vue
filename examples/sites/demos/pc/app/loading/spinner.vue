<template>
  <div id="tiny-demo-loading-spinner"></div>
</template>

<script>
import { TinyLoading } from '@opentiny/vue'
import { iconLoadingShadow } from '@opentiny/vue-icon'

const spinnerIcon = iconLoadingShadow()

export default {
  mounted() {
    TinyLoading.service({
      text: '自定义 loading 图标',
      spinner: spinnerIcon,
      target: document.getElementById('tiny-demo-loading-spinner')
    })
  }
}
</script>

<style scoped>
#tiny-demo-loading-spinner {
  margin-bottom: 10px;
  height: 120px;
}
</style>
