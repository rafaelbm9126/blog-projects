import { vitePreprocess } from '@astrojs/svelte';

export default {
	preprocess: vitePreprocess(),
	kit: {
		alias: {
			"@/*": "src/*",
			"@assets/*": "src/assets/*",
    	"@components/*": "src/components/*",
			"@data/*": "src/data/*",
			"@helpers/*": "src/helpers/*",
			"@layouts/*": "src/layouts/*",
			"@pages/*": "src/pages/*",
			"@articles/*": "src/pages/articles/*",
			"@store/*": "src/store/*",
		},
	},
};
