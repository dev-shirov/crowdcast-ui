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

  <n-flex justify="center">
    <div class="wrapper">
      <LocationForm @update-map="mapChanged"/>
      <PHMap ref="phmap"/>
    </div>

  </n-flex>
       

  <!-- <main>
  </main> -->
</template>

<style scoped>
header {
  line-height: 2.5;
}

@media (min-width: 1024px) {
  .wrapper {
    display: flex;
    /* place-items: center; */
    /* padding-right: calc(var(--section-gap) / 2); */
  }
}
</style>
