<template>
  <tiny-grid v-bind="op"></tiny-grid>
</template>

<script lang="jsx">
import { TinyGrid } from '@opentiny/vue'

export default {
  components: {
    TinyGrid
  },
  data() {
    const tableData = [
      {
        id: '1',
        name: 'GFD科技有限公司',
        city: '福州',
        employees: 800,
        created_date: '2014-04-30 00:56:00',
        boole: false
      },
      {
        id: '2',
        name: 'WWW科技有限公司',
        city: '深圳',
        employees: 300,
        created_date: '2016-07-08 12:36:22',
        boole: true
      },
      {
        id: '3',
        name: 'RFV有限责任公司',
        city: '中山',
        employees: 1300,
        created_date: '2014-02-14 14:14:14',
        boole: false
      },
      {
        id: '4',
        name: 'TGB科技有限公司',
        city: '龙岩',
        employees: 360,
        created_date: '2013-01-13 13:13:13',
        boole: true
      },
      {
        id: '5',
        name: 'YHN科技有限公司',
        city: '韶关',
        employees: 810,
        created_date: '2012-12-12 12:12:12',
        boole: true
      },
      {
        id: '6',
        name: 'WSX科技有限公司',
        city: '黄冈',
        employees: 800,
        created_date: '2011-11-11 11:11:11',
        boole: true
      },
      {
        id: '7',
        name: 'KBG物业有限公司',
        city: '赤壁',
        employees: 400,
        created_date: '2016-04-30 23:56:00',
        boole: false
      },
      {
        id: '8',
        name: '深圳市福德宝网络技术有限公司',
        boole: true,
        city: '厦门',
        created_date: '2016-06-03 13:53:25',
        employees: 540
      }
    ]

    return {
      op: {
        editConfig: {
          trigger: 'click',
          mode: 'cell',
          showStatus: true
        },
        columns: [
          {
            type: 'index',
            width: 60
          },
          {
            type: 'selection',
            width: 60
          },
          {
            field: 'employees',
            title: '员工数'
          },
          {
            field: 'created_date',
            title: '创建日期'
          },
          {
            field: 'city',
            title: '城市'
          }
        ],
        data: tableData
      },
      tableData
    }
  },
  methods: {
    checkboxEdit(h, { row }) {
      return (
        <input
          type="checkbox"
          checked={row.boole}
          onChange={(event) => {
            row.boole = event.target.checked
          }}
        />
      )
    }
  }
}
</script>
