// Project configuration.
module.exports = function(grunt) {

    grunt.initConfig({
        csvjson: {
            options:{
                parserOptions:{
                    auto_parse : true
                }
            },
            test: {
                src: 'csv/*.csv',
                dest: 'json'
            }
        },
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-csv-to-json');

    // Default task(s).
    grunt.registerTask('default', ['csvjson']);

};