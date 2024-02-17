<template>
  <div class="toolbox">
    <ToolboxItem v-for="item in items" :key="item.type" :type="item.type" :icon="item.icon" />
  </div>
</template>

<script>
import ToolboxItem from './ToolboxItem.vue';

export default {
  name: 'ToolboxContainer',
  components: {
    ToolboxItem
  },
  data() {
    return {
      items: [
        { type: 'text', icon: 'text_fields' },
        { type: 'checkbox', icon: 'check_box' },
        { type: 'radio', icon: 'radio_button_checked' },
        // ...其他表单元素
      ]
    };
  }
};
</script>

<style scoped>
.toolbox {
  /* 工具箱样式 */
}
</style>
