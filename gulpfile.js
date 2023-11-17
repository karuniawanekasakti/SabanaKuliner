/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
const { src, dest } = require('gulp');
const minifyJs = require('gulp-uglify');

const bundleJs = () => {
  src('./src/**/*.js')
    .pipe(minifyJs())
    .pipe(dest('./dist'));
};

exports.bundleJs = bundleJs;
