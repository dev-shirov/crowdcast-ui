<template>
    <div id="map" style="height: 600px; width: 100%;"></div>
  </template>
  
  <script>
  import L from 'leaflet';
  import 'leaflet/dist/leaflet.css';
  import axios from 'axios';
  
  export default {
    name: 'ChoroplethMap',
    data() {
      return {
        map: null,
        geojson: null,
        marker: null,
      };
    },
    mounted() {
      this.initMap();
      this.loadGeoJSON();
    },
    methods: {
      initMap() {
        // Initialize the map centered on the Philippines
        this.map = L.map('map').setView([11.8166, 122.0942], 9);
  
        // Add a tile layer (OpenStreetMap)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors',
        }).addTo(this.map);
      },
      async loadGeoJSON() {
        try {
          // Fetch the GeoJSON data
          const response = await axios.get('./philippines.geojson');
          const geojsonData = response.data;
  
          // Add GeoJSON layer to the map
          this.geojson = L.geoJSON(geojsonData, {
            style: this.getStyle, // Style based on data
            onEachFeature: this.onEachFeature, // Add interactivity
          }).addTo(this.map);

        } catch (error) {
          console.error('Error loading GeoJSON data:', error);
        }
      },
      getStyle(feature) {
        // Define color based on population (or any other property)
        const population = feature.properties.TOTPOP2000;
        return {
          fillColor: this.getColor(population),
          weight: 1,
          opacity: 1,
          color: 'white',
          fillOpacity: 0.7,
        };
      },
      getColor(population) {
        // Define a color scale based on population
        return population > 25000
          ? '#800026'
          : population > 15000
          ? '#BD0026'
          : population > 10000
          ? '#E31A1C'
          : population > 5000
          ? '#FC4E2A'
          : population > 1000
          ? '#FD8D3C'
          : '#FEB24C';
      },
      onEachFeature(feature, layer) {
        // Add interactivity (e.g., popup on click)
        if (feature.properties && feature.properties.ISLAND3) {
          const popupContent = `
            <strong>${feature.properties.ISLAND3}</strong><br>
            Population: ${feature.properties.TOTPOP2000}
          `;
          layer.bindPopup(popupContent);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  #map {
    margin: 20px 0;
  }
  </style>