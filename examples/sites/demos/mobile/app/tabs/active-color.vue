<template>
  <tiny-tabs v-model="activeName" active-color="#1476ff">
    <tiny-tab-item title="标签1" name="first"> 内容1 </tiny-tab-item>
    <tiny-tab-item title="标签2" name="second"> 内容2 </tiny-tab-item>
    <tiny-tab-item title="标签3" name="third"> 内容3 </tiny-tab-item>
    <tiny-tab-item title="标签4" name="fourth"> 内容4 </tiny-tab-item>
    <tiny-tab-item title="标签5" name="fifth"> 内容5 </tiny-tab-item>
    <tiny-tab-item title="标签6" name="sixth"> 内容6 </tiny-tab-item>
    <tiny-tab-item title="标签7" name="seventh"> 内容7 </tiny-tab-item>
  </tiny-tabs>
</template>

<script>
import { TinyTabs, TinyTabItem } from '@opentiny/vue'

export default {
  components: {
    TinyTabs,
    TinyTabItem
  },
  data() {
    return {
      activeName: 'second'
    }
  }
}
</script>
