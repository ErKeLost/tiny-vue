<template>
  <div class="button-wrap">
    <p>点击事件</p>
    <tiny-button type="secondary" :loading="loading" @click="btnClick" size="small">点我加载</tiny-button>
  </div>
</template>

<script>
import { TinyButton } from '@opentiny/vue'
import { iconMail } from '@opentiny/vue-icon'

export default {
  components: {
    TinyButton
  },
  data() {
    return {
      IconMail: iconMail(),
      loading: false
    }
  },
  methods: {
    btnClick() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000)
    }
  }
}
</script>

<style scoped>
body {
  overflow: hidden;
}
.button-wrap {
  padding: 0 10px;
  overflow-y: scroll;
  height: 100%;
}
.button-wrap .tiny-mobile-button {
  margin-right: 16px;
  margin-bottom: 16px;
}
</style>
