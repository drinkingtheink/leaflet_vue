// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import stage from './components/stage'
import leafmap from './components/leafmap'
import controls from './components/controls'
import leaflet_footer from './components/leaflet_footer'

Vue.config.productionTip = false

import Vue2Leaflet from 'vue2-leaflet';

Vue.component('v-map', Vue2Leaflet.Map);
Vue.component('v-tilelayer', Vue2Leaflet.TileLayer);
Vue.component('v-marker', Vue2Leaflet.Marker);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { stage, controls, leafmap, leaflet_footer },
  template: '<stage/>'
})
