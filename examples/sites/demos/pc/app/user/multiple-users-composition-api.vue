<template>
  <tiny-user v-model="user" multiple></tiny-user>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyUser } from '@opentiny/vue'

const user = ref('441047913162396,702973890055088,421000103624183')
</script>
