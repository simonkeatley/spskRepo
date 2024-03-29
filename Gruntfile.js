// Generated on 2014-07-27 using generator-jekyllrb 1.2.1
'use strict';

// Directory reference:
//   css: css
//   sass: _scss
//   javascript: js
//   coffeescript: _src
//   images: img
//   fonts: fonts

module.exports = function (grunt) {
  // Show elapsed time after tasks run
  require('time-grunt')(grunt);
  // Load all Grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    // Configurable paths
    yeoman: {
      app: 'app',
      dist: 'dist'
    },
    watch: {
      sass: {
        files: ['<%= yeoman.app %>/_scss/**/*.{scss,sass}'],
        tasks: ['sass:server', 'autoprefixer:server']
      },
      autoprefixer: {
        files: ['<%= yeoman.app %>/css/**/*.css'],
        tasks: ['copy:stageCss', 'autoprefixer:server']
      },
      coffee: {
        files: ['<%= yeoman.app %>/_src/**/*.coffee'],
        tasks: ['coffee:dist']
      },
      coffeeTest: {
        files: ['test/spec/**/*.coffee'],
        tasks: ['coffee:test']
      },
      jekyll: {
        files: [
          '<%= yeoman.app %>/**/*.{html,yml,md,mkd,markdown}',
          '!<%= yeoman.app %>/_bower_components/**/*'
        ],
        tasks: ['jekyll:server']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '.jekyll/**/*.html',
          '.tmp/css/**/*.css',
          '{.tmp,<%= yeoman.app %>}/<%= js %>/**/*.js',
          '<%= yeoman.app %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}'
        ]
      }
    },
    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            '.jekyll',
            '<%= yeoman.app %>'
          ]
        }
      },
      dist: {
        options: {
          open: true,
          base: [
            '<%= yeoman.dist %>'
          ]
        }
      },
      test: {
        options: {
          base: [
            '.tmp',
            '.jekyll',
            'test',
            '<%= yeoman.app %>'
          ]
        }
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= yeoman.dist %>/*',
            // Running Jekyll also cleans the target directory.  Exclude any
            // non-standard `keep_files` here (e.g., the generated files
            // directory from Jekyll Picture Tag).
            '!<%= yeoman.dist %>/.git*',
            '!<%= yeoman.dist %>/img*'
          ]
        }]
      },
      server: [
        '.tmp',
        '.jekyll'
      ]
    },
    sass: {
      options: {
        bundleExec: true,
        debugInfo: false,
        lineNumbers: false,
        style: 'compressed',
        loadPath: 'app/_bower_components'
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/_scss',
          src: '**/*.{scss,sass}',
          dest: '.tmp/css',
          ext: '.css'
        }]
      },
      server: {
        options: {
          debugInfo: false,
          lineNumbers: false
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/_scss',
          src: '**/*.{scss,sass}',
          dest: '.tmp/css',
          ext: '.css'
        }]
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>/css',
          src: '**/*.css',
          dest: '<%= yeoman.dist %>/css'
        }]
      },
      server: {
        files: [{
          expand: true,
          cwd: '.tmp/css',
          src: '**/*.css',
          dest: '.tmp/css'
        }]
      }
    },
    coffee: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/_src',
          src: '**/*.coffee',
          dest: '.tmp/js',
          ext: '.js'
        }]
      },
      test: {
        files: [{
          expand: true,
          cwd: 'test/spec',
          src: '**/*.coffee',
          dest: '.tmp/spec',
          ext: '.js'
        }]
      }
    },
    jekyll: {
      options: {
        bundleExec: true,
        config: '_config.yml',
        src: '<%= yeoman.app %>'
      },
      dist: {
        options: {
          dest: '<%= yeoman.dist %>',
        }
      },
      server: {
        options: {
          config: '_config.yml',
          dest: '.jekyll'
        }
      },
      check: {
        options: {
          doctor: true
        }
      }
    },
    useminPrepare: {
      options: {
        dest: '<%= yeoman.dist %>'
      },
      html: '<%= yeoman.dist %>/index.html'
    },
    usemin: {
      options: {
        assetsDirs: '<%= yeoman.dist %>',
      },
      html: ['<%= yeoman.dist %>/**/*.html'],
      css: ['<%= yeoman.dist %>/css/**/*.css']
    },
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.html',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    // Usemin adds files to concat
    concat: {},
    // Usemin adds files to uglify
    uglify: {
      build: {
        options: {
          compress: true
        },
        files: [{
            expand: true,
            cwd: 'app/js',
            src: '**/*.js',
            dest: 'dist/js'
        }]
      }
    },
    // jpgmin: {
    //   src: '<%= yeoman.dist %>/img/generated/**/*.{gif,jpg,jpeg,png,svg,webp}',
    //   dest: 'img/',
    //   quality: 0 // use lossy JPEG compression at 80% quality
    // },
    // Usemin adds files to cssmin
    // cssmin: {
    //   minify: {
    //     expand: true,
    //     cwd: 'dist/',
    //     src: ['*.css'],
    //     dest: 'dist/css/',
    //     ext: '.css',
    //     report: 'gzip'
    //   }
    // }, 
    // cssmin: {
    //   compress: {
    //     files: {
    //       '<%= yeoman.dist %>/css/main.css': ['<%= yeoman.dist %>/css/*.css']
    //     }
    //   } 
    // },
    cssmin: {
      minify: {
        options: {
          check: 'gzip'
        },
        files: {
          "dist/css/main.css": [".tmp/css/main.css",".tmp/css/syntax.css", "dist/bower_components/normalize-css/normalize.css"]
          // "dist/css/main.css": ["dist/_bower_components/normalize-css/normalize.css"]
        }
      }
    },
    imagemin: {
      dist: {
        options: {
          progressive: true,
          optimizationLevel: 3,
          cache: false
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: 'img/**/*.{gif,GIF,jpg,JPG,jpeg,JPEG,png,PNG}',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    // responsive_images: {
    //   dev: {
    //     options: {
    //       quality: 50,
    //       engine: 'gm'
    //     },
    //     files: [{
    //       expand: true,
    //       cwd: '<%= yeoman.dist %>',
    //       src: ['img/*.{jpg,JPG,jpeg,JPEG,gif,GIF,png,PNG}'],
    //       dest: '<%= yeoman.dist %>'
    //     }]
    //   }
    // },
//Works but you have to spec out the height or width so won't be a solution
    // image_resize: {
    //   resize: {
    //     options: {
    //       quality: 0.6,
    //       height: 200
    //     },
    //     files: [{
    //       expand: true,
    //       cwd: '<%= yeoman.dist %>',
    //       src: ['img/*.{jpg,JPG,jpeg,JPEG,gif,GIF,png,PNG}'],
    //       dest: '<%= yeoman.dist %>'
    //     }]
    //   }
    // },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.svg',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          src: [
            // Jekyll processes and moves HTML and text files.
            // Usemin moves CSS and javascript inside of Usemin blocks.
            // Copy moves asset files and directories.
            'img/**/*',
            'js/**/*',
            'fonts/**/*',
            // Like Jekyll, exclude files & folders prefixed with an underscore.
            '!**/_*{,/**}',
            '!Gemfile',
            '!Gemfile.lock',
            '!Gruntfile.js',
            '!packages.json',
            // Explicitly add any files your site needs for distribution here.
            '_bower_components/**/*',
            'bower_components/**/*',
            'favicon.ico',
            'apple-touch*.png'
          ],
          dest: '<%= yeoman.dist %>'
        }]
      },
      // Copy CSS into .tmp directory for Autoprefixer processing
      stageCss: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>/css',
          src: '**/*.css',
          dest: '.tmp/css'
        }]
      }
    },
    filerev: {
      options: {
        length: 4
      },
      dist: {
        files: [{
          src: [
            '<%= yeoman.dist %>/js/**/*.js',
            '<%= yeoman.dist %>/css/**/*.css',
            // '<%= yeoman.dist %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}',
            '<%= yeoman.dist %>/fonts/**/*.{eot*,otf,svg,ttf,woff}'
          ]
        }]
      }
    },
    coffeelint: {
      options: {
        'max_line_length': {
          'level': 'ignore'
        }
      },
      check: ['<%= yeoman.app %>/_src/*.coffee']
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/js/**/*.js',
        'test/spec/**/*.js'
      ]
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      check: {
        src: [
          '<%= yeoman.app %>/css/**/*.css',
          '<%= yeoman.app %>/_scss/**/*.scss'
        ]
      }
    },
    concurrent: {
      server: [
        'sass:server',
        'coffee:dist',
        'copy:stageCss',
        'jekyll:server'
      ],
      dist: [
        'sass:dist',
        'coffee:dist',
        'copy:dist'
      ]
    },
    compress: {
      main: {
        options: {
          mode: 'gzip'
        },
        expand: true,
        cwd: 'dist/',
        src: ['**/*.*'],
        dest: 'dist/'
      }
    }
  });

  // Define Tasks
  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'concurrent:server',
      'autoprefixer:server',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', function () {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });

  // No real tests yet. Add your own.
  grunt.registerTask('test', [
  //   'clean:server',
  //   'concurrent:test',
  //   'connect:test'
  ]);

  grunt.registerTask('check', [
    'clean:server',
    'jekyll:check',
    'sass:server',
    'coffeelint:check',
    'coffee:dist'
    // 'jshint:all',
    // 'csslint:check'
  ]);

  grunt.registerTask('build', [
    'clean',
    // Jekyll cleans files from the target directory, so must run first
    'jekyll:dist',
    'concurrent:dist',
    'useminPrepare',
    // 'concat',
    'autoprefixer:dist',
    'cssmin',
    'uglify',
    'imagemin',
    // 'responsive_images',
    // 'image_resize',
    // 'jpgmin',
    'svgmin',
    'filerev',
    'usemin',
    'htmlmin'
    // 'compress'
    ]);

  grunt.registerTask('default', [
    'check',
    'test',
    'build'
  ]);
};
