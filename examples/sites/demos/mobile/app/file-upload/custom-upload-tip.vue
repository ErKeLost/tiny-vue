<template>
  <tiny-file-upload ref="upload" :action="action" accept=".jpg,.png">
    <template #trigger>
      <icon-upload></icon-upload>
    </template>
    <template #tip> 只能上传 jpg/png 文件，且不超过500 kb </template>
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
      action: 'http://localhost:3000/api/upload'
    }
  }
}
</script>
