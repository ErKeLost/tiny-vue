<template>
  <div>
    <p>默认</p>
    <br />
    <tiny-select v-model="value1" multiple :options="options"></tiny-select>
    <br />
    <br />
    <p>medium</p>
    <br />
    <tiny-select v-model="value2" size="medium" multiple :options="options"></tiny-select>
    <br />
    <br />
    <p>small</p>
    <br />
    <tiny-select v-model="value3" size="small" multiple :options="options"> </tiny-select>
    <br />
    <br />
    <p>mini</p>
    <br />
    <tiny-select v-model="value4" size="mini" multiple :options="options"> </tiny-select>
  </div>
</template>

<script>
import { TinySelect } from '@opentiny/vue'

export default {
  components: {
    TinySelect
  },
  data() {
    return {
      options: [
        { value: '选项1', label: '北京' },
        { value: '选项2', label: '上海' },
        { value: '选项3', label: '天津' },
        { value: '选项4', label: '重庆' },
        { value: '选项5', label: '深圳' }
      ],
      value1: ['选项1', '选项2'],
      value2: ['选项1', '选项2'],
      value3: ['选项1', '选项2'],
      value4: ['选项1', '选项2']
    }
  }
}
</script>

<style lang="less" scoped>
.tiny-select {
  width: 280px;
}
p {
  font-size: 14px;
  line-height: 1.5;
}
</style>
