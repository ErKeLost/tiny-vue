<template>
  <tiny-file-upload
    ref="upload"
    :action="action"
    :file-list="fileList"
    :auto-upload="false"
    :before-remove="beforeRemove"
  >
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
    beforeRemove(file, fileList) {
      return new Promise((resolve, reject) => {
        if (window.confirm(`确定移除 ${file.name}？`)) {
          resolve()
        } else {
          reject(new Error())
        }
      })
    }
  }
}
</script>
