<template>
  <div class="badge-wrap">
    <tiny-badge :value="value1">
      我的待办
      <template #content>共{{ value1 }}项</template>
    </tiny-badge>
  </div>
</template>

<script lang="jsx">
import { TinyBadge } from '@opentiny/vue'

export default {
  components: {
    TinyBadge
  },
  data() {
    return {
      value1: 2
    }
  }
}
</script>

<style>
.badge-wrap {
  padding: 20px;
}
</style>
