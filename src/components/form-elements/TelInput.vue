<template>
    <div class="form-group">
      <label :for="id">{{ label }}</label>
      <input
        :id="id"
        type="tel"
        class="form-control"
        :placeholder="placeholder"
        v-model="value"
      />
    </div>
  </template>
  
  <script>
  export default {
    name: 'TelInput',
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
  