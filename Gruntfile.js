module.exports = function(grunt) {

  grunt.initConfig({
      execute: {
          drone: {
              src: ['drone.js']
          }
      }
  })
  grunt.loadNpmTasks('grunt-execute');

  grunt.registerTask('drone', ['execute:drone']);

};