module.exports = function(grunt) {
  // Configuration
  grunt.initConfig({
    imagemin: {
      png: {
        options: {
          optimizationLevel: 7
        },
        files: [
          {
            expand: true,
            // This is the folder where the images are now
            cwd: 'img/',
            src: ['*.png'], // this only filters .png files
            // This is the destination folder
            dest: 'docs/img/',
            ext: '.png'
          }
        ]
      },
      jpg: {
        options: {
          progressive: true
        },
        files: [
          {
            expand: true,
            // This is the folder where the images are now
            cwd: 'img/',
            src: ['*.jpg'], // this only filters .jpg files
            // This is the destination folder
            dest: 'docs/img/',
            ext: '.jpg'
          }
        ]
      }
    },
    critical: {
      target: {
        options: {
          base: './',
          width: 480,
          heigth: 853
        },
        // overwriting file as minifying needs to be done at the end
        src: 'index.html',
        dest: 'index.html'
      }
    },
    htmlmin: {
      docs: {
        options: {
          minifyCSS: true,
          collapseWhitespace: true
        },
        files: {
          'docs/index.html' : 'index.html',
          'docs/views/pizza.html' : 'views/pizza.html'
        }
      }
    },
    cssmin: {
      docs: {
        files: {
          'docs/css/print.min.css' : 'css/print.css',
          'docs/css/style.min.css' : 'css/style.css',
          'docs/views/css/bootstrap-grid.min.css' : 'views/css/bootstrap-grid.css',
          'docs/views/css/style.min.css' : 'views/css/style.css'
        }
      }
    },
    uglify: {
      options: {
        manage: false,
        output: {
          comments: 'all'
        }
      },
      docs: {
        files: {
          'docs/js/perfmatters.min.js' : 'js/perfmatters.js'
        }
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-critical');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Register Tasks
  grunt.registerTask('optimizePICS', ['imagemin']);
  grunt.registerTask('criticalCSS', ['critical']);
  grunt.registerTask('minifyHTML', ['htmlmin']);
  grunt.registerTask('minifyCSS', ['cssmin']);
  grunt.registerTask('minifyJS', ['uglify']);
};
