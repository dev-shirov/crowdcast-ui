

<script lang="ts">
    import { useLocationStore } from '@/store/locationStore';
    import { useLocationService } from '@/services/locationService';
    import { defineComponent, ref } from 'vue';

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
            const locationService = useLocationService()
            const checkedValueRef = ref<string | null>(null)
            const activityMonth = ref(locationStore.selectedMonth)
            const activityName = ref(locationStore.selectedActivity)
            
            switch(locationStore.name) {
              case 'Boracay Island, Philippines':
                checkedValueRef.value = 'Boracay Island'
                break
              case 'Bohol, Philippines':
                checkedValueRef.value = 'Bohol'
                break
              case 'Cebu City, Philippines':
                checkedValueRef.value = 'Cebu'
                break
              default:
                checkedValueRef.value = ''
            }

            return {
                locationStore,
                locationService,
                checkedValue: checkedValueRef,
                activityMonth,
                activityName,
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
          forecast() {
            this.locationService.recommend(this.checkedValue, this.activityMonth, this.activityName)
            .then((response) => {
              console.log(response)
              this.locationStore.recommendation = response.recommendation[0]
              this.locationStore.recommendedActivities = response.recommended
              this.locationStore.notRecommendedActivities = response.nonRecommended
              this.locationStore.crowds = response.crowds
            })
          }
        }
    })
</script>
<template>
    <div>
        <n-card>
            
            <n-grid x-gap="12" :cols="4">
                <n-gi>
                    <n-flex class="loc-label">
                        <p>Location</p>
                    </n-flex>
                    <n-space class="radioGrp">
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
                    <div class="light-green" />
                </n-gi>
                
                <n-gi>
                    <n-flex class="loc-label">
                        <p>Month</p>
                    </n-flex>

                    <n-space>
                        <n-input-group :style="{padding:'0px 0px 25px 0px'}">
                            <n-select placeholder="Select month" :style="{ width: '280px' }" :options="selectOptions" size="large" v-model:value="activityMonth"/>
                        </n-input-group>
                    </n-space>
                </n-gi>

                <n-gi>
                    <n-flex class="loc-label">
                        <p>Activity</p>
                    </n-flex>

                    <n-input-group>
                        <n-select placeholder="Select activity" :style="{ width: '100%' }" :options="activityOptions" size="large" v-model:value="activityName"/>
                    </n-input-group>
                </n-gi>

                <n-gi>
                    <n-button type="info" size="large" @click="forecast">
                        Forecast
                    </n-button>
                </n-gi>

            </n-grid>
        </n-card>
    </div>
</template>

<style scoped>
    .n-card {
        width: 100%;
        margin-bottom: 15px;
        border-radius: 10px;
        background-color: #F4F1DE;
    }

    .loc-label {
        align-items: center;
        text-decoration-color: #3D405B;
        margin-bottom: 2px;
    }

    .loc-label > p {
        font-size: 20px;
        font-weight: 600;
        color: #3D405B;
    }

    .radioGrp {
        padding-top: 10px;
    }

    .n-button {
        width: 100%;
        background-color: #81B29A;
        margin-top: 34px;
    }
</style>