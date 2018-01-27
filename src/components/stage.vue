<template>
  <section class="leaflet_map__stage">
  	<controls></controls>

  	<leafmap></leafmap>
  </section>
</template>

<script>
import leafmap from './leafmap'
import controls from './controls'
export default {
  name: 'stage',
  components: { controls, leafmap },
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
