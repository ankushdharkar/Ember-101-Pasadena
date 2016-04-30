import Ember from 'ember';

export default Ember.Component.extend({

	stockInfo: Ember.computed('stockName', 'stockSymbol', function(){
		return this.get('stockName') + " [" + this.get('stockSymbol') + "] ";
	}),

	priceChanged: Ember.observer('stockSymbol', function(){
		console.info("SYMBOLD CHANGED TO : " + this.get('stockSymbol'));
	}),



	didInsertElement(){
		//console.info("I loaded");
	},


	actions:{
		componentBtnClicked(){
			this.get('actionToDo')();
		}
	}


});
