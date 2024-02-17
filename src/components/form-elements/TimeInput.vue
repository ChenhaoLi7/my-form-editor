<template>
    <div class="form-group">
      <label :for="id">{{ label }}</label>
      <input
        :id="id"
        type="time"
        class="form-control"
        v-model="value"
      />
    </div>
  </template>
  
  <script>
  export default {
    name: 'TimeInput',
    props: {
      id: String,
      label: String,
      value: String
    }
  };
  </script>
  
  <style scoped>
  /* Your CSS styles */
  </style>
  