<template>
  <div class="h-64 w-full p-5 bg-color-bg-5">
    <tiny-standard-list-item
      :show-image="true"
      :user-head="userHeadOption"
      :options="iconOptions"
      :tag="tagOption"
      :data="data"
      custom-class="bg-color-bg-2"
    >
    </tiny-standard-list-item>
  </div>
</template>

<script>
import { TinyStandardListItem } from '@opentiny/vue'
import { IconDel, IconWriting, IconAscending, IconShare } from '@opentiny/vue-icon'

export default {
  components: {
    TinyStandardListItem
  },
  data() {
    return {
      data: {
        title: '关晓雨',
        subTitle: '080907086',
        desc: '这是一段描述文本这是一段描述文本这是一段描述文本这是一段描述文本这是一段描述文本这是一段描述文本这是一段描述文本这是一段描述文本这是一段描述文本这是一段描述文本这是一段描述文本这是一段描述文本'
      },
      tagOption: {
        size: 'mini',
        data: [{ type: 'success', name: '进行中' }]
      },
      userHeadOption: {
        type: 'image',
        size: 40,
        value: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/1.jpg`,
        round: true
      },
      iconOptions: [
        {
          text: '删除列表',
          icon: IconDel()
        },
        {
          text: '编辑',
          icon: IconWriting()
        },
        {
          text: '排序',
          icon: IconAscending()
        },
        {
          text: '分享',
          icon: IconShare()
        }
      ]
    }
  }
}
</script>
