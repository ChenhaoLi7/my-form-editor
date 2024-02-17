<template>
    <div class="form-group">
      <label :for="id">{{ label }}</label>
      <div class="rating">
        <span class="star" v-for="n in 5" :key="n" :class="{ 'active': n <= value }" @click="rate(n)">
          ★
        </span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RatingInput',
    props: {
      id: String,
      label: String,
      value: Number
    },
    methods: {
      rate(n) {
        this.$emit('input', n);
      }
    }
  };
  </script>
  
  <style scoped>
  .star {
    cursor: pointer;
    font-size: 1.5em;
    color: grey;
  }
  .star.active {
    color: gold;
  }
  </style>
  