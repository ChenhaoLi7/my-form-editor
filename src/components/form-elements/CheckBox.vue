<template>
  <div class="form-check">
    <input 
      :id="id" 
      type="checkbox" 
      class="form-check-input" 
      :checked="checked" 
      @change="$emit('change', $event.target.checked)"
    />
    <label class="form-check-label" :for="id">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: 'CheckboxInput',
  props: {
    id: String,
    label: String,
    checked: Boolean
  }
};
</script>

<style scoped>
.form-check {
  margin-bottom: 15px;
}

.form-check-label {
  margin-left: 5px;
}
</style>
