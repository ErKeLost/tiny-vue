<template>
  <div class="demo-dept">
    <h3 class="title">基本用法</h3>
    <div class="content">
      <tiny-dept v-model="value" @confirm="confirm"></tiny-dept>
    </div>
  </div>
</template>

<script lang="jsx">
import { TinyDept, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyDept
  },
  setup() {
    return {
      value: '022471'
    }
  },
  methods: {
    confirm() {
      TinyModal.message({ message: 'Dept部门 confirm 事件' })
    }
  }
}
</script>

<style scoped>
.demo-dept .tiny-dept {
  width: 270px;
}
.title {
  font-size: 14px;
  line-height: 1.5;
  padding: 16px 0;
}
</style>
