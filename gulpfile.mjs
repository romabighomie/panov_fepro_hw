import * as del from 'del';
import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import svgSprite from 'gulp-svg-sprite';
const sass = gulpSass(dartSass);
import pug from 'gulp-pug';
import browserSync from 'browser-sync';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { rollup } from 'rollup';
import json from '@rollup/plugin-json';

async function cleanDist() {
	await del.deleteAsync(['dist/**', '!dist']);
}

const compileSass = () => {
	return gulp.src('src/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('dist/'));
};

const compilePug = () => {
	return gulp.src('src/*.pug')
	.pipe(pug())
	.pipe(gulp.dest('dist'));
};

const copyJs = async () => {
	const bundle = await rollup({
		input: 'src/index.js',
		plugins: [nodeResolve(), json()],
	});
	
	await bundle.write({
		dir: 'dist',
		format: 'es',
		sourcemap: true,
	});
};

const createSvgSprite = () => {
	const config = {
		mode: {
			symbol: {
				dest: '.',
				sprite: 'sprite.svg',
			},
		},
		svg: {
			xmlDeclaration: false,
			doctypeDeclaration: false,
			namespaceClassnames: false,
			namespaceIDs: false,
		},
		shape: {
			transform: ['svgo'],
		},
		svgo: {
			plugins: [
				{ removeTitle: true },
				{ cleanupIDs: false },
			],
		},
	};
	
	return gulp.src('src/assets/svg/*.svg')
	.pipe(svgSprite(config))
	.pipe(gulp.dest('dist/'));
};

const copyJson = () => {
	return gulp.src('src/api/*.json')
	.pipe(gulp.dest('dist'));
};

const copyImg = () => {
	return gulp.src('src/assets/img/*.webp')
	.pipe(gulp.dest('dist/img'));
};

const serve = () => {
	browserSync.init({
		server: {
			baseDir: './dist'
		}
	});
	
	gulp.watch('src/**/*.scss', compileSass);
	gulp.watch('src/**/*.pug', compilePug);
	gulp.watch('src/**/*.js', copyJs);
	gulp.watch('src/assets/svg/*.svg', createSvgSprite);
	gulp.watch('src/api/*.json', copyJson);
};

export default gulp.series(cleanDist, gulp.parallel(compileSass, compilePug, copyJs, createSvgSprite, copyJson, copyImg), serve);