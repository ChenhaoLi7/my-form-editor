<template>
  <div class="form-builder">
    <!-- 工具箱：提供表单元素的选择 -->
    <div class="toolbox">
      <h3>工具箱</h3>
      <button
        v-for="element in availableElements"
        :key="element.type"
        @click="addElement(element)"
      >
        {{ element.label }}
      </button>
    </div>

    <!-- 表单画布 -->
    <FormCanvas :items="formItems" @item-selected="handleItemSelected" />

    <!-- 选中元素的属性编辑器 -->
    <div v-if="selectedItem" class="property-editor">
      <h3>属性编辑器</h3>
      <!-- 这里可以根据 selectedItem.type 来动态加载不同的属性编辑表单 -->
    </div>

    <!-- 表单预览和保存功能 -->
    <div class="form-actions">
      <button @click="previewForm">预览表单</button>
      <button @click="saveForm">保存表单</button>
    </div>
  </div>
</template>

<script>
import FormCanvas from './FormCanvas.vue';

export default {
  components: {
    FormCanvas,
  },
  data() {
    return {
      formItems: [],
      selectedItem: null,
      availableElements: [
        { type: 'TextInput', label: '文本输入' },
        { type: 'CheckboxInput', label: '复选框' },
        // 在这里添加更多可用的元素
      ],
    };
  },
  methods: {
    addElement(element) {
      this.formItems.push({
        id: Date.now(),
        type: element.type,
        props: {
          // 初始化属性，这里可以根据不同的元素类型添加不同的默认属性
          label: element.label,
        },
      });
    },
    handleItemSelected(item) {
      this.selectedItem = item;
    },
    previewForm() {
      // 实现表单预览逻辑
      console.log('预览表单', this.formItems);
    },
    saveForm() {
      // 实现保存表单逻辑，可能需要将 formItems 序列化后存储到数据库或文件中
      console.log('保存表单', this.formItems);
    },
  },
};
</script>

<style>
.toolbox {
  margin-bottom: 20px;
}
.property-editor {
  margin-top: 20px;
}
.form-actions {
  margin-top: 20px;
}
</style>
