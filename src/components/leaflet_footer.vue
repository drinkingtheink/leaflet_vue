<template>
    <footer class="leaflet_map__footer">
        Footer
    </footer>
</template>

<script>
  import {stop_points} from '../static/stop_points';
  import {EventBus} from './event_bus.js';
  import _ from 'lodash';
  export default {
    name: 'leaflet_footer',
    data() {
      return {
      }
    }
  }
</script>

<style lang="scss">
@import '../sass/mixins';
@import '../sass/_palette.scss';

.leaflet_map__footer {
    @include bg_texture;
    position: absolute;
    bottom: 0;
    width: 100vw;
    height: 3rem;
    z-index: 100;
    border-top: 3px solid $yellow;
}

</style>