<template>
  <tiny-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <tiny-form-item label="日期时间" prop="datetime">
      <tiny-date-picker v-model="ruleForm.datetime" type="datetime"></tiny-date-picker>
    </tiny-form-item>
    <tiny-form-item label="时间" prop="time">
      <tiny-time-picker v-model="ruleForm.time"></tiny-time-picker>
    </tiny-form-item>
    <tiny-form-item label="即时配送" prop="delivery">
      <tiny-switch v-model="ruleForm.delivery"></tiny-switch>
    </tiny-form-item>
    <tiny-form-item label="活动性质" prop="type">
      <tiny-checkbox-group v-model="ruleForm.type">
        <tiny-checkbox label="美食/餐厅线上活动" name="type"></tiny-checkbox>
        <tiny-checkbox label="地推活动" name="type"></tiny-checkbox>
      </tiny-checkbox-group>
    </tiny-form-item>
    <tiny-form-item label="特殊资源" prop="resource">
      <tiny-radio-group v-model="ruleForm.resource">
        <tiny-radio label="线上品牌商赞助"></tiny-radio>
        <tiny-radio label="线下场地免费"></tiny-radio>
      </tiny-radio-group>
    </tiny-form-item>
    <tiny-form-item label="活动形式" prop="desc">
      <tiny-input type="textarea" v-model="ruleForm.desc"></tiny-input>
    </tiny-form-item>
    <tiny-form-item>
      <tiny-button type="primary" @click="submitForm('ruleForm')"> 立即创建 </tiny-button>
      <tiny-button @click="resetForm('ruleForm')"> 重置 </tiny-button>
    </tiny-form-item>
  </tiny-form>
</template>

<script>
import {
  TinyForm,
  TinyFormItem,
  TinyButton,
  TinyCheckbox,
  TinyCheckboxGroup,
  TinyRadio,
  TinyRadioGroup,
  TinySwitch,
  TinyTimePicker,
  TinyDatePicker,
  TinyInput
} from '@opentiny/vue'
import { alert } from '@opentiny/vue-modal'

export default {
  components: {
    TinyForm,
    TinyFormItem,
    TinyInput,
    TinyButton,
    TinyCheckbox,
    TinyCheckboxGroup,
    TinyRadio,
    TinyRadioGroup,
    TinySwitch,
    TinyTimePicker,
    TinyDatePicker
  },
  data() {
    return {
      reset: false,
      ruleForm: {
        name: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        datetime: '',
        time: ''
      },
      rules: {
        name: [
          { required: true, trigger: 'blur' },
          { min: 3, max: 5, trigger: 'blur' }
        ],
        datetime: [
          {
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change'
          }
        ],
        time: [
          {
            type: 'date',
            required: true,
            message: '请选择时间',
            trigger: 'change'
          }
        ],
        type: [
          {
            type: 'array',
            required: true,
            message: '请至少选择一个活动性质',
            trigger: 'change'
          }
        ],
        resource: [{ required: true, message: '请选择活动资源', trigger: 'change' }],
        desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          alert('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.reset = true
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style>
.demo-ruleForm .tiny-form-item .tiny-form-item__content {
  width: 270px;
}
button:first-of-type {
  margin-left: 100px;
}
</style>
