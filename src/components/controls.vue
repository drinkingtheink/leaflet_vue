<template>
	<section class="leaflet_map__controls">
		<h3>My Career >> </h3>

		<div class="leaflet_map__controls--stops">
			<article 
				v-for="stop in stop_points" 
				@click="broadcastCoords(stop)"
				class="leaflet_map__controls--stop"
				:class="{ active : stop.active }"
			>
				<span class="index">{{ stop.order }}</span>

				<p>
					<span class="index">{{ stop.title }} </span>
					<span class="meta">{{ stop.timeframe }} | {{ stop.role }}</span>
				</p>
			</article>
		</div>
	</section>
</template>

<script>
import {stop_points} from '../static/stop_points';
import {EventBus} from './event_bus.js';
import _ from 'lodash';
export default {
  name: 'controls',
  data() {
    return {
      stop_points: _.reverse(stop_points)
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
	background-color: rgba(255,255,255,.5);
	color: $blue;
	display: flex;

	.index {

	}

	p {
		margin: 0;
		padding-left: 1rem;
	}

	.meta {
		display: block;
		font-size: .75rem;
	}

	&:hover {
		cursor: pointer;
		background-color: rgba(255,255,255,1);
	}

	&.active {
		opacity: 1;
		background-color: rgba(255,255,255,1);

		.index,
		p {
			font-weight: 700;
		}

		.meta {
			color: $yellow;
		}
	}
}
</style>