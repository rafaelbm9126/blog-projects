<script lang="ts">
	import { format_tags } from "@helpers";

	export let tags: string[];

	const tags_formated = Object.keys(format_tags(tags, {}));
</script>

<div class="scroll-style-spetial flex overflow-x-scroll sm:overflow-hidden">
	{#each tags_formated as tag}
		<a
			class="hover:text-primary-600 dark:hover:text-primary-400 mr-3 text-sm font-medium uppercase text-pink-500"
			href={`/?tag=${tag}`}
		>
      {tag}
		</a>
	{/each}
</div>

<style></style>
