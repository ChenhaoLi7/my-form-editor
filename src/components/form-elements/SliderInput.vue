<template>
    <div class="slider-container">
      <input type="range" :min="min" :max="max" v-model="value" class="slider">
      <label>{{ label }}: {{ value }}</label>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SliderInput',
    props: {
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 100
      },
      value: {
        type: Number,
        default: 50
      },
      label: String
    },
    methods: {
      updateValue(event) {
        this.$emit('input', parseFloat(event.target.value));
      }
    }
  };
  </script>
  
  <style scoped>
  .slider-container {
    display: flex;
    align-items: center;
  }
  
  .slider {
    -webkit-appearance: none;
    width: 100%;
    height: 15px;
    border-radius: 5px;   
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
  }
  
  .slider:hover {
    opacity: 1;
  }
  
  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #4CAF50;
    cursor: pointer;
  }
  
  .slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #4CAF50;
    cursor: pointer;
  }
  </style>
  