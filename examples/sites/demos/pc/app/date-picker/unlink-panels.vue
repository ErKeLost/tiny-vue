<template>
  <div>
    <p>默认启用面板联动：</p>
    <br />
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="value" type="daterange"></tiny-date-picker>
    </div>
    <br />

    <p>关闭面板联动：</p>
    <br />
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="value" type="daterange" unlink-panels></tiny-date-picker>
    </div>
  </div>
</template>

<script>
import { TinyDatePicker } from '@opentiny/vue'

export default {
  components: {
    TinyDatePicker
  },
  data() {
    return {
      value: []
    }
  }
}
</script>

<style scoped lang="less">
.demo-date-picker-wrap {
  width: 280px;
}
</style>
