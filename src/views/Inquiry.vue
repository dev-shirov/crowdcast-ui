<script setup>
    import LocationForm from '../components/LocationForm.vue'
    import { useTemplateRef } from 'vue'
    const mapRef = useTemplateRef('phmap')
    function mapChanged(value) {
        mapRef.value.updateMap(value)
    }
</script>

<template>
    <div class="about">
        <LocationForm @update-map="mapChanged"/>
        <br>
        <router-link to="/">Back to Home</router-link>
    </div>
</template>
  

  
<style scoped>
    .about {
        text-align: center;
        margin-top: 50px;
    }
</style>