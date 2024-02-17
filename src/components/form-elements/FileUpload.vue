<template>
    <div class="form-group">
      <label :for="id">{{ label }}</label>
      <input
        :id="id"
        type="file"
        class="form-control"
        @change="$emit('change', $event.target.files)"
      />
    </div>
  </template>
  
  <script>
  export default {
    name: 'FileUpload',
    props: {
      id: String,
      label: String
    }
  };
  </script>
  
  <style scoped>
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-control {
    width: 100%;
    /* No padding for file input to align properly across browsers */
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  </style>
  