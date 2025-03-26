<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useLocationStore } from '@/store/locationStore'

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
  zoom: 12,
}


export default defineComponent({
  setup() {
    const locationStore = useLocationStore()
    const checkedValueRef = ref<string | null>(null)
    
    if(locationStore.name)
      checkedValueRef.value = locationStore.name

    return {
      locationStore,
      checkedValue: checkedValueRef,
      showRecommendation: true,
      handleChange(e: Event) {
        checkedValueRef.value = (e.target as HTMLInputElement).value
        if (checkedValueRef.value === 'Boracay Island') {
          console.log(boracayInfo);
          locationStore.setDetails(
            boracayInfo.id, 
            boracayInfo.name, 
            boracayInfo.lat, 
            boracayInfo.long, 
            boracayInfo.zoom
          )
        }

        if (checkedValueRef.value === 'Bohol') {
          console.log(boholInfo);
          locationStore.setDetails(
            boholInfo.id, 
            boholInfo.name, 
            boholInfo.lat, 
            boholInfo.long, 
            boholInfo.zoom
          )
        }

        if (checkedValueRef.value === 'Cebu') {
          console.log(cebuInfo);
          locationStore.setDetails(
            cebuInfo.id, 
            cebuInfo.name, 
            cebuInfo.lat, 
            cebuInfo.long, 
            cebuInfo.zoom
          )
        }
      },
      selectOptions: ref([
        {
          label: 'January',
          value: 1
        },
        {
          label: 'February',
          value: 2
        },
        {
          label: 'March',
          value: 3
        },
        {
          label: 'April',
          value: 4
        },
        {
          label: 'May',
          value: 5
        },
        {
          label: 'June',
          value: 6
        },
        {
          label: 'July',
          value: 7
        },
        {
          label: 'August',
          value: 8
        },
        {
          label: 'September',
          value: 9
        },
        {
          label: 'October',
          value: 10
        },
        {
          label: 'November',
          value: 11
        },
        {
          label: 'December',
          value: 12
        },
      ]),
      activityOptions: ref([
        {
          label: 'Hiking',
          value: 'Hiking'
        },
        {
          label: 'Surfing',
          value: 'Surfing'
        },
        {
          label: 'Staycation',
          value: 'Staycation'
        },
        {
          label: 'Nightlife',
          value: 'Nightlife'
        },
      ])
    }
  },
  methods: {
    selectMonth(value) {
      this.locationStore.selectedMonth = value
    },
    selectActivity(value) {
      this.locationStore.selectedActivity = value
    }
  }
})
</script>

<template>
  <n-flex>
    <div class="guy"><img src="../assets/Guy.svg"/></div>
    <n-card class="form" size="huge" hoverable>
      <n-flex class="logo-container">
          <img class="logo" src="/crowdcast-logo.png">
          <p class="crowdcast-title">Crowdcast</p>
      </n-flex>
<<<<<<< HEAD
      <n-space class="formInput" vertical>
        <n-flex class="loc-label">
            <p>Location</p>
            <p class="loc-question">Where do you want to go?</p>
        </n-flex>
        <n-space>
            <n-radio
              :checked="checkedValue === 'Boracay Island, Philippines'"
              value="Boracay Island, Philippines"
              name="basic-demo"
              @change="handleChange"
            >
              Boracay Island
            </n-radio>

            <n-radio
              :checked="checkedValue === 'Bohol, Philippines'"
              value="Bohol, Philippines"
              name="basic-demo"
              @change="handleChange"
            >
              Bohol
            </n-radio>

            <n-radio
              :checked="checkedValue === 'Cebu City, Philippines'"
              value="Cebu City, Philippines"
              name="basic-demo"
              @change="handleChange"
            >
              Cebu
            </n-radio>
        </n-space>
        
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
            <n-button type="info" size="large" :style="{ width: '50%', backgroundColor:'#81B29A'}" @click="navigate">
              Forecast
            </n-button>
          </router-link>
        </n-input-group>

        <n-flex class="foot-notes" :style="{paddingTop: '20px'}">
          <p>
            CROWDCAST's forecasting models use past weather and historical visitor data to predict weather and 
            how many people will visit a tourist spot each month. Powered by Gemini, it can also recommend activities 
            accordingly.
          </p>
        </n-flex>
      </n-space>
    </n-card>
    <div class="woman"><img src="../assets/Woman.svg"/></div>
  </n-flex>

=======
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
      
      <n-flex class="loc-label" :style="{paddingTop: '20px'}">
        <p>Month</p>
        <p class="loc-question">What month in 2025?</p>
      </n-flex>
      <n-input-group :style="{padding:'0px 0px 25px 0px'}">
        <n-select placeholder="Select month" :style="{ width: '100%' }" :options="selectOptions" size="large" @change="selectMonth"/>
      </n-input-group>

      <n-flex class="loc-label">
        <p>Activity</p>
        <p class="loc-question">What are you planning to do?</p>
      </n-flex>
      <n-input-group>
        <n-select placeholder="Select activity" :style="{ width: '100%' }" :options="activityOptions" size="large" @change="selectActivity"/>
      </n-input-group>

      <n-input-group class="btn-grp" :style="{ paddingTop: '5%' }">
        <router-link to="/forecast" #="{ navigate, href }" custom>
          <n-button type="info" size="large" :style="{ width: '50%', backgroundColor:'#81B29A'}" @click="navigate">
            Forecast
          </n-button>
        </router-link>
      </n-input-group>

      <n-flex class="foot-notes" :style="{paddingTop: '20px'}">
        <p>
          CROWDCAST's forecasting models use past weather and historical visitor data to predict weather and 
          how many people will visit a tourist spot each month. Powered by Gemini, it can also recommend activities 
          accordingly.
        </p>
      </n-flex>
    </n-space>
  </n-card>
>>>>>>> b95e4937dbe606c0228bbb5e9b656d54433bb81b

</template>

<style scoped>
.form {
  padding-top: 20px;
  width: 550px;
  height:700px;
  border-radius: 25px;
  background-color: #F4F1DE;
}

.logo-container {
    align-items: center;
    margin-bottom: 20px;
}

.logo {
    margin-left: 40px;
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
  margin-left: 40px;
}

.n-space {
  justify-content: space-between !important;
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

.foot-notes > p {
  color: #A8A8A8;
  text-align:justify;
  font-style: italic;
}

.guy {
    margin-right: 30px;
}

.woman {
    margin-top: 400px;
}
</style>
