---
title: Gulp 4 - Up and Running
date: "2020-08-22"
description: A quick guide on Gulp 4 (there's a lot of them out there) that hopefully makes setting it up/how it all works easier to understand.
---

Gulp 4 took me a while to really wrap my head around. Partly because it's ES6 format, and partly because I'd been just reusing a mutation of the same Gulp file I wrote nearly 4 years ago in all my projects (oops).

I use Gulp on projects that aren't complex enough to warrant a full webpack installation, so usually static sites or Drupal projects.

Here's the official documentation on [installing Gulp](https://gulpjs.com/docs/en/getting-started/quick-start/), read that and come back.

I'm also writing this for OSX users, but on windows it's pretty much the same with one exception: your package.json file. I'll get to that at the end.

We'll be using gulp to do a few simple tasks: compile SCSS files, minify the CSS, minify our Javascript, and watch our files for changes.  

### Set it up

**Add a new file** to the root of your project called gulpfile.js

From your command line, npm install these packages using the --save-dev flag (e.g., `npm install --save-dev sass`)

- del
- gulp-rename
- gulp-clean-css
- gulp-autoprefixer
- sass

Once these are installed they should appear in your package.json file as devDependencies.

### The gulpfile

gulpfile.js is the entry file. All gulp code goes in here and this is the file that npm looks for when executing `gulp` from the command line.

Include `"use strict";` at the top of the file.

**Add the gulp plugins as variables.** These names will be used across the file.

```javascript
const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
```

> See how in the first declaration there's a bunch of variable names inside the curly braces? That's called an [ES6 destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment), which helps clean up our code. Usually you'd have to declare tasks with gulp.src, gulp.watch, etc. and using this method simplifies them to src, watch, series, and so on.

**/assets/** is the directory where all of our project's code will live, and **/dist/** is where all of our production ready code compiles to.

Add these directories to your project if they are not in there already.

### Sass Compile

The first task we'll write will compile our sass to regular css.

```javascript
const sassCompile = () => {
	return src("assets/scss/main.scss")
      .pipe(sass({ outputStyle: "expanded"}))
      // logs errors to the console related to sass build
      .pipe(sass().on('error', sass.logError))
      .pipe(dest("assets/css"));
}
```

I'm not going over how to set up sass, but just **make sure your main.scss file** is referenced in the src() method.

> You'll see other gulpfiles set up with "return gulp.src()", that's what the destructuring assignment takes care of.

Inside of the dest() method add the assets directory path and any subdirectories where your css is going. I like to keep it separate from my JS even if it's one file.

### Minification

Minifying your CSS/JS is great for browser performance. Newer versions of webpack do this automatically for production files, but gulp you have to set it up manually.

``` javascript
const minify = () => {
  return src("assets/css/main.css")
    .pipe(cleanCSS({
      compatibility: "ie8",
      // removes developer comments from final output
      level: {1: {specialComments: 0}},
    }))
    // renames file main.min.css
    .pipe(rename({ suffix: ".min" }))		
    .pipe(dest("dist/css"));
}
```

Just like before, make sure your project's directories are in place of what's in src() and dest().

For our Javascript it's relatively the same thing. This is good if you have a single interactive layer on a static site and only one or two JS files controlling it all.

``` javascript
const uglify = () => {
  return src("assets/js/main.js")
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))		
    .pipe(dest("dist/js"));
}
```

### Watching for changes

Lastly we're going to set up a watch task. This is pretty standard in most build tools because it will essentially wait for changes to our CSS/JS files and then re-build everything with the new changes.

``` javascript
const watchTask = done => {
  watch("assets/scss/*.scss", {ignoreInitial: false },  sassCompile);
  watch("assets/css/main.css", minify);
  watch("js/main.js", compressJS);
  done();
}
```
 >  "ignoreInitial: false" always re-builds the css when first running gulp from the command line, this is optional but I personally like running it to make sure my CSS always has the latest changes as soon as the tool is executed

Gulp 4 uses ES6 modules to fire the default task. There's a new method called "series" that determines the order for tasks to be executed.

``` javascript
// calls build process in order, watchTask is always last
const build = series(sassCompile, minify, compressJS, watchTask);

// required default module for building assets
exports.default = build;
```

Any time "gulp" is run from the command line it will fire the process in this order. When you first run it the watchTask will fire first, and then once you start saving changes and what not it executes in the prescribed order.

### Running it

The full file should look like this:

```javascript
const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');

const sassCompile = () => {
	return src("assets/scss/main.scss")
      .pipe(sass({ outputStyle: "expanded"}))
      .pipe(sass().on('error', sass.logError))
      .pipe(dest("assets/css"));
}

const minify = () => {
  return src("assets/css/main.css")
    .pipe(cleanCSS({
      compatibility: "ie8",
      level: {1: {specialComments: 0}},
    }))
    .pipe(rename({ suffix: ".min" }))		
    .pipe(dest("dist/css"));
}

const uglify = () => {
  return src("assets/js/main.js")
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))		
    .pipe(dest("dist/js"));
}

const watchTask = done => {
  watch("assets/scss/*.scss", {ignoreInitial: false },  sassCompile);
  watch("assets/css/main.css", minify);
  watch("js/main.js", compressJS);
  done();
}

const build = series(sassCompile, minify, compressJS, watchTask);

exports.default = build;
```

There you have it! Compiles SCSS to CSS, minfies the file, compresses our JS, and watches for changes. Once again this is great for site's without a lot of assets and that relies on mostly static content.

Type `gulp` into the root of your project from the command line and it should run. Make sure the gulpfile is at the root as well or it won't work.

Check out the [gulp documentation](https://gulpjs.com/) for different options that can be run within each of theses tasks.
