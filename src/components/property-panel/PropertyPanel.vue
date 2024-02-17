<template>
  <div class="form-editor">
    <h2>Form Editor</h2>
    <draggable class="drag-area" v-model="fields" group="fields">
      <div class="form-field" v-for="field in fields" :key="field.id">
        <label>{{ field.label }}</label>
        <input :type="field.type" :placeholder="field.placeholder">
        <button @click="removeField(field.id)">Remove</button>
      </div>
    </draggable>
    <button @click="addField">Add Field</button>
  </div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  components: {
    draggable
  },
  data() {
    return {
      fields: []
    };
  },
  methods: {
    addField() {
      this.fields.push({
        id: Date.now(), // 使用时间戳作为简单的唯一标识符
        label: 'New Field',
        type: 'text',
        placeholder: 'Enter something...'
      });
    },
    removeField(fieldId) {
      this.fields = this.fields.filter(field => field.id !== fieldId);
    }
  }
};
</script>

<style>
.drag-area {
  border: 1px dashed #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
.form-field {
  margin-bottom: 5px;
}
</style>
