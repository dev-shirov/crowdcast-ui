<script setup>
    import PHMap from '../components/PhillippineMap.vue'
    import HForm from '../components/HorizontalForm.vue'
    import RecoView from '../components/Recommendation.vue'
    import LogoBanner from '../components/LogoBanner.vue'
</script>

<template>
    <n-flex justify="">
        <LogoBanner />
    </n-flex>
    <HForm />
    <n-flex justify="center">
        <div class="wrapper">
            <RecoView />
            <PHMap/>
        </div>
    </n-flex>
</template>

<style scoped>
    @media (min-width: 1024px) {
        .wrapper {
            display: flex;
        }
    }
</style>

