<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      cascaderOptions: ref([
        {
          label: 'Aklan',
          value: 1,
          children: [
            {
              label: 'Boracay Island',
              value: {
                id: 2510,
                name: 'Boracay Island, Philippines',
                lat: 11.9674,
                long: 121.9248,
                zoom: 13,
              },
            },
          ]
        },
        {
          label: 'Bohol',
          value: 2,
          children: [
            {
              label: 'Tagbilaran City',
              value: {
                id: 2821,
                name: 'Tagbilaran City, Philippines',
                lat: 9.6499974,
                long: 123.8499966,
                zoom: 13,
              },
            },
          ]
        },
        {
          label: 'Benguet',
          value: 3,
          children: [
            {
              label: 'Baguio City',
              value: {
                id: 73,
                name: 'Baguio City, Philippines',
                lat: 16.416665 ,
                long: 120.5999976,
                zoom: 13,
              },
            },
          ]
        },
        {
          label: 'Cebu',
          value: 4,
          children: [
            {
              label: 'Cebu City',
              value: {
                id: 223,
                name: 'Cebu City, Philippines',
                lat: 10.3157 ,
                long: 123.8854,
                zoom: 8,
              },
            },
          ]
        }
      ]),
      selectOptions: ref([
        {
          label: 'January',
          value: '1'
        },
        {
          label: 'February',
          value: '2'
        },
        {
          label: 'March',
          value: '3'
        },
        {
          label: 'April',
          value: '4'
        },
        {
          label: 'May',
          value: '5'
        },
        {
          label: 'June',
          value: '6'
        },
        {
          label: 'July',
          value: '7'
        },
        {
          label: 'August',
          value: '8'
        },
        {
          label: 'September',
          value: '9'
        },
        {
          label: 'October',
          value: '10'
        },
        {
          label: 'November',
          value: '11'
        },
        {
          label: 'December',
          value: '12'
        },
      ]),
      activityOptions: ref([
        {
          label: 'Hiking',
          value: 1
        },
        {
          label: 'Surfing',
          value: 2
        },
        {
          label: 'Staycation',
          value: 3
        },
      ])
    }
  },
  emits: {
    click: null,
    updateMap: (value) => {
      if (value) {
        return true
      }
      else {
        return false
      }
    }
  }
})
</script>

<template>
  <n-card size="huge" hoverable>
    <template #cover>
      <img class="n-card-img-banner" src="/crowdcast-banner.png">
    </template>
    <!-- <n-divider /> -->
    <n-space vertical>
      <n-input-group>
        <n-cascader placeholder="Select location" :style="{ width: '100%', padding: '5px' }" :options="cascaderOptions" size="large" v-model:value="value" />  <!--ONMAPCHANGE: @update:value="$emit('updateMap', value)" -->
        <n-select placeholder="Select month" :style="{ width: '100%', padding: '5px' }" :options="selectOptions" size="large"/>
        <n-select placeholder="Select activity" :style="{ width: '100%', padding: '5px' }" :options="activityOptions" size="large"/>
        <n-button type="info" size="large" :style="{ width: '20%', padding: '10px', marginTop: '5px' }" @click="$emit('updateMap', value)">
          Submit
        </n-button>
      </n-input-group>
     
      <!-- <n-input-group>
        <n-select placeholder="Select month" :style="{ width: '100%' }" :options="selectOptions" size="large"/>
      </n-input-group>

      <n-input-group>
        <n-select placeholder="Select activity" :style="{ width: '100%' }" :options="activityOptions" size="large"/>
      </n-input-group> -->

      <!-- <n-input-group :style="{ paddingTop: '5%' }">
        <n-button type="info" size="large" :style="{ width: '100%' }" @click="$emit('updateMap', value)">
          Submit
        </n-button>
      </n-input-group> -->
    </n-space>
   
  </n-card>
</template>

<style scoped>
.n-card {
  max-width: 1024px;
  max-height: 200px;
}

.n-card-img-banner {
  max-height: 300px;
  max-width: 200px;
  padding-left: 40px;
  padding-top: 20px;
}
</style>
