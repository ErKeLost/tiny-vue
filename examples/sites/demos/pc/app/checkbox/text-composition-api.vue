<template>
  <div class="checkbox-demo">
    <tiny-checkbox v-model="checked" text="复选框1" true-label="真文本" false-label="假文本"></tiny-checkbox>
    <tiny-button @click="getValue">获取文本</tiny-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyCheckbox, TinyModal, TinyButton } from '@opentiny/vue'

const checked = ref('假文本')

function getValue() {
  TinyModal.message({
    message: '当前状态对应的值为:' + checked.value,
    top: 200,
    status: 'info'
  })
}
</script>

<style scoped>
.checkbox-demo {
  display: flex;
  gap: 10px;
}
</style>
