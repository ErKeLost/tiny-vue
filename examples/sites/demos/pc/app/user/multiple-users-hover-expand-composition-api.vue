<template>
  <tiny-user v-model="user" style="width: 400px" multiple hover-expand></tiny-user>
</template>

<script>
import { TinyUser } from '@opentiny/vue'

export default {
  components: {
    TinyUser
  },
  data() {
    return {
      user: '702973890055088,421000103624002,421000103624003'
    }
  }
}
</script>
