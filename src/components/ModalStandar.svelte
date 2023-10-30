<script lang="ts">
	export let showModal: boolean;
	export let updateShowModal: (_: boolean) => void;
</script>

<div>
	{#if showModal == true}
		<div
			class="fixed inset-0 z-20 bg-slate-800 opacity-50"
			on:click={() => updateShowModal(false)}
			on:keypress={() => null}
			role="button"
			tabindex={0}
		/>
		<slot />
	{/if}
</div>

<style></style>
