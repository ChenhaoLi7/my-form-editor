<template>
  <div class="form-group">
    <label :for="id">{{ label }}</label>
    <input 
      :id="id" 
      type="text" 
      class="form-control" 
      :placeholder="placeholder" 
      :value="value" 
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    id: String,
    label: String,
    placeholder: String,
    value: String
  }
};
</script>

<!-- Add styles as needed -->
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
