<template>
  <div class="content">
    <tiny-button @click="visible = !visible" :reset-time="0">自定义底部</tiny-button>
    <tiny-modal v-model="visible" footer-dragable show-footer>
      <template #footer>
        <tiny-button>自定义底部信息</tiny-button>
      </template>
    </tiny-modal>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyButton, TinyModal } from '@opentiny/vue'

const visible = ref(false)
</script>
