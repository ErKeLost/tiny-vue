<template>
  <div>
    <tiny-config-provider :direction="direction">
      <h1 class="demo-provider">Text</h1>
      <h1>المعرفة نور والجهل ظلام</h1>
      <div class="demo-provider">
        <span>ما هو مكتوب في الكتب هو مجرد كلمات ، وما يتم تذكره هو المعرفة</span>
      </div>
      <hr />
      <h1 class="demo-provider">Input</h1>
      <tiny-input v-model="input" placeholder="الرجاء إدخال المحتوى" class="demo-provider"></tiny-input>
      <h1 class="demo-provider">Container</h1>
      <div class="content">
        <tiny-layout>
          <tiny-row>
            <tiny-col :span="12">
              <div class="col">span 12</div>
            </tiny-col>
          </tiny-row>
          <tiny-row>
            <tiny-col :span="3">
              <div class="col">span 3</div>
            </tiny-col>
            <tiny-col :span="6">
              <div class="col">span 6</div>
            </tiny-col>
            <tiny-col :span="3">
              <div class="col">span 3</div>
            </tiny-col>
          </tiny-row>
          <tiny-row>
            <tiny-col :span="2">
              <div class="col">span 2</div>
            </tiny-col>
            <tiny-col :span="3">
              <div class="col">span 3</div>
            </tiny-col>
            <tiny-col :span="2">
              <div class="col">span 2</div>
            </tiny-col>
            <tiny-col :span="3">
              <div class="col">span 3</div>
            </tiny-col>
            <tiny-col :span="2">
              <div class="col">span 2</div>
            </tiny-col>
          </tiny-row>
        </tiny-layout>
      </div>
    </tiny-config-provider>

    <tiny-button @click="changeDirect('rtl')"> RTL </tiny-button>
    <tiny-button @click="changeDirect('ltr')"> LTR </tiny-button>
  </div>
</template>

<script>
import { TinyConfigProvider, TinyButton, TinyInput, TinyLayout, TinyRow, TinyCol } from '@opentiny/vue'

export default {
  components: {
    TinyConfigProvider,
    TinyButton,
    TinyInput,
    TinyLayout,
    TinyRow,
    TinyCol
  },
  data() {
    return {
      direction: 'ltr',
      input: ''
    }
  },
  methods: {
    changeDirect(direct) {
      this.direction = direct
    }
  }
}
</script>

<style scoped>
.content .tiny-row {
  margin-bottom: 20px;
}

.content .tiny-row .last-child {
  margin-bottom: 0;
}

.content .tiny-col .col {
  line-height: 30px;
  text-align: center;
  color: #fff;
  background: #1f9ed8;
  border-radius: 15px;
}

.content .tiny-col:nth-child(even) .col {
  background: #73d0fc;
}
.demo-provider {
  margin-bottom: 8px;
}
</style>
