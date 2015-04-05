var app = angular.module('dom', ['ngRoute', 'ngAnimate','pascalprecht.translate']);


app.config(['$routeProvider', '$locationProvider', '$translateProvider',
  function($routeProvider, $locationProvider, $translateProvider) {

	$translateProvider.preferredLanguage('fr');
    $translateProvider.useStaticFilesLoader({
	    prefix: 'langage/',
	    suffix: '.json'
	});
	
    $routeProvider
       .when('/', {
          templateUrl: 'src/templates/market/market.html',
          controller: 'marketCtrl',
          resolve: {

          }
        })
       .when('/cours', {
          templateUrl: 'src/templates/activites/activites.html',
          controller: 'activitesCtrl'
        })
       .when('/actualites', {
          templateUrl: 'src/templates/actualites/actualites.html',
          controller: 'actualitesCtrl'
        })
       .when('/contact', {
          templateUrl: 'src/templates/contact/contact.html',
          controller: 'contactCtrl'
        })
        .otherwise({
           redirectTo: '/'
    });

    

}]);


