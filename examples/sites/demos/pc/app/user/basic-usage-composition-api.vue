<template>
  <tiny-user v-model="user"></tiny-user>
</template>

<script setup>
import { ref } from 'vue'
import { TinyUser } from '@opentiny/vue'

const user = ref('702973890055088')
</script>
