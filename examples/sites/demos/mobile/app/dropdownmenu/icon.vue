<template>
  <div class="tiny-mobile-dropdown-menu-demo">
    <tiny-dropdown-menu>
      <tiny-dropdown-item v-model="value2" :options="option2" :icon="icon"></tiny-dropdown-item>
    </tiny-dropdown-menu>
  </div>
</template>

<script lang="jsx">
import { TinyDropdownMenu, TinyDropdownItem } from '@opentiny/vue'
import { iconAdministrator } from '@opentiny/vue-icon'

export default {
  components: {
    TinyDropdownMenu,
    TinyDropdownItem
  },
  data() {
    return {
      icon: iconAdministrator(),
      value2: 'a',
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' }
      ]
    }
  }
}
</script>
