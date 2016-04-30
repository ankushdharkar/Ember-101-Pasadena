import Ember from 'ember';

export default Ember.Route.extend({

	model(params){

		var stocksController = this.controllerFor('stocks');

		if(params.stockName){
			stocksController.set('isEverythingShown', false);
			stocksController.set('singleStockName', params.stockName);
		}

	}


});
