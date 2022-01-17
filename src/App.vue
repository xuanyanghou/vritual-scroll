<template>
  <div class="app-wrap">
    <vritual-scroll
      style="height: 300px;"
      :domHeight=300
      :listData="list">
      <template v-slot:default="slotProps">
        <div>{{slotProps.row.name}}</div>
      </template>
    </vritual-scroll>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import VritualScroll from './components/VritualScroll.vue'

export default defineComponent({
  name: 'App',
  components: { VritualScroll },
  setup() {
    const list = reactive([
      {
        id: 1,
        name: 'test1'
      },
      {
        id: 1,
        name: 'test2'
      },
      {
        id: 1,
        name: 'test3'
      },
      {
        id: 1,
        name: 'test4'
      },
      {
        id: 1,
        name: 'test5'
      },
      {
        id: 1,
        name: 'test6'
      },
      {
        id: 1,
        name: 'test1'
      },
      {
        id: 1,
        name: 'test1'
      },
      {
        id: 1,
        name: 'test1'
      },
      {
        id: 1,
        name: 'test1'
      },
      {
        id: 1,
        name: 'test1'
      },
      {
        id: 1,
        name: 'test1'
      }
    ])
    return {
      list
    }
  }
})

</script>

