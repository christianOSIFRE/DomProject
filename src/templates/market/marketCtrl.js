app.controller('marketCtrl', ['$scope', function($scope){

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