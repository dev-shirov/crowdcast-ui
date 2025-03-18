<template>
    <div id="map" style="height: 600px; width: 100%;"></div>
</template>
  
<script>
  import L from 'leaflet';
  import 'leaflet/dist/leaflet.css';
  import axios from 'axios';
import { geoJSON } from 'leaflet';
  
  export default {
    name: 'ChoroplethMap',
    data() {
      return {
        map: null,
        geojson: null,
      };
    },
    mounted() {
      this.initMap();
      this.loadGeoJSON();
    },
    methods: {
      initMap() {
        // Initialize the map centered on the Philippines
        // this.map = L.map('map').setView([14.5995, 120.9842], 5);
        // L.marker([14.5995, 120.9842]).addTo(this.map)
        //   .bindPopup('Manila, Philippines')
        //   .openPopup();
        
        this.map = L.map('map').setView([11.9674, 121.9248], 13);
        L.marker([11.9674, 121.9248]).addTo(this.map)
          .bindPopup('Boracay Island, Philippines')
          .openPopup();
       
        // Add a tile layer (OpenStreetMap)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors',
        }).addTo(this.map);
        
       
      },
      async loadGeoJSON() {
        try {
          const response = await axios.get('./philippines.geojson');
          const geojsonData = response.data;

          geojsonData.features.forEach(element => {
            if (element.properties.ISLAND3 === "Boracay Island") {
              this.geojson = L.geoJSON(element, {
                style: this.getStyle,
                onEachFeature: this.onEachFeature, 
              }).addTo(this.map);
            }
          });
          
        } catch (error) {
          console.error('Error loading GeoJSON data:', error);
        }
      },
      getStyle(feature) {
          //if (feature.properties.ISLAND3 == "Boracay Island") {
            const population = feature.properties.TOTPOP2000;
            return {
              fillColor: this.getColor(population),
              weight: 1,
              opacity: 1,
              color: 'white',
              fillOpacity: 0.7,
            };
          //}
          
      },
      getColor(population) {
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
        const popupContent = `
          Municipality: ${feature.properties.MUNICIPALI}<br>
          Place: ${feature.properties.ISLAND3}<br>
          Population: ${feature.properties.TOTPOP2000}
        `;
        layer.bindPopup(popupContent);
      },
    },
  };
  </script>
  
  <style scoped>
  #map {
    margin: 20px 0;
  }
  </style>