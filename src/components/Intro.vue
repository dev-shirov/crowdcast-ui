<script setup>
import { ArrowForwardSharp as ArrowRight } from '@vicons/ionicons5'
</script>

<template >

    <n-flex>
        <div class="guy"><img src="../assets/Guy.svg"/></div>
        <n-card class="form" size="huge" hoverable>

            <n-space>
                <n-flex class="logo-container">
                    <img class="logo" src="/crowdcast-logo.png">
                    <p class="crowdcast-title">Crowdcast</p>
                </n-flex>
                <n-space class="formInput" vertical>
                    <p>
                        Are you planning to visit <p class="textImportant">Boracay, Bohol or Cebu</p> this
                        2025 but don't want to go when there's too many people?
                    </p>
                    <br>
                    <p>
                        Do you want to know when is the best time to <p class="textImportant">hike, surf, go on a staycation or
                        enjoy the night life?</p>      
                    </p>
                    <br>

                    <p>
                        <p class="textImportant">CROWDCAST</p> can help you plan your trip!
                    </p>
                    

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



                    <n-flex class="foot-notes" :style="{paddingTop: '20px'}">
                        <p>
                        CROWDCAST's forecasting models use past weather and historical visitor data to predict weather and 
                        how many people will visit a tourist spot each month. Powered by Gemini, it can also recommend activities 
                        accordingly.
                        </p>
                    </n-flex>
                </n-space>

                
            </n-space>
        </n-card>
        <div class="woman"><img src="../assets/Woman.svg"/></div>
    </n-flex>
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
    text-align: center;
}

.formInput {
  width: 400px;
  margin-left: 40px;
  font-size: 18px;
  text-align: justify;
}

.textImportant {
    font-weight: 600;
    display:inline;
}

.nav-btn {
    align-items: center;
    float:inline-end;
}

.n-float-button {
    background-color: #81B29A;
}

.foot-notes > p {
    color: #A8A8A8;
    font-size: 14px;
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