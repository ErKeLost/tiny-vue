<template>
  <div>
    <tiny-button @click="getCropBoxData" style="margin-bottom: 20px">获取裁剪框数据</tiny-button>
    <tiny-button text="图片裁剪" @click="visible = !visible" style="margin-bottom: 20px"></tiny-button>
    <tiny-crop ref="crop" :cropvisible="visible" @update:cropvisible="visible = $event" :src="imgUrl"></tiny-crop>
  </div>
</template>

<script lang="jsx">
import { TinyCrop, TinyButton, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyCrop,
    TinyButton
  },
  data() {
    return {
      imgUrl: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`,
      visible: false
    }
  },
  methods: {
    getCropBoxData() {
      TinyModal.message({
        message: `裁剪框数据：${JSON.stringify(this.$refs.crop.getCropBoxData())}`,
        status: 'info'
      })
    }
  }
}
</script>
