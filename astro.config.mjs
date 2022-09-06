import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	integrations: [preact(), mdx()],
	legacy: {
		// Example: Add support for legacy Markdown features
		astroFlavoredMarkdown: true,
	  },
});
