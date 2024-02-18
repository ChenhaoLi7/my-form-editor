<template>
  <div class="form-editor">
    <aside class="toolbox">
      <!-- Add your form elements toolbox here -->
    </aside>
    <section class="canvas-wrapper">
      <FormCanvas :items="formItems" @update-form="updateFormItems" />
    </section>
    <aside class="property-editor" v-if="selectedItem">
      <!-- Property editor will go here -->
    </aside>
  </div>
</template>

<script>
import FormCanvas from '@/components/form-builder/FormCanvas.vue';



export default {
  name: 'FormEditor',
  components: {
    FormCanvas
  },
  data() {
    return {
      formItems: [],
      selectedItem: null
    };
  },
  methods: {
    updateFormItems(items) {
      this.formItems = items;
    },
    selectItem(item) {
      this.selectedItem = item;
    }
  }
};
</script>

<style scoped>
.form-editor {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.toolbox {
  /* Styles for toolbox */
}

.canvas-wrapper {
  /* Styles for canvas wrapper */
}

.property-editor {
  /* Styles for property editor */
}
</style>
