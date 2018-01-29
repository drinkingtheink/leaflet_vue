<template>
	<section class="leaflet_map__controls">
		<h3>My Career >> </h3>

		<div class="leaflet_map__controls--stops">
			<p 
				v-for="stop in stop_points" 
				@click="broadcastCoords(stop)"
				class="leaflet_map__controls--stop"
				:class="{ active : stop.active }"
			>
				{{ stop.title }} <span class="timeframe">({{ stop.timeframe }})</span>
			</p>
		</div>
	</section>
</template>

<script>
import stop_points from '../static/stop_points';
import {EventBus} from './event_bus.js';
export default {
  name: 'controls',
  data() {
    return {
      stop_points: stop_points
    }
  },
  methods: {
  	broadcastCoords(stop) {
  		this.stop_points.forEach( stop => {
  			stop.active = false;
  		})
  		stop.active = true;
  		EventBus.$emit('broadcast-coords', stop.coords);
  	}
  }
}
</script>

<style lang="scss">
$yellow: #FFBC23;
$orange: #E38517;
$blue: #0E6875;

.leaflet_map__controls {
	display: inline-block;
	width: 25vw;
	position: absolute;
	top: 1rem;
	left: 5%;
	z-index: 100;

	h3 {
		padding: 1rem .5rem;
		color: $yellow;
		background: $blue;
		margin: 0;
	}
}

.leaflet_map__controls--stop {
	padding: 1rem .5rem;
	margin: 0;
	transition: all .2s;
	opacity: .75;
	background-color: rgba(255,255,255,.25);
	color: $orange;

	.timeframe {
		display: block;
		font-size: .75rem;
	}

	&:hover {
		cursor: pointer;
		background-color: rgba(255,255,255,1);
	}

	&.active {
		color: $blue;
		opacity: 1;
		background-color: rgba(255,255,255,1);

		p {
			font-weight: bold;
		}
	}
}
</style>