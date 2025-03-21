<template>
    <div id="map" style="height: 800px; width: 900px;"></div>
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
        mapPin: null,
        geojson: null,
      };
    },
    mounted() {
      this.initMap();
    },
    expose: ['updateMap'],
    methods: {
      initMap() {
        // Initialize the map centered on the Philippines
        this.map = L.map('map').setView([14.5995, 120.9842], 5);
        this.mapPin = L.marker([14.5995, 120.9842]).bindPopup('Manila, Philippines');
        this.mapPin.addTo(this.map).openPopup();
        // Add a tile layer (OpenStreetMap)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors',
        }).addTo(this.map);
      },
      async loadGeoJSON(location) {
        try {
          const response = await axios.get('./philippines.geojson');
          const geojsonData = response.data;
          geojsonData.features.forEach(element => {
            if (element.properties.OBJECTID === location.id) {
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
      updateMap(location) {
        // TODO: update based on the pased location
        this.loadGeoJSON(location);
        this.map.flyTo([location.lat, location.long], location.zoom);
        this.mapPin.removeFrom(this.map);
        this.mapPin = L.marker([location.lat, location.long]).bindPopup(location.name);
        this.mapPin.addTo(this.map).openPopup();
      }
    },
  };
  </script>
  
  <style scoped>
  #map {
    margin: 20px 0;
  }
  </style>