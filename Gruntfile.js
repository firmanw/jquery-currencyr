module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			grunt: 'Gruntfile.js',
			npm: 'package.json',
			bower: 'bower.json',
			source: 'src/**/*.js',
			tests: 'test/**/*.js',
			options: {
				expr: true
			}
		},
		uglify: {
			main: {
				files: {
					'dist/jquery.currencyr.min.js': ['src/jquery.currencyr.js']
				}
			},
			options: {
				preserveComments: 'some',
				report: 'min'
			}
		},
		sass: {
			dist: {
				options: {
					style: 'compact'
				},
				files: {
					'dist/jquery.currencyr.css': 'src/jquery.currencyr.scss'
				}
			}
		},
		watch: {
			files: '{src,test}/**/*.js',
			tasks: 'default',
			options: {
				livereload: true
			}
		}
	});


	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['sass', 'jshint', 'uglify']);
};
