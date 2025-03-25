<template>
    <n-card>
        <n-space>
            <n-flex class="logo-container">
                <p class="crowdcast-title">CROWDCAST says...</p>
            </n-flex>
            <n-infinite-scroll style="height: 500px" :distance="10" @load="">
                <p>
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
        line-height: 100px;
        text-align: center;
    }

    .foot-notes {
        margin-top: 10px;
    }

    .foot-notes > p {
        text-align:justify;
        font-style: italic;
    }
</style>