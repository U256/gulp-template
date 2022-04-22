import gulpLintspaces from 'gulp-lintspaces'

// Lint according .editorconfig settings
const lintSrc = () => {
   const { gulp, path } = app

   gulp.src([
      '*.json',
      '*.md',
      './gulpfile.js/**/*.js',
      `${path.src.html}*.html`,
      `${path.src.scripts}**/*.js`,
      `${path.src.images}**/*.svg`,
      `${path.src.styles}**/*.less`
   ])
      .pipe(gulpLintspaces({ editorconfig: '.editorconfig' }))
      .pipe(gulpLintspaces.reporter());
}

export default lintSrc
