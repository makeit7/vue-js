<template>
	<div class="side-bar">
		<div class="form-group airlines main-form">
			<h6>Авиакомпании</h6>
			<ul>
				<li>
					<label for="all">
						<input type="checkbox"
						id="all"
						value="all"
						v-model="checkedAirlines"
						@change="editedAirlinesAll"
						class="checkmark"> 
						  Все	
					</label>
				</li>
				<li v-for="(value, key) in $options.myJson.airlines">
					<label :for="key">
						 <input type="checkbox" 
						 :id="key"
						 :value="key"
						 class="checkmark"
						 @change="editedAirlines"
						 v-model="checkedAirlines"> 
						 {{ value }}
					</label>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>

import MY_JSON from './data/results.json';

	export default {
		myJson: MY_JSON,
		data: function() {
			return {
				checkedAirlines: ['all']
			};
		},
		methods: {
			editedAirlines() {
				console.log(this.checkedAirlines);
				this.$emit('airlineWasEdited', this.checkedAirlines);
			},
			editedAirlinesAll() {
				if (document.getElementById("all").checked) {
					console.log(document.getElementById("all").checked);
					console.log("first");
					this.checkedAirlines = ['all'];
				} else if (!document.getElementById('all').checked) {
					console.log(document.getElementById("all").checked);
					console.log("second");
					this.checkedAirlines = [];
				}
				console.log("all");
				console.log(this.checkedAirlines);
				this.$emit('airlineWasEdited', this.checkedAirlines);
			}
		}
	}
</script>

<style scoped>
	.main-form {
		padding-left: 4px;
		font-size: 13px;
	}
	ul {
		padding-left: 0px;
	}
	.airlines {
		background: #f2f2f2;
		border-radius: 10px;
	}
	input {
		cursor: default;
		width: 0;
		height: 0;
	}
	.checkmark {
		-webkit-appearance: none;
		width: 12px;
	    height: 12px;
	    display: block;
	    float: left;
	    margin: 2px 12px 2px 0;
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    border: 1px solid #e1e1e1;
	    border-radius: 2px;
	    background: #fff;
	    -webkit-transition: all .1s ease-in-out;
	    transition: all .1s ease-in-out;
	}

	.checkmark:checked {
		background: url("./data/checked.png") 50% 50% no-repeat #55bb06;
	    background-size: 8px 8px;
	    border: 1px solid #55bb06;
	}

	.checkmark:indeterminate {
		background: url("./data/inter.png") #fff!important;
    	border: 1px solid #55bb06!important;
	}
</style>