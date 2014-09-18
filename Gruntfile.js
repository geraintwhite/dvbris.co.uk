module.exports = function(grunt) {
  grunt.initConfig({

    sass: {
      main: {
        src: 'css/main.scss',
        dest: 'css/main.css'
      }
    },
    autoprefixer: {
      main: {
        src: 'css/main.css',
        dest: 'css/main.css'
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
