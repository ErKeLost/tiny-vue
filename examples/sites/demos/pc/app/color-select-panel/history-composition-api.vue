<template>
  <div>
    <tiny-button @click="changeVisible">Show Color select panel</tiny-button>
    <tiny-button @click="addHistoryColor">Append history color</tiny-button>
    <tiny-button @click="popHistoryColor">Pop history color</tiny-button>
    <div style="position: relative">
      <ColorSelectPanel v-model="color" :visible="visible" @confirm="onConfirm" @cancel="onCancel" :history="history" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyColorSelectPanel, TinyButton, TinyNotify } from '@opentiny/vue'

const color = ref('#66ccff')
const visible = ref(false)
const changeVisible = () => (visible.value = !visible.value)
const hidden = () => (visible.value = false)
const onConfirm = (msg) => {
  TinyNotify({
    type: 'success',
    position: 'top-right',
    title: '用户点击了选择',
    message: msg
  })
  hidden()
}
const onCancel = () => {
  TinyNotify({
    type: 'error',
    position: 'top-right',
    title: '用户点击了取消'
  })
  hidden()
}
const history = ref(['#66ccff'])
const randomHex = () =>
  '#' +
  Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, '0')
const addHistoryColor = () => {
  history.value.push(randomHex())
}
const popHistoryColor = () => {
  history.value.pop()
}
</script>
