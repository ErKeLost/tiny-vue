<template>
  <tiny-file-upload :action="action" :file-list="fileList" list-type="picture-card"> </tiny-file-upload>
</template>

<script>
import { TinyFileUpload, TinyDialogBox } from '@opentiny/vue'
import { IconPlus } from '@opentiny/vue-icon'

export default {
  components: {
    TinyFileUpload,
    TinyDialogBox,
    IconPlus: IconPlus()
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload',
      fileList: [
        {
          name: 'test1.png',
          url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/ld.png`,
          status: 'uploading',
          percentage: '50'
        },
        {
          name: 'test2',
          url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/ry.png`
        },
        {
          name: 'test3',
          url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/ld.png`,
          status: 'fail'
        }
      ]
    }
  }
}
</script>
