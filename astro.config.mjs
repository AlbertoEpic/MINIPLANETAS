// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
const isBuild = process.argv.includes('build');

export default defineConfig({
	site: 'https://albertoepic.github.io',
	base: isBuild ? '/MINIPLANETAS' : '/',
});
