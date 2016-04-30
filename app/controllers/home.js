import Ember from 'ember';

export default Ember.Controller.extend({

	isUserLoggedIn: true,


	actions: {

		sendNameWasClicked(){
			//alert(dayNum);
			//alert( this.get('firstName') );

			this.set('firstName', null);
		},

		secondAction(){

		}

	}



});
