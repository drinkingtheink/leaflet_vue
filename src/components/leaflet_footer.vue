<template>
    <footer class="leaflet_map__footer">
        <a :href="repo_link" target="_blank" alt="Leaflet_Vue Project">> Project Repo</a>
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
          repo_link: 'https://github.com/drinkingtheink/leaflet_vue'
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

    a {
        color: $yellow;
        text-decoration: none;
        display: inline-block;
        margin: 0 auto;
        width: 50vw;
    }
}

</style>