<template>
  <tiny-dept :value="value" size="medium">
    <template #hrapprover="data">
      <div>{{ data.slotScope.hrapprover }}</div>
    </template>
  </tiny-dept>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyDept } from '@opentiny/vue'

const value = ref('022471')
</script>
