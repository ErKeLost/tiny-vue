<template>
  <div>
    <ColorPicker v-model="color" :predefine="predefine" />
    <br />
    <Button @click="addPredefineColor">Append predefine color</Button>
    <Button @click="popPredefineColor">Pop predefine color</Button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyColorPicker, TinyButton } from '@opentiny/vue'

const color = ref('#66ccff')
const randomHex = () =>
  '#' +
  Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, '0')
const predefine = ref(new Array(8).fill(0).map(() => randomHex()))
const addPredefineColor = () => {
  predefine.value.push(randomHex())
}
const popPredefineColor = () => {
  predefine.value.pop()
}
</script>
