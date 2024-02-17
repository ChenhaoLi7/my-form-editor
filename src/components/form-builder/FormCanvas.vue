<template>
  <div class="form-canvas">
    <draggable v-model="formItems" @start="dragging = true" @end="dragging = false">
      <div
        v-for="(item, index) in formItems"
        :key="item.id"
        class="form-item"
        :class="{ 'selected': selectedItem === item }"
        @click="selectItem(item)"
      >
        <!-- 动态组件渲染 -->
        <component :is="item.type" v-bind="item.props"></component>
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  components: {
    draggable,
  },
  props: {
    items: Array,
  },
  data() {
    return {
      formItems: this.items,
      selectedItem: null,
      dragging: false,
    };
  },
  methods: {
    selectItem(item) {
      if (!this.dragging) {
        this.selectedItem = item;
        // Emit an event to notify the parent component about the selection
        this.$emit('item-selected', item);
      }
    },
  },
  watch: {
    items(newVal) {
      this.formItems = newVal;
    },
  },
};
</script>

<style>
.form-canvas {
  min-height: 200px;
  border: 1px dashed #ccc;
  padding: 10px;
}

.form-item {
  border: 1px solid #eee;
  margin-bottom: 10px;
  padding: 5px;
  cursor: pointer;
}

.form-item.selected {
  border-color: #007bff;
}
</style>
