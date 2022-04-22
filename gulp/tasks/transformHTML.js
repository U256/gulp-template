import fileInclude from 'gulp-file-include'
import webpHtml from 'gulp-webp-html-nosvg'
import versionNumber from 'gulp-version-number'

const transformHTML = () => {
   const { gulp, path, plugins, isBuild } = app

   return (
      gulp
         .src(path.src.html)
         .pipe(
            plugins.plumber(
               plugins.notify.onError({
                  title: 'HTML',
                  message: 'Error: <%= error.message %>',
               })
            )
         )
         .pipe(fileInclude())
         .pipe(plugins.replace(new RegExp('(\.\.\/)+img/'), 'img/'))
			.pipe(plugins.if(isBuild, webpHtml()))
         .pipe(plugins.if(
				isBuild,
				versionNumber({
					value: '%DT%',
					append: {
						key: '_v',
						cover: 0,
						to: ['css', 'js'],
					},
					output: {
						file: 'gulp/version.json',
					},
				})
			))
         .pipe(gulp.dest(path.build.html))
         .pipe(plugins.browserSync.stream())
   )
}

export default transformHTML
