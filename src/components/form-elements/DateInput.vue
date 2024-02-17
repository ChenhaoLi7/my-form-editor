<template>
    <div class="form-group">
      <label :for="id">{{ label }}</label>
      <input
        :id="id"
        type="date"
        class="form-control"
        v-model="value"
      />
    </div>
  </template>
  
  <script>
  export default {
    name: 'DateInput',
    props: {
      id: String,
      label: String,
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
  