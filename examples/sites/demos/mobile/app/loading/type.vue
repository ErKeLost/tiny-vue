<template>
  <div>
    <div id="tiny-mobile-loading2" style="width: 100%; height: 120px"></div>
  </div>
</template>

<script lang="jsx">
import { TinyLoading } from '@opentiny/vue'

export default {
  data() {
    return {
      loadingInstance: null
    }
  },
  mounted() {
    this.loadingInstance = TinyLoading.service({
      tiny_mode: 'mobile',
      target: document.getElementById('tiny-mobile-loading2'),
      type: 'simple'
    })
  },
  methods: {
    closeLoading() {
      this.loadingInstance.close()
    }
  }
}
</script>
