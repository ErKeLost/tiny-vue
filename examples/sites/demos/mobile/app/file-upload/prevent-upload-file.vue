<template>
  <tiny-file-upload ref="upload" :action="action" :file-list="fileList" :before-upload="beforeUpload">
    <template #trigger>
      <icon-upload></icon-upload>
    </template>
  </tiny-file-upload>
</template>

<script lang="jsx">
import { TinyFileUpload } from '@opentiny/vue'
import { iconUpload } from '@opentiny/vue-icon'

export default {
  components: {
    TinyFileUpload,
    IconUpload: iconUpload()
  },
  data() {
    return {
      action: '',
      fileList: [
        {
          name: 'test1',
          url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/ld.png`
        }
      ]
    }
  },
  methods: {
    beforeUpload(file) {
      return new Promise((resolve, reject) => {
        if (confirm(`确定要上传 ${file.name}？`)) {
          resolve()
        } else {
          reject(new Error())
        }
      })
    }
  }
}
</script>
