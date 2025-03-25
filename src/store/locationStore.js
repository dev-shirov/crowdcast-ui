import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLocationStore = defineStore('location', () => {
  // Reactive state
  const id = ref(0)
  const name = ref('')
  const latitude = ref(0)
  const longitude = ref(0)
  const zoom = ref(0)

  // Actions
  function setDetails(id, name, latitude, longitude, zoom) {
    this.id = id
    this.name = name
    this.latitude = latitude
    this.longitude = longitude
    this.zoom = zoom
  }

  return { 
    id, 
    name, 
    latitude, 
    longitude, 
    zoom ,
    setDetails
  }
})