<template>
  <div>
    <tiny-text-popup v-model="value"></tiny-text-popup>
    <span style="margin-left: 14px">{{ value }}</span>
  </div>
</template>

<script lang="jsx">
import { TinyTextPopup } from '@opentiny/vue'

export default {
  components: {
    TinyTextPopup
  },
  data() {
    return {
      value: '我是 TextPopup 组件'
    }
  }
}
</script>
