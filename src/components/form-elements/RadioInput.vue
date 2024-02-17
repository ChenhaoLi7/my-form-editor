<template>
    <div class="form-group">
      <label :for="id">{{ label }}</label>
      <div class="radio-group">
        <label class="radio-label" v-for="(option, index) in options" :key="index">
          <input
            type="radio"
            :name="name"
            :value="option.value"
            v-model="value"
          >
          {{ option.text }}
        </label>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RadioInput',
    props: {
      id: String,
      name: String,
      label: String,
      options: Array,
      value: [String, Number]
    }
  };
  </script>
  
  <style scoped>
  /* Your CSS styles */
  </style>
  