<template>
  <div>
    <div class="button-box">
      <tiny-button @click="change">改变列插槽</tiny-button>
    </div>
    <tiny-grid :data="tableData">
      <tiny-grid-column type="index" width="60"></tiny-grid-column>
      <tiny-grid-column v-for="col in cols" :key="col.field" :field="col.field" :title="col.title">
        <template v-if="col.header" #header>
          <div>{{ col.header.value }}</div>
        </template>
        <template v-if="col.default" #default>
          <div>{{ col.default.value }}</div>
        </template>
      </tiny-grid-column>
      <tiny-grid-column field="address" title="地址"></tiny-grid-column>
      <tiny-grid-column field="introduction" title="公司简介" show-overflow></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyGrid, TinyGridColumn, TinyButton } from '@opentiny/vue'

let times = 1

const createNewCols = () => [
  {
    field: 'name',
    title: '名称',
    header: {
      value: `header-${++times}`
    }
  },
  {
    field: 'area',
    title: '所属区域',
    default: {
      value: `col-${times}`
    }
  }
]

const cols = ref([
  {
    field: 'name',
    title: '名称',
    header: {
      value: `header-${times}`
    }
  },
  {
    field: 'area',
    title: '所属区域',
    default: {
      value: `col-${times}`
    }
  }
])

const tableData = ref([
  {
    id: '1',
    name: 'GFD科技YX公司',
    area: '华东区',
    address: '福州',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '2',
    name: 'WWWW科技YX公司',
    area: '华南区',
    address: '深圳福田区',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
  }
])

const change = () => {
  cols.value = createNewCols()
}
</script>

<style scoped>
.button-box {
  margin-bottom: 20px;
}
</style>
