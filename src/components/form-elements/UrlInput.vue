<template>
    <div class="form-group">
      <label :for="id">{{ label }}</label>
      <input
        :id="id"
        type="url"
        class="form-control"
        :placeholder="placeholder"
        v-model="value"
      />
    </div>
  </template>
  
  <script>
  export default {
    name: 'UrlInput',
    props: {
      id: String,
      label: String,
      placeholder: String,
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
  