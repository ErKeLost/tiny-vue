<template>
  <div class="demo-form">
    <tiny-form ref="ruleFormRef" :model="createData" :rules="rules">
      <tiny-form-item label="姓名" prop="users">
        <tiny-input v-model="createData.users"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="日期" prop="datepicker" ref="dateRef">
        <tiny-date-picker v-model="createData.datepicker"></tiny-date-picker>
      </tiny-form-item>
      <tiny-form-item label="URL" prop="url">
        <tiny-input v-model="createData.url"></tiny-input>
      </tiny-form-item>
      <tiny-form-item>
        <tiny-button type="primary" @click="validateField"> 校验 </tiny-button>
        <tiny-button type="primary" @click="clearValidate"> 移除校验 </tiny-button>
        <tiny-button type="primary" @click="resetField"> 重置日期 </tiny-button>
      </tiny-form-item>
    </tiny-form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { TinyForm, TinyFormItem, TinyInput, TinyDatePicker, TinyButton, TinyModal } from '@opentiny/vue'

const ruleFormRef = ref()
const dateRef = ref()

const createData = reactive({
  users: '',
  url: '',
  datepicker: ''
})
const rules = ref({
  users: [
    { required: true, message: '必填', trigger: 'blur' },
    { min: 2, max: 11, message: '长度必须不小于2', trigger: ['change', 'blur'] }
  ],
  datepicker: { type: 'date', required: true },
  url: { type: 'url', required: true }
})

function clearValidate() {
  ruleFormRef.value.clearValidate(['url', 'datepicker'])
}

function resetField() {
  dateRef.value.resetField()
}

async function validateField() {
  const errArray = []
  await ruleFormRef.value.validateField(['url', 'datepicker'], (errMsg, fieldConfig) => {
    if (errMsg) {
      errArray.push(fieldConfig)
    }
  })
  if (errArray.length > 0) {
    // empty
  } else {
    TinyModal.alert('日期和url通过校验')
  }
}
</script>

<style scoped>
.demo-form {
  width: 450px;
}
</style>
