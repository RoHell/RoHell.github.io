module.exports = function(grunt) {

	grunt.initConfig({    
		watch: {
			files: 'scss/*.scss',
			tasks: ['sass'],
			options: {
				livereload: true
			}
		},
		sass: {
			dist: {
				files: {
					'css/*.css': 'scss/*.scss'
				}
			}
		},
		browserSync: {
			bsFiles: {
				src : [
					'css/*.css',
					'*.html',
					'js/*.js'
				]
			},
			options: {
				server: {
					baseDir: "./"
				}
				
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-browser-sync');

	grunt.registerTask('default', ['browserSync', 'watch', 'sass']);

};