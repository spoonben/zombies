module.exports = function(grunt) {

  grunt.initConfig({
      execute: {
          drone: {
              src: ['scripts/drone.js']
          }
          server: {
              src: ['scripts/server.js']
          }
      }
  })
  grunt.loadNpmTasks('grunt-execute');

  grunt.registerTask('drone', ['execute:drone']);
  grunt.registerTask('server', ['execute:server']);

};