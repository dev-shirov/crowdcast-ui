<script setup>
    import LocationForm from '../components/LocationForm.vue'
    import PHMap from '../components/PhillippineMap.vue'
    import { useTemplateRef } from 'vue'

    const mapRef = useTemplateRef('phmap')

    function mapChanged(value) {
        mapRef.value.updateMap(value)
    }
</script>

<template>
    <n-flex justify="center">
        <div class="wrapper">
            <LocationForm @update-map="mapChanged"/>
            <PHMap ref="phmap"/>
        </div>
    </n-flex>
</template>

<style scoped>
    header {
        line-height: 2.5;
    }

    @media (min-width: 1024px) {
        .wrapper {
            display: flex;
        }
    }
</style>

