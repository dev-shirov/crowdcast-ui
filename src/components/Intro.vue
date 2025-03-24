<script setup>
import { ArrowForwardSharp as ArrowRight } from '@vicons/ionicons5'
</script>

<template >
    <n-card class="form" size="medium" hoverable>
        <template #cover>
            <img class="n-card-img-banner" src="/crowdcast-banner.png">
        </template>
        <n-divider />
        <p class="intro-text">
            Are you planning to visit <strong>Boracay, Bohol or Cebu</strong> this <br>
            2025 but don't want to go when there's too many <br> people?
            <br><br>
            Do you want to know when is the best time to <strong>hike, surf, go on a staycation</strong> or
            enjoy the <strong>night life?</strong>       
            <br><br>
            <strong>CROWDCAST</strong> can help you plan your trip!
            <br>
            <br>
        </p>
        <n-flex class="nav-btn">
            <p :style="{paddingTop: '10px', fontSize: 'medium'}">Let's try it!!</p>
            <router-link to="/inquiry" #="{ navigate, href }" custom>
                <n-float-button type="primary" position="relative" @click="navigate">
                    <n-icon>
                        <ArrowRight />
                    </n-icon>
                </n-float-button>
            </router-link>
        </n-flex>
        <br>
    </n-card>
</template>

<style scoped>
.n-card {
    padding-top: 20px;
    width: 450px;
    height:500px;
}

.intro-text {
    font-size: medium;
    text-align: justify;
    text-justify:newspaper;
}

.intro-text > strong  {
    font-size: medium;
    font-weight: 600;
    text-align: justify;
    text-justify: newspaper;
}

.nav-btn {
    float: right;
}
</style>