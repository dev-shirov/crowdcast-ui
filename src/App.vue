<script setup>
import LocationForm from './components/LocationForm.vue'
import TheWelcome from './components/TheWelcome.vue'
import PHMap from './components/PhillippineMap.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <LocationForm />
    </div>
  </header>

  <main>
    <!-- <TheWelcome /> -->
    <PHMap />
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
  /* header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  } */
}
</style>
