<template>
  <div class="mobile-label-demo">
    <h2>是否带*号</h2>
    <tiny-label label="123456789" is-required></tiny-label>
  </div>
</template>

<script>
import { TinyLabel } from '@opentiny/vue'

export default {
  components: {
    TinyLabel
  }
}
</script>

<style scoped>
.mobile-label-demo {
  height: 100%;
  background: #f4f4f4;
  overflow-y: auto;
}
</style>
