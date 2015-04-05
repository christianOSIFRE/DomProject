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


;app.controller('mainCtrl', ['$scope', '$translate', '$location', '$log', 'locationService', function($scope, $translate, $location, $log, locationService){

		$translate.use('fr');

		$scope.logo = "http://www.fencytv.com/client/cache/contenu/160_90____2__logo-tapage-nocturne-cmjn_156.jpg";

		$scope.$watch($location, function(oldValue, newValue){
			$scope.showCarousel = locationService.showCarousel();
		});
		$scope.showCarousel = false;
		$scope.listItem = [
			{
				label: 'Home', 
				target: '#', 
				subitems: false, 
				icon: ''
			},
			{
				label: 'Cours', 
				target: 'cours', 
				icon: '',
				subitems: true,
				listSubItem : [
					{
						label: 'Cours Individuel', 
						target: '#/cours_individuel',
						icon: '', 
						border: false
					},
					{
						label: 'Cours Collecif', 
						target: 'cours_collectif',
						icon: '', 
						border: false
					},
					{
						label: 'Concerts', 
						target: 'concerts',
						icon: '', 
						border: false
					}

				]

			},
			{
				label: 'Actualités', 
				target: 'actualites', 
				icon: '',
				subitems: true,
				listSubItem : [
					{
						label: 'Scènes Ouvertes', 
						target: 'scène_ouverte',
						icon: '', 
						border: false
					},
					{
						label: 'Fête de la Musique', 
						target: 'fête_de_la_musique',
						icon: '', 
						border: false
					},
					{
						label: 'Concerts', 
						target: 'Concerts',
						icon: '', 
						border: false
					}
				]
			},
			{
				label: 'contact', 
				target: 'contact', 
				subitems: false, 
				icon: ''
			}
		];

		
		$scope.path = function(url){
			return 'src/templates/'+url+'/'+url+'.html';
		} 

 		$scope.images = [
			{ url: 'http://blog.tiqiq.com/wp-content/uploads/2014/01/concert-crowd.jpg' },
			{ url: 'http://blog.tiqiq.com/wp-content/uploads/2014/01/concert-crowd.jpg'},
			{ url: 'http://img1.mxstatic.com/wallpapers/49651531f7ff6aeac7d7588b035faba3_large.jpeg' },
		];
		
		
		
  	}]
);;app.factory('locationService', ['$location', function($location){
	return {
		showCarousel : function(){
			var result = ('/'===$location.$$url)? true : false;
			return result;	
	    
		}
	}
	
}]);app.controller('activitesCtrl', ['$scope', function($scope){

	$scope.$parent.showCarousel = false;

}]);;app.controller('actualitesCtrl', ['$scope', function($scope){

	$scope.$parent.showCarousel = false;

}]);;app.controller('contactCtrl', ['$scope', function($scope){


	$scope.$parent.showCarousel = false;
}]);;app.controller('coursCtrl', ['$scope', function($scope){


	$scope.$parent.showCarousel = false;
}]);;app.controller('marketCtrl', ['$scope', function($scope){

	$scope.description1 = 'Dom Gilbertson, guitariste, auteur-compositeur et interprète vous invitre dans son univers. Ses chansons sont le fruit d\'un travail approfondit de ce qu\'il aime dans la musique et dans la chanson française. Par sa musique, subtile mélange de musiques andalouses et brésiliennes, il nous fait voyager. Il chante l\'amour, la peine, l\'amtié, la vie dans tous ces états avec beaucoup de talent. Certaines chansons sont pleines d\'humour, d\'autres, empreintes d\'émotions. S\'accompagnant à la guitare il mélange les genres avec délice.';
	$scope.description2 = 'text2',
	$scope.description3 = 'text3'

		$scope.accueilBlock1 = [
			{
				title:'Dom Gilbertson',
				alt:  'Dom Gilbertson',
				lien: 'http://www.weetix.fr/elements/imagemagick/cache/200f200/elements/candidats_img/muzic_top/large/21897_305689_HQK6PCH9.jpg',
				text: $scope.description1
			},
			{
				title:'Les Whaye Notes',
				img:  '',
				alt:  '',
				lien: 'https://sites.google.com/site/tapagenocturneclub/_/rsrc/1409758768395/home/Recto%20TN%202014.jpg',
				text: 'description2'
			},
			{
				title:'Les 20 ans',
				img:  '',
				alt:  '',
				lien: 'https://sites.google.com/site/tapagenocturneclub/_/rsrc/1377795415735/7-inscriptions/flyer_piaf_recto.jpg?height=400&width=283',
				text: 'description3'
			}
		];

		$scope.featuretteList = [
			{
				title: 'article 1',
				subtitle: 'sous-titre',
				lien: 'https://sites.google.com/site/tapagenocturneclub/_/rsrc/1409758768395/home/Recto%20TN%202014.jpg', 
				text: 'text1',
				side: false
			},
			{
				title: 'article 2',
				subtitle: 'sous-titre',
				lien: 'https://sites.google.com/site/tapagenocturneclub/_/rsrc/1409758768395/home/Recto%20TN%202014.jpg', 
				text: 'text2',
				side: true
			},
			{
				title: 'article 3',
				subtitle: 'sous-titre',
				lien: 'https://sites.google.com/site/tapagenocturneclub/_/rsrc/1409758768395/home/Recto%20TN%202014.jpg', 
				text: 'text3',
				side: false
			}
		]

	$scope.img_circle = [

		{ path: 'http://www.weetix.fr/elements/imagemagick/cache/200f200/elements/candidats_img/muzic_top/large/21897_305689_HQK6PCH9.jpg',
		  alt: 'Dom Gilbertson', 
		  title: 'Dom Gilbertson',
		  resum: 'Dom Gilbertson, guitariste, auteur-compositeur et interprète vous invitre dans son univers. Ses chansons sont le fruit d\'un travail approfondit de ce qu\'il aime dans la musique et dans la chanson française. Par sa musique, subtile mélange de musiques andalouses et brésiliennes, il nous fait voyager, il mélange les genres avec délice...'		
		},
		{ path: '', 
		  alt: '', 
		  title: '',
		  resum: ''
		},
		{ 
		  path: '', 
		  alt: '', 
		  title: '',
		  resum: ''
		}

	];

	$scope.$parent.showCarousel = true;

}]);