<template>
  <div>
    <tiny-button @click="boxVisibility = true" title="弹出 Dialog">弹出 Dialog</tiny-button>
    <tiny-dialog-box v-model:visible="boxVisibility" title="消息" width="30%">
      <span>dialog-box 内容</span>
      <template #footer>
        <div style="width: 100%; height: 100%; background: #dddddd">自定义 footer 区域</div>
      </template>
    </tiny-dialog-box>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyButton, TinyDialogBox } from '@opentiny/vue'

const boxVisibility = ref(false)
</script>
