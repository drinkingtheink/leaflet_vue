<template>
  <v-map :zoom="zoom" :center="center">
    <v-tilelayer :url="url" :attribution="attribution"></v-tilelayer>
    <v-marker :lat-lng="marker"></v-marker>
  </v-map>
</template>

<script>
export default {
  name: 'leafmap',
  data() {
    return {
      zoom: 13,
      center: [47.413220, -1.219482],
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(47.413220, -1.219482),
    }
  }
}
</script>

<style lang="scss">
.vue2leaflet-map {
  z-index: 1;
}
</style>
