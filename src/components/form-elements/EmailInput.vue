<template>
    <div class="form-group">
      <label :for="id">{{ label }}</label>
      <input
        :id="id"
        type="email"
        class="form-control"
        :placeholder="placeholder"
        v-model="value"
      />
    </div>
  </template>
  
  <script>
  export default {
    name: 'EmailInput',
    props: {
      id: String,
      label: String,
      placeholder: String,
      value: String
    }
  };
  </script>
  
  <style scoped>
  /* Your CSS styles */
  </style>
  