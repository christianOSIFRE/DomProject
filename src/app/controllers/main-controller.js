app.controller('mainCtrl', ['$scope', '$translate', '$location', '$log', 'locationService', function($scope, $translate, $location, $log, locationService){

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
);