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
          controller: 'marketCtrl'
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


app.controller('mainCtrl', ['$scope', '$translate', function($scope, $translate){

		$translate.use('fr');

$scope.showCarousel = true;
		$scope.logo = "http://www.fencytv.com/client/cache/contenu/160_90____2__logo-tapage-nocturne-cmjn_156.jpg";

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

		$scope.description = 'Dom Gilbertson, guitariste, auteur-compositeur et interprète vous invitre dans son univers. Ses chansons sont le fruit d\'un travail approfondit de ce qu\'il aime dans la musique et dans la chanson française. Par sa musique, subtile mélange de musiques andalouses et brésiliennes, il nous fait voyager. Il chante l\'amour, la peine, l\'amtié, la vie dans tous ces états avec beaucoup de talent. Certaines chansons sont pleines d\'humour, d\'autres, empreintes d\'émotions. S\'accompagnant à la guitare il mélange les genres avec délice.';
		
		
		$scope.path = function(url){
			return 'src/templates/'+url+'/'+url+'.html';
		} 

 		$scope.images = [
			{ url: 'http://blog.tiqiq.com/wp-content/uploads/2014/01/concert-crowd.jpg' },
			{ url: 'http://img0.gtsstatic.com/wallpapers/e278df830bc07bf5ac5e95de1991279e_large.jpeg'},
			{ url: 'http://img1.mxstatic.com/wallpapers/49651531f7ff6aeac7d7588b035faba3_large.jpeg' },
		];
		
  	}]
);;app.controller('activitesCtrl', ['$scope', function($scope){

	

}]);;app.controller('actualitesCtrl', ['$scope', function($scope){


}]);;app.controller('contactCtrl', ['$scope', function($scope){


}]);;app.controller('coursCtrl', ['$scope', function($scope){


}]);;app.controller('marketCtrl', ['$scope', function($scope){

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

	]

}]);