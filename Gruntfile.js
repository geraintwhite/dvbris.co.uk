module.exports = function(grunt) {
  grunt.initConfig({

    sass: {
      main: {
        src: 'main.scss',
        dest: 'main.css'
      }
    },
    autoprefixer: {
      main: {
        src: 'main.css',
        dest: 'main.css'
      }
    },
    watch: {
      main: {
        tasks: ['default'],
        files: ['**/*'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', [
    'sass',
    'autoprefixer'
  ]);

};
