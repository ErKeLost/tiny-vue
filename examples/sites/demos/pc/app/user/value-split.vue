<template>
  <div>
    <tiny-user v-model="user" multiple value-split=";" text-split="," value-field="userAccount"></tiny-user>
    <p>value 值：{{ user }}</p>
  </div>
</template>

<script lang="jsx">
import { TinyUser } from '@opentiny/vue'

export default {
  components: {
    TinyUser
  },
  data() {
    return {
      user: 'test1,test2,test3'
    }
  }
}
</script>

<style scoped>
p {
  font-size: 14px;
  line-height: 1.5;
  padding: 16px 0;
}
</style>
