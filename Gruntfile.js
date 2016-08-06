module.exports = function(grunt) {
	grunt.initConfig({
		connect: {
			server: {
				options: {
					port: 8989
				}
			}
		},

		watch: {
      options: { livereload: true },
			files: [
				'js/**/*.js',
				'css/**/*.scss',
				'css/**/*.sass',
				'**/*.jade',
        'assets/**/*',
        'img/**/*'
			],
			tasks: ['sass', 'jade']
		},

		// compile sass/scss
		// since all other stylesheets are @import-ed in index.scss,
		// that's the only one we need to compile.
    sass: {
      app: {
        files: { 'css/index.css': 'css/index.sass' }
      }
    },

		// compile jade templates
		jade: {
			compile: {
				options: {
					pretty: true,
					client: false
				},
        files: [{
          expand: true,
          cwd: '.',
          src: [
            '**/*.jade',
            '!node_modules/**/*.jade',
            '!inc/**/*.jade'
          ],
          dest: '.',
          ext: '.html'
        }]
			}
		}

	});

	grunt.registerTask('default', ['sass', 'jade', 'connect', 'watch']);
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-connect');
};
