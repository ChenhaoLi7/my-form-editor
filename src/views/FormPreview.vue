<template>
  <div class="form-preview">
    <FormCanvas :items="formItems" />
  </div>
</template>

<script>
import FormCanvas from '@/components/form-builder/FormCanvas.vue';

import { mapState } from 'vuex';

export default {
  name: 'FormPreview',
  components: {
    FormCanvas
  },
  computed: {
    ...mapState({
      formItems: state => state.form.formItems
    })
  }
};
</script>

<style scoped>
.form-preview {
  padding: 20px;
}
</style>
