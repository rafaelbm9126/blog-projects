<script lang="ts">
	import { openResponsiveMenu, openAbout, showModalStandar } from "@store/index";
	import MenuConfig from "@data/menu.conf";
	import data from "@data/general";
	import ModalStandar from "./ModalStandar.svelte";

	function updateShowModal(show: boolean) {
		openResponsiveMenu.set(show);
		showModalStandar.set(show);
	}

	function updateAbout(show: boolean) {
		openAbout.set(show);
		showModalStandar.set(show);
	}
</script>

<ModalStandar showModal={$openResponsiveMenu} {updateShowModal}>
	<div
		class="menu-responsive-shadow fixed bottom-0 right-0 top-0 z-30 w-60 min-w-max max-w-sm overflow-y-auto bg-slate-800 p-6 pt-5"
	>
		<div class="flex items-center justify-between">
			<a href="/" class="-m-1.5 flex items-center p-1.5">
				<img class="h-8 w-auto" src={data.logo} alt="Logo" />
				<span class="text-xs font-semibold italic text-white">
					{data.title}
				</span>
			</a>
			<button
				type="button"
				class="-m-2.5 rounded-md p-2.5 text-gray-600"
				on:click={() => updateShowModal(false)}
			>
				<svg
					class="h-6 w-6"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>
		</div>
		<div class="mt-6 flow-root">
			<div class="-mb-6 -mt-6">
				<div class="pb-6 pt-6">
					{#each MenuConfig.items as conf}
						{#if conf.visible}
							<a
								href={conf.href}
								class="-ml-3 -mr-3 block rounded-lg pb-2 pt-2 text-base font-semibold leading-7 text-white decoration-inherit"
							>
								{conf.title}
							</a>
						{/if}
					{/each}
					<span
						class="-ml-3 -mr-3 block cursor-pointer rounded-lg pb-2 pt-2 text-base font-semibold leading-7 text-white decoration-inherit"
						on:click={() => {
							updateAbout(true);
							updateShowModal(false);
						}}
						on:keypress={() => null}
						role="button"
						tabindex={0}
					>
						About
					</span>
				</div>
			</div>
		</div>
	</div>
</ModalStandar>

<style>
	.menu-responsive-shadow {
		--tw-ring-color: #ffffff7c;
		--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width)
			var(--tw-ring-offset-color);
		--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width))
			var(--tw-ring-color);
		box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 /0000);
	}
</style>
