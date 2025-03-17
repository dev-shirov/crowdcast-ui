<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      cascaderOptions: ref([
        {
          label: 'option-1',
          value: 'option-1',
          children: [
            {
              label: 'option-1-1',
              value: 'option-1-1'
            }
          ]
        }
      ])
    }
  }
})
</script>

<template>
  <n-card title="Crowdcast" size="huge" hoverable>
    <template #cover>
      <img src="/crowdcast-wallpaper.jpg">
    </template>
    <n-space vertical>
      <n-input-group>
        <n-cascader :style="{ width: '50%' }" :options="cascaderOptions" />
        <n-date-picker :style="{ width: '50%' }"/>
      </n-input-group>
    </n-space>
  </n-card>
</template>

<style scoped>
.n-card {
  width: 500px;
  height: 600px;
}

.n-date-picker {
  max-width: 1024px;
  padding-left: 30px;
}
</style>
