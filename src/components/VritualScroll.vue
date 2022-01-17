<template>
  <div
    ref="list"
    class="infinite-list-container"
    @scroll="scrollEvent">
    <div
      class="infinite-list-phantom"
      :style="{ height: listHeight + 'px' }"></div>
    <table
      class="infinite-list"
      :style="{ transform: getTransform }">
      <slot name="header"></slot>
      <tr
        ref="items"
        class="infinite-list-item" 
        v-for="item in visibleData"
        :key="item.id"
        :style="{ height: itemSize + 'px',lineHeight: itemSize + 'px' }">
        <slot :row="item"></slot>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, toRefs, ref, PropType } from 'vue'

export default defineComponent({
  name: 'VritualScroll',
  props: {
    // 所有列表数据
    listData: {
      type: Object as PropType<any[]>,
    },
    // 每项高度
    itemSize: {
      type: Number,
      default: 80
    },
    domHeight: {
      type: Number,
      default: 300
    }
  },
  setup(props) {
    const { listData, itemSize, domHeight } = toRefs(props)
    const list = ref(null)
    const start = ref(0)
    const startOffset = ref(0)
    const end = ref(0)

    const listHeight = computed(() => (listData.value as any).length * itemSize.value)
    const visibleCount = computed(() => Math.ceil(domHeight.value / itemSize.value))
    const getTransform = computed(() => `translate3d(0,${startOffset.value}px, 0)`)
    const visibleData = computed(() => (listData.value as any).slice(start.value, Math.min(end.value, (listData.value as any).length)))

    const scrollEvent = () => {
      let scrollTop = (list.value as any).scrollTop; // 当前滚动位置
      start.value = Math.floor(scrollTop / itemSize.value); // 此时的开始索引
      end.value = start.value + visibleCount.value; // 此时的结束索引
      startOffset.value = scrollTop - (scrollTop % itemSize.value); // 此时的偏移量
    }
    onMounted(() => {
      // screenHeight.value = (domHeight.value).clientHeight
      start.value = 0
      end.value = start.value + visibleCount.value
    })
    return {
      scrollEvent,
      listHeight,
      getTransform,
      visibleData,
      list
    }
  }
})
</script>

<style scoped>
.infinite-list-container {
  width: 100%;
  height: 100%;
  overflow: auto;
  position: relative;
  -webkit-overflow-scrolling: touch;
}
.infinite-list-phantom {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index:1;
}
.infinite-list {
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
  text-align: center;
}
.infinite-list-item {
  padding: 10px;
  color: #555;
  box-sizing: border-box;
  border-bottom: 1px solid #999;
}
</style>
