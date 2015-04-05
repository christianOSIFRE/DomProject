module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  	/*bowerRequirejs: {
	    target: {
	    	rjsConfig: 'app/config.js'
	    }
	},*/
    pkg: grunt.file.readJSON('package.json'),
    
    concat: {
      options: {
        separator: ';', // permet d'ajouter un point-virgule entre chaque fichier concaténé.
      },
      dist: {
        src: [
          'src/app/app.js', 
          'src/app/**/*js',
          'src/templates/**/*.js'
        ],
        dest: 'dist/js/built.js' 
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },

    less: {
     development: {
         options: {
             paths: ["assets/css"]
         },
         files: {"dist/style/style.css": "style/style.less"}
     },
     production: {
         options: {
             paths: ["assets/css"],
             cleancss: true
         },
         files: {"dist/style/style.css": "style/style.less"}
     }
 },
    wiredep: {

	  task: {
	    // Point to the files that should be updated when
	    // you run `grunt wiredep`
	    src: [
	      'src/templates/**/*.html',   // .html support...
	      'app/styles/main.scss',  // .scss & .sass support...
	      'app/config.yml',         // and .yml & .yaml support out of the box!
	      'bower_components/**/*.js',
	     // 'bower_components/**/**/*.js',
        'src/index.html',
	      'index.html'
	    ],

	    options: {
	      // See wiredep's configuration documentation for the options
	      // you may pass:

	      // https://github.com/taptapship/wiredep#configuration
	      // 'grunt wiredep' pour lancer la maj du fichier index.html
	    }
	  }
	}
  });

  // Load the plugin that provides the "uglify" task.
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-bower');
  grunt.loadNpmTasks('grunt-wiredep');
  // Default task(s).
  //grunt.registerTask('default', ['bowerRequirejs']);
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerTask('default', ['wiredep', 'less','concat:dist']);

  

};