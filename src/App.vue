<template>
  <div class="app-wrap">
    <vritual-table
      style="height: 300px;"
      :domHeight=300
      :listData="list">
      <template v-slot:default="slotProps">
        <div>{{slotProps.row.name}}</div>
      </template>
    </vritual-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import VritualTable from './components/VritualTable.vue'

export default defineComponent({
  name: 'App',
  components: { VritualTable },
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

