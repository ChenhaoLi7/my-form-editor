<template>
    <el-cascader
      v-model="selectedValue"
      :options="options"
      :props="cascaderProps"
      @change="handleChange"
      placeholder="请选择地区"
    />
  </template>
  
  <script>
  // 导入 Element UI 的 Cascader 组件和样式
  import { Cascader } from 'element-ui';
  import 'element-ui/lib/theme-chalk/index.css';
  
  // 导入 element-china-area-data 数据包
  import areaData from 'element-china-area-data';
  
  export default {
    name: 'AreaCascader',
    components: {
      ElCascader: Cascader
    },
    data() {
      return {
        selectedValue: [], // 用于v-model绑定选中的值
        options: areaData, // 省市区选项数据
        cascaderProps: {
          value: 'code', // 指定选项的值为code属性
          label: 'name', // 指定选项标签为name属性
          children: 'children' // 指定子级列表为children属性
        }
      };
    },
    methods: {
      handleChange(value) {
        console.log('选中的地区:', value);
        // 在这里可以处理选中值变化后的逻辑
      }
    }
  };
  </script>
  <template>
    <el-cascader
      v-model="selectedValue"
      :options="options"
      :props="cascaderProps"
      @change="handleChange"
      placeholder="请选择地区"
    />
  </template>
  
  <script>
  // 导入 Element UI 的 Cascader 组件和样式
  import { Cascader } from 'element-ui';
  import 'element-ui/lib/theme-chalk/index.css';
  
  // 导入 element-china-area-data 数据包
  import areaData from 'element-china-area-data';
  
  export default {
    name: 'AreaCascader',
    components: {
      ElCascader: Cascader
    },
    data() {
      return {
        selectedValue: [], // 用于v-model绑定选中的值
        options: areaData, // 省市区选项数据
        cascaderProps: {
          value: 'code', // 指定选项的值为code属性
          label: 'name', // 指定选项标签为name属性
          children: 'children' // 指定子级列表为children属性
        }
      };
    },
    methods: {
      handleChange(value) {
        console.log('选中的地区:', value);
        // 在这里可以处理选中值变化后的逻辑
      }
    }
  };
  </script>
  