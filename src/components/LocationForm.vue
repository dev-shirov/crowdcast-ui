<script lang="ts">
import { defineComponent, ref } from 'vue'
import axios from 'axios';

export default defineComponent({
  setup() {
    return {
      cascaderOptions: ref([
        {
          label: 'Aklan',
          value: 'Aklan',
          children: [
            {
              label: 'Malay',
              value: 'Malay',
              children: [
                {
                  label: 'Boracay Island',
                  value: 'Boracay Island'
                },
                {
                  label: 'Cove Island',
                  value: 'Cove Island'
                }
              ]
            },
          ]
        }
      ])
    }
  }
})
</script>

<template>
  <n-card title="" size="huge" hoverable>
    <template #cover>
      <img src="/crowdcast-banner.png">
    </template>
    <n-divider />
    <n-space vertical :style="{ paddingTop: '10%' }">
      <n-input-group>
        <n-cascader :style="{ width: '50%' }" :options="cascaderOptions" size="large"/>
        <n-date-picker :style="{ width: '50%' }" size="large"/>
      </n-input-group>

      <n-input-group :style="{ paddingTop: '5%' }">
        <n-button type="info" size="large" :style="{ width: '100%' }">
          Submit
        </n-button>
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
