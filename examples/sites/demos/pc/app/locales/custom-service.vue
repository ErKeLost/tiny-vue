<template>
  <tiny-locales
    :get-locale="getLocale"
    :get-current-locale="getCurrentLocale"
    :get-change-locale-url="getChangeLocaleUrl"
  ></tiny-locales>
</template>

<script lang="jsx">
import { TinyLocales } from '@opentiny/vue'

export default {
  components: {
    TinyLocales
  },
  methods: {
    getLocale() {
      // resolve 出来的必须是国际化的 key
      return Promise.resolve(['zhCN', 'enUS', 'zhTW'])
    },
    getCurrentLocale() {
      return Promise.resolve(['zhCN'])
    },
    getChangeLocaleUrl(targetLocale) {
      if (targetLocale === 'enUS') {
        return Promise.resolve(`${window.location.origin}/#/webenglish/en-US/component/locales/custom-service`)
      } else {
        return Promise.resolve(`${window.location.origin}/#/zh-CN/component/custom-service`)
      }
    }
  }
}
</script>
