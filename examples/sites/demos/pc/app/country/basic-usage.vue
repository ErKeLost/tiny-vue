<template>
  <div>
    <tiny-country v-model="value" @change="change"></tiny-country>
    <p>当前选中值：{{ value }}</p>
  </div>
</template>

<script lang="jsx">
import { TinyCountry, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyCountry
  },
  data() {
    return {
      value: ''
    }
  },
  methods: {
    change(value) {
      TinyModal.message({ message: '当前选中国家：' + value, status: 'info' })
    }
  }
}
</script>

<style scoped>
p {
  font-size: 14px;
  line-height: 1.5;
  padding: 16px 0;
}
</style>
