<script setup>
  import { useLocationStore } from '@/store/locationStore';
  import { storeToRefs } from 'pinia';
  import { watch, ref } from 'vue';
  import Checkmark16Filled from '@vicons/fluent/Checkmark16Filled'
  import { CloseCircleSharp } from '@vicons/ionicons5';
  
  const locationStore = useLocationStore()
  const { recommendation } = storeToRefs(locationStore)
  const crowdcastSays = ref(null)
  const crowd = ref(null)
  const recos = ref([])
  const notRecos = ref([])
  
  watch(recommendation, () => {
    console.log('recommendation: ', locationStore.recommendation)
    console.log('activities: ', locationStore.recommendedActivities)
    console.log('not recommended: ', locationStore.notRecommendedActivities)
    crowdcastSays.value = locationStore.recommendation
    crowd.value = locationStore.crowds
    recos.value = locationStore.recommendedActivities
    notRecos.value = locationStore.notRecommendedActivities
  })
</script>

<template>
    <n-card>
        <n-space>
            <n-flex class="logo-container">
                <p class="crowdcast-title">CROWDCAST says...</p>
            </n-flex>
            <n-infinite-scroll style="height: 500px" :distance="10" @load="">
                <h1 class="success padding-b-2" v-if="crowd != 'High' && recommendation">NOT CROWDED</h1>
                <h1 class="danger padding-b-2" v-if="crowd == 'High' && recommendation">CROWDED</h1>
                <div>
                  <ul v-if="recommendation" v-for="item in recos">
                    <n-icon-wrapper :size="24" :border-radius="10">
                      <n-icon :size="18" :component="Checkmark16Filled"/>
                    </n-icon-wrapper>
                    <span>{{ item }}</span>
                  </ul>
                  <ul v-if="recommendation" v-for="item in notRecos">
                    <n-icon-wrapper :size="24" :border-radius="10">
                      <n-icon :size="18" :component="CloseCircleSharp"/>
                    </n-icon-wrapper>
                    <span>{{ item }}</span>
                  </ul>
                </div>
                <p v-if="recommendation" class="padding-t-2">
                    {{ crowdcastSays }}
                </p>
                <p v-else>
                  CROWDCAST's forecasting models use past weather and historical visitor data to predict weather and 
                  how many people will visit a tourist spot each month. Powered by Gemini, it can also recommend activities 
                  accordingly.CROWDCAST's forecasting models use past weather and historical visitor data to predict weather and 
                  how many people will visit a tourist spot each month. Powered by Gemini, it can also recommend activities 
                  accordingly.CROWDCAST's forecasting models use past weather and historical visitor data to predict weather and 
                  how many people will visit a tourist spot each month. Powered by Gemini, it can also recommend activities 
                  accordingly.CROWDCAST's forecasting models use past weather and historical visitor data to predict weather and 
                  how many people will visit a tourist spot each month. Powered by Gemini, it can also recommend activities 
                  accordingly.CROWDCAST's forecasting models use past weather and historical visitor data to predict weather and 
                  how many people will visit a tourist spot each month. Powered by Gemini, it can also recommend activities 
                  accordingly.CROWDCAST's forecasting models use past weather and historical visitor data to predict weather and 
                  how many people will visit a tourist spot each month. Powered by Gemini, it can also recommend activities 
                  accordingly.CROWDCAST's forecasting models use past weather and historical visitor data to predict weather and 
                  how many people will visit a tourist spot each month. Powered by Gemini, it can also recommend activities 
                  accordingly.CROWDCAST's forecasting models use past weather and historical visitor data to predict weather and 
                  how many people will visit a tourist spot each month. Powered by Gemini, it can also recommend activities 
                  accordingly.CROWDCAST's forecasting models use past weather and historical visitor data to predict weather and 
                  how many people will visit a tourist spot each month. Powered by Gemini, it can also recommend activities 
                  accordingly.CROWDCAST's forecasting models use past weather and historical visitor data to predict weather and 
                  how many people will visit a tourist spot each month. Powered by Gemini, it can also recommend activities 
                  accordingly.CROWDCAST's forecasting models use past weather and historical visitor data to predict weather and 
                  how many people will visit a tourist spot each month. Powered by Gemini, it can also recommend activities 
                  accordingly.CROWDCAST's forecasting models use past weather and historical visitor data to predict weather and 
                  how many people will visit a tourist spot each month. Powered by Gemini, it can also recommend activities 
                  accordingly.CROWDCAST's forecasting models use past weather and historical visitor data to predict weather and 
                  how many people will visit a tourist spot each month. Powered by Gemini, it can also recommend activities 
                  accordingly.CROWDCAST's forecasting models use past weather and historical visitor data to predict weather and 
                  how many people will visit a tourist spot each month. Powered by Gemini, it can also recommend activities 
                  accordingly.
                </p>
            </n-infinite-scroll>

            <n-flex class="foot-notes" :style="{paddingTop: '20px'}">
                <p>
                  CROWDCAST's forecasting models use past weather and historical visitor data to predict weather and 
                  how many people will visit a tourist spot each month. Powered by Gemini, it can also recommend activities 
                  accordingly.
                </p>
            </n-flex>
        </n-space>
    </n-card>
</template>

<style scoped>
    .n-card {
        margin-right: 20px;
        float: left;
        width: 500px;
        height: 800px;
        background-color: #F4F1DE;
    }

    .crowdcast-title {
        width: 500px;
        font-weight: 900;
        font-size: 30px;
        letter-spacing: 0px;
        color: #3D405B;
        /* line-height: 100px; */
        text-align: center;
    }

    .foot-notes {
        margin-top: 10px;
    }

    .foot-notes > p {
        color: #A8A8A8;
        text-align:justify;
        font-style: italic;
    }

    h1.success {
      color: #4eb059;
    }

    h1.danger {
      color: #d16153;
    }

    .padding-t-2 {
      padding-top: 2rem;
    }

    .padding-b-2 {
      padding-bottom: 2rem;
    }

    ul {
      text-align: left;
      margin-left: 7rem;
    }
</style>