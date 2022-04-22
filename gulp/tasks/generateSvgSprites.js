import svgSprite from 'gulp-svg-sprite'

/**
 * Альтернативный вариант:
 *
 * const icons = () => {
 * const pluginsSvgo = [
 *    { removeViewBox: false },
 *    { removeTitle: true },
 *    { cleanupNumericValues: { floatPrecision: 1 } }
 *  ];
 *
 *  const pluginsImagemin = [imagemin.svgo({ plugins: pluginsSvgo })];
 *
 *  return src(`${source.images.icons}** /*.svg`)
 *    .pipe(gulpIf(isProd, imagemin(pluginsImagemin)))
 *    .pipe(svgstore({ inlineSvg: true }))
 *    .pipe(rename('symbols.svg'))
 *    .pipe(dest(desination.images.all));
 * };
 */

const generateSvgSprites = () => {
	const { gulp, plugins, path } = app

   gulp
      .src(path.src.svg)
      .pipe(gulp.dest(path.build.svgOriginal))

	return gulp
      .src(path.src.svg)
      .pipe(plugins.plumber(
			plugins.notify.onError({
				title: 'SVG',
				message: 'Error: <%= error.message %>',
			})
		))
      .pipe(svgSprite({
         log: 'info',
			mode: {
				stack: {
				   sprite: '../icons.svg',
               example: true
            },
			}
		}))
		.pipe(gulp.dest(path.build.svg))
}

export default generateSvgSprites
