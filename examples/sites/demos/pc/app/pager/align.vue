<template>
  <div class="content">
    <tiny-pager align="left" :total="100"></tiny-pager>
    <tiny-pager align="center" :total="100"></tiny-pager>
    <tiny-pager align="right" :total="100"></tiny-pager>
  </div>
</template>

<script>
import { TinyPager } from '@opentiny/vue'

export default {
  components: {
    TinyPager
  }
}
</script>

<style scoped>
.content {
  margin-bottom: 20px;
}
.tiny-radio-group {
  margin-bottom: 10px;
}
</style>
