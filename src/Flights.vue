<template>
	<div class="flights-inner">
		<flight v-for="ticket in tickets" :ticket="ticket"></flight>
	</div>
</template>

<script>	
import MY_JSON from './data/results.json';
import Flight from './Flight.vue';

	export default {
		myJson: MY_JSON,
		props: ['airlines'],
		components: {
			'flight': Flight
		},
		data: function() {
			return {
				tickets: []
			};
		},
		methods: {
		},
		created: function() {
			this.tickets = [];
			this.tickets = this.$options.myJson.flights;
			return this.tickets;
		},
		beforeUpdate: function() {
			this.tickets = [];
			if (this.airlines.length==1 && this.airlines[0]=='all') {
				this.tickets = this.$options.myJson.flights;
				return this.tickets;
			}
			else if ((this.airlines.length>1) || (this.airlines.length>0 && this.airlines[0]!='all')) {
				var inputs = document.getElementById("all");
				inputs.indeterminate = true;
			}
			var k = 0;
            for (var i = 0; i < this.$options.myJson.flights.length; i++) {
            	for (var j = 0; j < this.airlines.length; j++) {
            		if (this.airlines[j]==this.$options.myJson.flights[i].validating_carrier)
            		this.tickets[k++] = this.$options.myJson.flights[i];
            	}
            }
            return this.tickets;
		},
		watch: {
		  	airlines: function (newAirlines, oldAirlines) {
      			this.tickets = [];
      			if (this.airlines.length==1 && this.airlines[0]=='all') {
					this.tickets = this.$options.myJson.flights;
					return this.tickets;
				}
				else if ((this.airlines.length>1) || (this.airlines.length>0 && this.airlines[0]!='all')) {
					var inputs = document.getElementById("all");
					inputs.indeterminate = true;
				}
				var k = 0;
	            for (var i = 0; i < this.$options.myJson.flights.length; i++) {
	            	for (var j = 0; j < newAirlines.length; j++) {
	            		if (newAirlines[j]==this.$options.myJson.flights[i].validating_carrier)
	            		this.tickets[k++] = this.$options.myJson.flights[i];
	            	}
	            }
	            return this.tickets;
			}
		}
	}
</script>

<style scoped>
	.flights-inner {
		width: 100%;
	}
</style>