<template>
  <tiny-bulletin-board :tab-title="tabTitle" :data="data"></tiny-bulletin-board>
</template>

<script lang="jsx">
import { TinyBulletinBoard } from '@opentiny/vue'

export default {
  components: {
    TinyBulletinBoard
  },
  data() {
    return {
      tabTitle: ['页面跳转'],
      data: [
        [
          {
            text: '基于 route',
            date: '2019-06-11',
            route: '#/Alert'
          }
        ]
      ]
    }
  }
}
</script>
