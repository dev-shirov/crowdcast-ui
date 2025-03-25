<script setup>
    import LocationForm from '../components/LocationForm.vue'
    import PHMap from '../components/PhillippineMap.vue'
</script>

<template>
    <n-flex justify="center">
        <div class="wrapper">
            
            <LocationForm/>
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

