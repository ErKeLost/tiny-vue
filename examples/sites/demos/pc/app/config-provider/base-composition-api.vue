<template>
  <div>
    <tiny-config-provider :design="design">
      <tiny-alert type="warning" description="type 为 warning"></tiny-alert>
    </tiny-config-provider>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyConfigProvider, TinyAlert, TinyModal } from '@opentiny/vue'
import { iconWarningTriangle } from '@opentiny/vue-icon'

const design = ref({
  name: 'smb', // 设计规范名称
  version: '1.0.0', // 设计规范版本号
  components: {
    Alert: {
      icons: {
        warning: iconWarningTriangle()
      },
      /**
       *
       * @param {*} props 组件属性集合
       * @param {*} hooks vue2-->@composition-api,vue3-->vue
       * @param {*} param2 context
       * @param {*} api Alert组件renderless层方法属性和方法集合
       */
      renderless: (props, hooks, { emit }, api) => {
        const state = api.state
        return {
          handleClose() {
            state.show = false
            TinyModal.message('触发自定方法')
            emit('close')
          }
        }
      }
    }
  }
})
</script>
