<template>
  <div>
    <tiny-user v-model="user" multiple disabled :show-tips="false"></tiny-user>
    <br />
    {{ user }}
  </div>
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
