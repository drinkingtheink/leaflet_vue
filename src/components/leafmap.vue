<template>
  <v-map :zoom="zoom" :center="center">
    <v-tilelayer :url="url" :attribution="attribution"></v-tilelayer>
    <v-marker :lat-lng="marker"></v-marker>
  </v-map>
</template>

<script>
import {EventBus} from './event_bus.js';
const defaultCoords = [30.4582658,-97.7523362];
export default {
  name: 'leafmap',
  data() {
    return {
      zoom: 12,
      center: defaultCoords,
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(defaultCoords),
      defaultCoords: defaultCoords
    }
  },
  mounted() {
    EventBus.$on('broadcast-coords', coords => {
      this.center = coords;
      this.marker = L.latLng(coords)
    });
  }
}
</script>

<style lang="scss">
$yellow: #FFBC23;
$orange: #E38517;
$blue: #0E6875;

.vue2leaflet-map {
  z-index: 1;
}
</style>
