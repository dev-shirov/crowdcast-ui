<script setup>
import LocationForm from './components/LocationForm.vue'
import PHMap from './components/PhillippineMap.vue'
import { useTemplateRef } from 'vue'

const mapRef = useTemplateRef('phmap')

function mapChanged(value) {
  mapRef.value.updateMap(value)
}

</script>

<template>
  <header>
    <div class="wrapper">
      
    </div>
  </header>

  <main>
    <LocationForm @update-map="mapChanged"/>
    <PHMap ref="phmap"/>
  </main>
</template>

<style scoped>
header {
  line-height: 2.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
