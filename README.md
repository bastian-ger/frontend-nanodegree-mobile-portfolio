# Website Performance Optimization portfolio project

## Description:

This is a project of the Front-End Nanodegree of Udacity. The main objectives were to improve the Critical Rendering Path of index.html so that it reaches a minimum PageSpeed score of 90 on mobile and desktop and to improve the fps of pizza.html so that it constantly reaches 60 fps.

## How to run this:

- Fork a copy of this repo to your account by clicking on "Fork"
- Click on the "Clone or download" button in your copy of this repo to download the files on your computer
- Open *index.html* or *views/pizza.html* in your browser

## Optimizations in *index.html*:

- Applied a Webfontloader for the google fonts in order to make it non-render-blocking
- Applied *async* on the google analytics script
- Added a resized version of *pizzeria.jpg* in views/images
- Optimized images with Grunt Imagemin
- Inlined CSS with Grunt Critical
- Minified file

## Optimizations in *views/js/main.js*:

- Took *document.body.scrollTop* out of for-loop in updatePositions() and read this value outside the loop
- Took the calculation of *items.length* out of the same for-loop and calculated it outside the loop
- Applied a requestAnimationFrame on updatePositions()
- Calculated the exact number of visible pizzas before creating the DOM elements
- Used an array to calculate and save all 5 cases of phase before the for-loop in updatePositions()
- Used *transform* in order to move the pizzas in updatePositions(). Also had to calculate the first position of elem.style.left for the DOMContentLoaded Eventlistener.
- Added *will-change: transform* and *backface-visibility: hidden* to *.mover* class in *style.css*
- Calculated the old pizza width before the for-loop in resizePizzas(size)
- Calculated the length of *.randomPizzaContainer* before the same loop
- Calculated *dx* before the same loop and limited calculation to only one *.randomPizzaContainer*
- Minified file

## These are the necessary steps to download, configure and implement the task runner on the reviewer's desktop:

-	Install node.js from this website: https://nodejs.org/en/
-	Install the Grunt command line interface by writing this in Command Prompt: “npm install -g grunt-cli”
-	Then navigate to the folder of *index.html* in Command Prompt.
-	Then create a *package.json* file by using the command “npm init”.
-	Answer the upcoming questions with the help of this website: https://docs.npmjs.com/files/package.json
-	Next, add Grunt as a developer dependency by using this command in the Command Prompt: “npm install --save-dev grunt”
-	Create an empty file called *Gruntfile.js*. You can use your text editor for that.
-	Install the plugin for optimizing images by using the command “npm install --save-dev grunt-contrib-imagemin”.
-	Load the plugin by writing this command inside the Gruntfile.js: “grunt.loadNpmTasks('grunt-contrib-imagemin');”
-	See Gruntfile.js for further details on configuration.
-	Register task in Gruntfile.js with this line: “grunt.registerTask('optimizePICS', ['imagemin']);”
-	Run task with command: “grunt optimizePICS”.
-	Install the plugin for inlining above-the-fold CSS by using the command “npm install grunt-critical --save-dev”
-	Load the plugin by writing this in Gruntfile.js: “grunt.loadNpmTasks('grunt-critical');”
-	See Gruntfile.js for further details on configuration.
-	Register task in Gruntfile.js with this line: “grunt.registerTask('criticalCSS', ['critical']);”
-	Run task with command: “grunt criticalCSS”
- Install the plugin for minifying html files by using the command "npm install grunt-contrib-htmlmin --save-dev"
- Load the plugin by writing this in Gruntfile.js: "grunt.loadNpmTasks('grunt-contrib-htmlmin');"
- See Gruntfile.js for further details on configuration.
- Register task in Gruntfile.js with this line: "grunt.registerTask('minifyHTML', ['htmlmin']);"
- Run task with command: "grunt minifyHTML"
- Install the plugin for minifying css files by using the command "npm install grunt-contrib-cssmin --save-dev"
- Load the plugin by writing this in Gruntfile.js: "grunt.loadNpmTasks('grunt-contrib-cssmin');"
- See Gruntfile.js for further details on configuration.
- Register task with command: "grunt.registerTask('minifyCSS', ['cssmin']);"
- Run task with command "grunt minifyCSS"
- Install the plugin for minifying js files by using the command: "npm install grunt-contrib-uglify --save-dev"
- Load the plugin by writing this in Gruntfile.js: "grunt.loadNpmTasks('grunt-contrib-uglify');"
- See Gruntfile.js for further details on configuration.
- Register task in Gruntfile.js with this line: "grunt.registerTask('minifyJS', ['uglify']);"
- Run task with command "grunt minifyJS"
