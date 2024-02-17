<template>
  <div 
    class="toolbox-item" 
    :draggable="true"
    @click="onSelect"
    @dragstart="onDragStart"
  >
    <span class="material-icons">{{ icon }}</span>
    <span>{{ type }}</span>
  </div>
</template>

<script>
export default {
  name: 'ToolboxItem',
  props: {
    type: String,
    icon: String,
  },
  methods: {
    onSelect() {
      // 可以在这里添加您希望点击时触发的逻辑
      this.$emit('select', this.type);
    },
    onDragStart(event) {
      // 设置拖动传输的数据，比如表单元素的类型
      event.dataTransfer.setData("type", this.type);
      // 可以添加更多逻辑，比如改变拖动时的样式等
      event.dataTransfer.effectAllowed = "move";
    },
  },
};
</script>

<!-- Add your styles here -->
<style scoped>
.toolbox-item {
  /* 工具项样式 */
}
.material-icons {
  /* 图标样式 */
}
</style>
