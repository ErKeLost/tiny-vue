<template>
  <tiny-checkbox-group v-model="checked">
    <tiny-checkbox label="复选框1"></tiny-checkbox>
    <tiny-checkbox label="复选框2"></tiny-checkbox>
  </tiny-checkbox-group>
</template>

<script setup>
import { ref } from 'vue'
import { TinyCheckbox, TinyCheckboxGroup } from '@opentiny/vue'

const checked = ref(['复选框1', '复选框2'])
</script>
