<template>
  <tiny-user v-model="user" multiple collapse-tags></tiny-user>
</template>

<script lang="jsx">
import { TinyUser } from '@opentiny/vue'

export default {
  components: {
    TinyUser
  },
  data() {
    return {
      user: '441047913162396,702973890055088,421000103624183'
    }
  }
}
</script>
