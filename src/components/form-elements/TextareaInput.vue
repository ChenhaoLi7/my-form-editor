<template>
    <div class="form-group">
      <label :for="id">{{ label }}</label>
      <textarea
        :id="id"
        class="form-control"
        :placeholder="placeholder"
        :rows="rows"
        v-model="value"
      ></textarea>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TextareaInput',
    props: {
      id: String,
      label: String,
      placeholder: String,
      rows: {
        type: Number,
        default: 4
      },
      value: String
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
  