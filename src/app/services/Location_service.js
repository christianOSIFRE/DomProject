app.factory('locationService', ['$location', function($location){
	return {
		showCarousel : function(){
			var result = ('/'===$location.$$url)? true : false;
			return result;	
	    
		}
	}
	
}])