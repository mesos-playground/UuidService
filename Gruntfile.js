const manifest = [
    'HealthPlugin.js',
    'UUIDPlugin.js',
    'index.js'
];

const dist = 'dist';
const bundle = dist + '/UuidService.tgz';

module.exports = function(grunt) {

    grunt.initConfig({

        packageModules: {
            dist: {
                src: 'package.json',
                dest: dist
            },
        },

        copy: {
            dist: {
                files: [{
                    // Copy project files to dist dir 
                    expand: true,
                    dest: dist,
                    src: [ manifest ]
                }]
            },
        },

        // tarball all the files in the dist dir into proj-dist.tar.gz 
        compress: {
            dist: {
                options: { archive: bundle },
                files: [{
                    expand: true,
                    dot: true,
                    cwd: dist,
                    src: '**/*'
                }]
            }
        },
    });

    grunt.loadNpmTasks('grunt-package-modules');
    grunt.loadNpmTasks('grunt-copy');
    grunt.loadNpmTasks('grunt-contrib-compress');

    // Default task(s).
    grunt.registerTask('default', [ 'packageModules', 'copy', 'compress' ]);
};
