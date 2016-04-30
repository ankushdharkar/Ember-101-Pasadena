import Ember from 'ember';

export default Ember.Controller.extend({

	isEverythingShown: true,

	stocksArr: [
		{
			name:"Apple",
			currentPrice:"160",
			symbol: "AAPL"
		},
		{
			name:"Tesla",
			currentPrice:"210",
			symbol: "TSLA"
		},
		{
			name:"OpenX",
			currentPrice:"70",
			symbol: "OPNX"
		},
		{
			name:"Microsoft",
			currentPrice:"60",
			symbol: "MS"
		}
	],


	hurraySomethingHappened(valArg){
		Ember.$('body').css('background-color', 'blue');
	},


	actions:{
		changeData(){

			var msElem = this.get('stocksArr').objectAt(0);
			Ember.set( msElem,'symbol', '$$$');

			// var newEntry = 		{
			// 	name:"Microsoft",
			// 	currentPrice:"100",
			// 	symbol: "$$$"
			// };
		},

		secretThing(v){
			this.hurraySomethingHappened(v);
		}
	}




});
