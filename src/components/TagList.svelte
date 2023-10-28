<script lang="ts">
	export let tags: string[];
</script>

<div class="scroll-style-spetial mb-6 flex overflow-x-scroll sm:overflow-hidden">
	{#each tags as tag}
		<a
			class="hover:text-primary-600 dark:hover:text-primary-400 mr-3 text-sm font-medium uppercase text-pink-500"
			href={`/?tag=${tag}`}
		>
      {tag}
		</a>
	{/each}
</div>

<style></style>
