<script lang='ts'>
	import { showModalStandar, openAbout } from '@store/index';
	import ModalStandar from '@components/ModalStandar.svelte';
	import SocialNetwork from '@components/SocialNetwork.svelte';
	import data from '@data/general';

	function updateShowModal(show: boolean) {
		openAbout.set(show);
		showModalStandar.set(show);
	}
</script>

<ModalStandar showModal={$openAbout} {updateShowModal}>
	<div
		class='centered fixed inset-x-1/2 inset-y-1/2 z-20 flex flex-col sm:flex-row items-center sm:items-start h-fit w-max rounded-lg bg-slate-950 p-4 sm:p-8'
	>
		<div class='h-40 w-40 rounded-full bg-slate-800'>
			<img class='h-40 w-40 object-contain' src={data.logo} alt='Logo' loading='eager' />
		</div>
		<div class='m-0 sm:m-4 flex flex-col'>
			<div class='mb-12 flex flex-col'>
				<h1 class='text-xl font-semibold italic text-white mb-2'>{data.title}</h1>
				<span class='italic text-gray-500 w-64 sm:w-80'>"{data.description}"</span>
				<div class='flex flex-col sm:flex-row mt-6'>
					<div>
						<div class='relative sm:mr-3'>
							<div class='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5'>
								<svg
									class='h-4 w-4 text-gray-500 dark:text-gray-400'
									aria-hidden='true'
									xmlns='http://www.w3.org/2000/svg'
									fill='currentColor'
									viewBox='0 0 20 16'
								>
									<path
										d='m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z'
									/>
									<path
										d='M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z'
									/>
								</svg>
							</div>
							<input
								type='text'
								id='input-group-1'
								class='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
								placeholder='name@flowbite.com'
							/>
						</div>
						<small class='text-white'>
							No <strong>spam</strong> sent, only new articles notified
						</small>
					</div>
					<button class='mb-auto mt-4 sm:mt-2'>
						<span
							class='cursor-pointer rounded-lg bg-blue-700 px-5 py-3 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
							>Subscribe</span
						>
					</button>
				</div>
			</div>
			<div class='ml-auto'>
				<SocialNetwork />
			</div>
		</div>
		<div class='absolute right-4 top-4'>
			<button
				type='button'
				class='-m-2.5 rounded-md p-2.5 text-gray-600'
				on:click={() => updateShowModal(false)}
			>
				<svg
					class='h-6 w-6'
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					stroke-width='1.5'
					stroke='currentColor'
					aria-hidden='true'
				>
					<path stroke-linecap='round' stroke-linejoin='round' d='M6 18L18 6M6 6l12 12' />
				</svg>
			</button>
		</div>
	</div>
</ModalStandar>

<style>
	.centered {
		transform: translate(-50%, -50%);
	}
</style>
