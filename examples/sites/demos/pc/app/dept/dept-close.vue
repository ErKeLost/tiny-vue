<template>
  <tiny-dept v-model="value" @close="close"></tiny-dept>
</template>

<script lang="jsx">
import { TinyDept, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyDept
  },
  data() {
    return {
      value: '022471'
    }
  },
  methods: {
    close() {
      TinyModal.message('关闭弹出框')
    }
  }
}
</script>
