/**
 * Compiles src/js to public/js
 **/

"use strict";

var paths = require("./config.js").paths;
var gulp = require("gulp");
var concat = require("gulp-concat");
var runSequence = require("run-sequence");
var plumber = require("gulp-plumber");
var onError = require("./on-error.js");

// Paths
var watchPath = paths.dest + "/index.html";

gulp.task("html", function() {
  return gulp.src(watchPath);
});

gulp.task("html:watch", ["html"], function() {
  return gulp.watch(watchPath).on("change", function() {
    runSequence("html", "browser-sync-reload");
  });
});
