import { $props, $setup, $prefix, defineComponent } from '@opentiny/vue-common'
import PCTemplate from './pc.vue'

const $constants = {}

import template from 'virtual-template?pc|mobile-first'


export default defineComponent({
  name: $prefix + 'ColorPicker',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    modelValue: String
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
