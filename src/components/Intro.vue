<script setup>
import { ArrowForwardSharp as ArrowRight } from '@vicons/ionicons5'
</script>

<template >
    <n-card class="form" hoverable>
        <n-flex class="logo-container">
            <img class="logo" src="/crowdcast-logo.png">
            <p class="crowdcast-title">Crowdcast</p>
        </n-flex>
        <div class="intro-text">
            Are you planning to visit <strong>Boracay, Bohol or Cebu</strong> this <br>
            2025 but don't want to go when there's too many <br> people?
            
            <br><br>
            
            Do you want to know when is the best time to <strong>hike, surf, go on a staycation</strong> or
            enjoy the <strong>night life?</strong>       
            
            <br><br>
            
            <strong>CROWDCAST</strong> can help you plan your trip!
            
            <br><br>

            <n-flex class="nav-btn">
                <p>Let's try it!!</p>
                <router-link to="/inquiry" #="{ navigate, href }" custom>
                    <n-float-button type="primary" position="relative" height="60px" width="60px" @click="navigate">
                        <n-icon>
                            <ArrowRight />
                        </n-icon>
                    </n-float-button>
                </router-link>
            </n-flex>

            <br><br><br>
            <div class="foot-note">
                (CROWDCAST’s forecasting model uses data such as historical visitor data, local events, weather, transportation and social 
                media trends to predict the number of people that will visit a tourist destination for a particular month.)
            </div>
        </div>
    </n-card>
</template>

<style scoped>
.n-card {
    padding-top: 20px;
    width: 600px;
    height:700px;
    border-radius: 25px;
    background-color: #F4F1DE;
}

.logo-container {
    align-items: center;
    margin-bottom: 20px;
}

.logo {
    margin-left: 70px  ;
    /* margin: 20px; */
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

.intro-text {
    font-size: 20px;
    text-align: justify;
    text-justify:newspaper;
    width: 500px;
    height: 192px;
    margin: auto;
    padding-bottom:20px;
}

.nav-btn {
    float: right;
    align-items: center;
    font-size: 20px;
}

.n-float-button {
    background-color: #81B29A;
}

.foot-note {
    font-style: italic;
    font-size: 18px;
}






</style>