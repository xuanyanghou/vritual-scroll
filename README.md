# vritual-scroll

> vue3 版本大数据滚动列表，复用已有 dom，优化渲染效率

## 安装

```bash
$ npm install vritual-scroll -S
```

## 使用

在 `main.js` 文件中引入插件并注册

```bash
# main.js
import VritualScroll from 'VritualScroll'
import 'vritual-scroll/dist/vritual-scroll.css'
Vue.use(VritualScroll)
```

在项目中用使用 VritualScroll

```js
<template>
  <vritual-scroll
    style="height: 300px;"
    :domHeight=300
    :listData="list">
    <template v-slot:default="slotProps">
      // 自定义展示内容
      <div>{{slotProps.row.name}}</div>
    </template>
  </vritual-scroll>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  setup() {
    const list = reactive([])
    return {
      list
    }
  }
})
</script>
```

## 参数

| 参数      | 说明     | 类型   | 默认值 |
| --------- | -------- | ------ | ------ |
| list      | 数据源   | Array  | []     |
| itemSize  | 每项高度 | Number | 80     |
| domHeight | 外层高度 | Number | 300    |
