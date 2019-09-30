<template>
	<div class="home">
      <app-header></app-header>
      <div class="container">
        <app-search></app-search>
        <div class="row">
          <div class="col-sm-2">
            <app-airlines @airlineWasEdited="airlines = $event"></app-airlines>
          </div>
          <div class="col-sm-10">
            <app-flights :airlines="airlines"></app-flights>
          </div>
        </div>      
      </div>
	</div>
</template>

<script>
  	import Flights from './Flights.vue';
  	import Airlines from './Airlines.vue';
    import Header from './Header.vue';
    import Search from './Search.vue';
  	export default {
         data: function () {
            return {
              airlines: ['all']
            };
         },
         components: {
            'app-flights': Flights,
            'app-airlines': Airlines,
            'app-header': Header,
            'app-search': Search
         }
  	}
</script>

<style scoped>
    .home {
      background: #b3b3b3;
    }
    .airline-div {
      width: 20%;
    }
    .fligths-div {
      padding: 0;
      width: 80%;
    }
    .row {
      margin-top: 20px;
      width: 100%;
    }
    .container {
      width: 100%;
      margin: 0 auto;
    }
</style>