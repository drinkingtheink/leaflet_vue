<template>
	<section class="leaflet_map__controls">
		<h4>
			<img
			  src="../img/profile.png"
			  alt="Jason M. Harrison"
			/> All career adventures take place in beautiful Austin, TX.
		</h4>

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
	@import '../sass/mixins';
    @import '../sass/palette';

	.leaflet_map__controls {
		display: inline-block;
		width: 25vw;
		position: absolute;
		top: 1.5rem;
		left: 5%;
		z-index: 100;

		h4 {
			@include bg_texture;
			font-size: 1rem;
			font-weight: 300;
			padding: 1rem;
			color: $yellow;
			border-top: 3px solid $yellow;
			margin: 3rem 0 0 0;
			position: relative;

		}

		img {
			max-width: 5rem;
			border-radius: 50%;
			border: 3px solid $yellow;
			position: absolute;
			top: -4rem;
			left: 0;
			right: 0;
			margin: auto
		}
	}

	.leaflet_map__controls--stop {
		padding: 1rem .5rem;
		margin: 0;
		transition: all .2s;
		background-color: rgba(255,255,255,.75);
		color: $blue;
		display: flex;
		position: relative;

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

			&::after {
				left: 100%;
				top: 50%;
				border: solid transparent;
				content: " ";
				height: 0;
				width: 0;
				position: absolute;
				pointer-events: none;
				border-left-color: $blue;
				border-width: 15px;
				margin-top: -15px;
			}
		}
	}
</style>