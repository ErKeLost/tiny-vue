<template>
  <div>
    <div>场景1：单选</div>
    <br />
    <tiny-select v-model="value" :searchable="true" :show-empty-image="true">
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
    <br />
    <br />
    <div>场景2：多选</div>
    <br />
    <tiny-select v-model="multivalue" :searchable="true" multiple :show-empty-image="true">
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
    <br />
    <br />
    <div>场景3：多选 + 保留搜索关键字</div>
    <br />
    <tiny-select v-model="multivalue" :searchable="true" reserve-keyword multiple :show-empty-image="true">
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
  </div>
</template>

<script>
import { TinySelect, TinyOption } from '@opentiny/vue'

export default {
  components: {
    TinySelect,
    TinyOption
  },
  data() {
    return {
      options: [
        { value: '选项1', label: '北京' },
        { value: '选项2', label: '上海' },
        { value: '选项3', label: '天津' },
        { value: '选项4', label: '重庆' },
        { value: '选项5', label: '深圳' },
        { value: '选项6', label: '南京' },
        { value: '选项7', label: '成都' }
      ],
      value: '',
      multivalue: []
    }
  }
}
</script>

<style lang="less" scoped>
.tiny-select {
  width: 280px;
}
</style>
