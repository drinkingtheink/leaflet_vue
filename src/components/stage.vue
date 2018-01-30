<template>
  <section class="leaflet_map__stage">
  	<controls></controls>

  	<leafmap></leafmap>

    <leaflet_footer></leaflet_footer>
  </section>
</template>

<script>
import leafmap from './leafmap'
import controls from './controls'
import leaflet_footer from './leaflet_footer'
export default {
  name: 'stage',
  components: { controls, leafmap, leaflet_footer },
  data() {
    return {
      
    }
  }
}
</script>

<style lang="scss">
.leaflet_map__stage {
	height: 100vh;
	width: 100vw;
}
</style>
