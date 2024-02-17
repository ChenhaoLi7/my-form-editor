<template>
    <div class="form-group">
      <label :for="id">{{ label }}</label>
      <input
        :id="id"
        type="tel"
        class="form-control"
        :placeholder="placeholder"
        v-model="value"
        @input="validateMobile"
      />
    </div>
  </template>
  
  <script>
  export default {
    name: 'MobileInput',
    props: {
      id: String,
      label: String,
      placeholder: String,
      value: String
    },
    methods: {
      validateMobile(event) {
        // 简单的手机号格式验证，您可以根据需要添加更复杂的验证逻辑
        const regex = /^1[3-9]\d{9}$/;
        const isValid = regex.test(event.target.value);
        if (isValid) {
          this.$emit('input', event.target.value);
        } else {
          // 可以在这里处理错误或显示一条消息
          this.$emit('input', '');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-control {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  </style>
  