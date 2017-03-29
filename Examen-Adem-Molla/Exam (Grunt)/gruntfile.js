module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/**/*.js'],
        dest: 'dist/script.main.js'
      }
    },
    sass: {
      dist: {
        files: {
        'css/style_desktop.css': 'css/src/style_desktop.scss',
        'css/style_tablet.css': 'css/src/style_tablet.scss',
        'css/style_mobile.css': 'css/src/style_mobile.scss'
        }
      }
    }
  })


grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-sass');

grunt.registerTask('default', ['concat', 'sass']);
}