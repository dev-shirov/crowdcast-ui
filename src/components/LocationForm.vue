<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const checkedValueRef = ref<string | null>(null)
    const boracayInfo = {
      id: 2510,
      name: 'Boracay Island, Philippines',
      lat: 11.9674,
      long: 121.9248,
      zoom: 13,
    }

    const boholInfo = {
      id: 2821,
      name: 'Bohol, Philippines',
      lat: 9.6499974,
      long: 123.8499966,
      zoom: 13,
    }

    const cebuInfo = {
      id: 223,
      name: 'Cebu City, Philippines',
      lat: 10.3157 ,
      long: 123.8854,
      zoom: 8,
    }


    return {
      checkedValue: checkedValueRef,
      showRecommendation: true,
      handleChange(e: Event) {
        checkedValueRef.value = (e.target as HTMLInputElement).value
        if (checkedValueRef.value === 'Boracay Island') {
          console.log(boracayInfo);
        }

        if (checkedValueRef.value === 'Bohol') {
          console.log(boholInfo);
        }

        if (checkedValueRef.value === 'Cebu') {
          console.log(cebuInfo);
        }

      },
      // cascaderOptions: ref([
      //   {
      //     label: 'Aklan',
      //     value: 1,
      //     children: [
      //       {
      //         label: 'Boracay Island',
      //         value: {
      //           id: 2510,
      //           name: 'Boracay Island, Philippines',
      //           lat: 11.9674,
      //           long: 121.9248,
      //           zoom: 13,
      //         },
      //       },
      //     ]
      //   },
      //   {
      //     label: 'Bohol',
      //     value: 2,
      //     children: [
      //       {
      //         label: 'Tagbilaran City',
      //         value: {
      //           id: 2821,
      //           name: 'Tagbilaran City, Philippines',
      //           lat: 9.6499974,
      //           long: 123.8499966,
      //           zoom: 13,
      //         },
      //       },
      //     ]
      //   },
      //   {
      //     label: 'Benguet',
      //     value: 3,
      //     children: [
      //       {
      //         label: 'Baguio City',
      //         value: {
      //           id: 73,
      //           name: 'Baguio City, Philippines',
      //           lat: 16.416665 ,
      //           long: 120.5999976,
      //           zoom: 13,
      //         },
      //       },
      //     ]
      //   },
      //   {
      //     label: 'Cebu',
      //     value: 4,
      //     children: [
      //       {
      //         label: 'Cebu City',
      //         value: {
      //           id: 223,
      //           name: 'Cebu City, Philippines',
      //           lat: 10.3157 ,
      //           long: 123.8854,
      //           zoom: 8,
      //         },
      //       },
      //     ]
      //   }
      // ]),
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
  methods: {
    
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
  <n-card class="form" size="huge" hoverable>
    <n-flex class="logo-container">
        <img class="logo" src="/crowdcast-logo.png">
        <p class="crowdcast-title">Crowdcast</p>
    </n-flex>
    <n-space class="formInput" vertical>
      <n-flex class="loc-label">
          <p>Location</p>
          <p class="loc-question">Where do you want to go?</p>
      </n-flex>
      <n-space>
        <n-radio
          :checked="checkedValue === 'Boracay Island'"
          value="Boracay Island"
          name="basic-demo"
          @change="handleChange"
        >
          Boracay Island
        </n-radio>

        <n-radio
          :checked="checkedValue === 'Bohol'"
          value="Bohol"
          name="basic-demo"
          @change="handleChange"
        >
          Bohol
        </n-radio>

        <n-radio
          :checked="checkedValue === 'Cebu'"
          value="Cebu"
          name="basic-demo"
          @change="handleChange"
        >
          Cebu
        </n-radio>
      </n-space>
      <!-- <n-input-group>
        <n-cascader placeholder="Select location" :style="{ width: '100%' }" :options="cascaderOptions" size="large" v-model:value="value" /> 
      </n-input-group> -->
      
      <n-flex class="loc-label" :style="{paddingTop: '20px'}">
        <p>Month</p>
        <p class="loc-question">What month in 2025?</p>
      </n-flex>
      <n-input-group :style="{padding:'0px 0px 25px 0px'}">
        <n-select placeholder="Select month" :style="{ width: '100%' }" :options="selectOptions" size="large"/>
      </n-input-group>

      <n-flex class="loc-label">
        <p>Activity</p>
        <p class="loc-question">What are you planning to do?</p>
      </n-flex>
      <n-input-group>
        <n-select placeholder="Select activity" :style="{ width: '100%' }" :options="activityOptions" size="large"/>
      </n-input-group>

      <n-input-group class="btn-grp" :style="{ paddingTop: '5%' }">
        <router-link to="/forecast" #="{ navigate, href }" custom>
          <!-- <n-button type="info" size="large" :style="{ width: '50%', backgroundColor:'#81B29A'}" @click="$emit('updateMap', value), navigate">
            Forecast
          </n-button> -->
          <n-button type="info" size="large" :style="{ width: '50%', backgroundColor:'#81B29A'}" @click="navigate">
            Forecast
          </n-button>
        </router-link>
      </n-input-group>
    </n-space>
  </n-card>

</template>

<style scoped>
.form {
  padding-top: 20px;
  width: 600px;
  height:700px;
  border-radius: 25px;
}

.logo-container {
    align-items: center;
    margin-bottom: 20px;
}

.logo {
    margin-left: 70px  ;
    width: 76px;
    height: 76px; 
}

.crowdcast-title {
    font-weight: 700;
    font-size: 60px;
    line-height: 16px;
    letter-spacing: 0px;
    color: #3D405B;
    line-height: 100px;
    text-align: center;
}

.formInput {
  width: 400px;
  margin-left: 65px;
}


.loc-label {
  align-items: center;
  text-decoration-color: #3D405B;
}

.loc-label > .loc-question{
  font-size: 15px;
  font-style: italic;
  color: #A8A8A8;
}

.loc-label > p {
  font-size: 20px;
  font-weight: 600;
  color: #3D405B;
}

.btn-grp {
  justify-content: flex-end;
}

</style>
