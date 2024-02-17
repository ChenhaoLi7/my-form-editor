<template>
  <div class="form-group">
    <label :for="id">{{ label }}</label>
    <select :id="id" class="form-control" v-model="selectedValue">
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SelectInput',
  props: {
    id: String,
    label: String,
    options: Array,
    value: [String, Number]
  },
  computed: {
    selectedValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      }
    }
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
