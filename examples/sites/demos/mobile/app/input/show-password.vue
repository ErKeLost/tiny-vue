<template>
  <div class="demo-input">
    <tiny-input v-model="input" show-password></tiny-input>
  </div>
</template>

<script lang="jsx">
import { TinyInput } from '@opentiny/vue'

export default {
  components: {
    TinyInput
  },
  data() {
    return {
      input: 'abcdefg'
    }
  }
}
</script>

<style scoped>
.demo-input {
  height: 100%;
  padding: 20px 16px;
  background: #f5f5f5;
}
</style>
