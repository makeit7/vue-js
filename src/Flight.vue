<template>
	<div class="row">
		<div class="info-side">
			<div class="rowTicket">
				<div class='carrier'>
					<img class="carrier_img" :src="`https://aviata.kz/static/airline-logos/80x80/`+ticket.validating_carrier+ `.png`">
					<span class="carrier_name"> {{ ticket.validating_carrier }}</span>
				</div>
				<div class='timeAstana'>
					<span class='time'> 
						<span class='date'> {{ ticket.itineraries[0][0].dep_date | getDate }} </span>
						{{ ticket.itineraries[0][0].dep_date | getTime }}
					</span>
					<span class="layovers">
						<span> 5 hour </span>
						<span class="layovers-line"></span>
						<span class="layover-through"> through Uralsk </span>
					</span>
					<span class='time'>
						<span class='date'>{{ ticket.itineraries[0][0].arr_date | getDate }}</span>
						{{ ticket.itineraries[0][0].arr_date | getTime }}
					</span>
				</div>
			</div>
			<div class="ticketFooter">
				<a class="underlineTicket" href="">Детали Перелета</a> 
				<a class="underlineTicket" href="">Условия Тарифа</a> 
				<span v-if="ticket.refundable"> невозвратный </span>
			</div>
		</div>
		<div class="price-side">
			<div>
				<center><span class="price"> {{ ticket.price }} &#8376; </span></center>
			</div>
			<div class="btnSelectWrapper">
				<button class="btn btnSelect" type="submit"> Выбрать </button>
			</div>
			<div>
				<center class="add-info"><span>Цена за всех пассажиров</span></center>
			</div>
			<div class="add-info-wrapper">
				<span class="add-info">Нет багажа</span> 
				<button class="btn btn-sm btnAdd">+ Добавить багаж</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['ticket'],
        data: function () {
            return {
              
            };
        },
        filters: {
	  		getDate: function (value) {
			    if (!value) return ''
			    value = value.toString().split(' ')[0]
			    return value;
			},
			getTime: function (value) {
				if (!value) return ''
			    value = value.toString().split(' ')[1]
			    return value;
			}
		}
  	}
</script>

<style scoped>
	.add-info {
		font: 12px arial, sans-serif;
	}
	.add-info-wrapper {
		width: 90%;
		margin: 0 auto;
	}
	.price-side {
		width: 25%;
		background:  #f2f2f2;
		border-radius: 0px 10px 10px 0px;
		box-shadow: 0 4px 2px -2px gray;
	}
	.price {
		 font: 22px arial, sans-serif;
		 color: black;
	}
	.btnSelectWrapper {
		display: flex;
	}
	.layover-through {
		color: #ff8533
	}
	.info-side {
		width: 62.5%;
		background: white;
		border-radius: 10px 0px 0px 10px;
		box-shadow: 0 4px 2px -2px gray;
	}
	.row {
		margin-left: 15px;
		margin-bottom: 15px;
	}
	.underlineTicket {
		padding: 10px;
		color: #b3b3ff;
		text-decoration-style: dashed;
	}
	.rowTicket {
		width: 100%;
	    margin-bottom: 16px;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    -webkit-box-align: center;
	    -ms-flex-align: center;
	    align-items: center;
	    -webkit-box-pack: left;
	    -ms-flex-pack: left;
	    justify-content: left;
	}
	span {
		color: #bfbfbf;
	}
	.ticketFooter {
		font-size: 16px;
	    font-weight: bold;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    -webkit-box-pack: left;
	    -ms-flex-pack: left;
	    justify-content: left;
	    -webkit-box-align: center;
	    -ms-flex-align: center;
	    align-items: center;
	    position: relative;
	}
	.carrier {
		width: 22%;
	    padding-right: 8px;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    -webkit-box-align: center;
	    -ms-flex-align: center;
	    align-items: center;
	    -webkit-box-pack: left;
	    -ms-flex-pack: left;
	    justify-content: left;
	}
	.carrier_name {
		font-size: 14px;
    	color: #000000;
    	font-weight: 600;
	}
	.carrier_img {
		width: 21px;
	    height: 21px;
	    margin-right: 8px;
	    vertical-align: middle;
	}
	.time {
		color: #212529;
	    font-size: 24px;
	    text-align: left;
	    padding: 0 8px;
	    -webkit-box-flex: 0;
	    -ms-flex: 0 0 105px;
	    flex: 0 0 105px;
	    z-index: 2;
	    display: block;
	    width: 105px;
	}
	.date {
		text-transform: lowercase;
	    font-size: 12px;
	    display: block;
	    margin-bottom: 4px;
	}
	.timeAstana {
		width: 75%;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	}
	.btnSelect {
		background: #55bb06;
		color: white;
		margin: 0 auto;
	}
	.btnAdd {
		background: #cceeff;
		color: #3333cc;
		margin: 0 auto;
		font-size: 12px;
	}

	.layovers {
		color: #212529;
	    position: relative;
	    display: block;
	    height: 1px;
	    z-index: 1;
	    text-align: center;
	    padding-right: 16px;
	    -webkit-box-flex: 0;
	    -ms-flex: 0 0 180px;
	    flex: 0 0 180px;
	    width: 180px;
	}

	.layovers-line {
		position: relative;
	    display: block;
	    width: 100%;
	    height: 1px;
	    background: #98A6B3;
	    z-index: 1;
	    margin: 4px 0;
	}
</style>