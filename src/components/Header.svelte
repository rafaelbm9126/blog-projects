<script lang='ts' type='module'>
  import { openResponsiveMenu, openAbout, showModalStandar } from '@store/index';
  import MenuConfig from '@data/menu.conf';
  import data from '@data/general';

  function updateMenu(show: boolean) {
  	openResponsiveMenu.set(show);
  	showModalStandar.set(show);
  }

  function updateAbout(show: boolean) {
  	openAbout.set(show);
  	showModalStandar.set(show);
  }
</script>

<header class='sticky top-0 h-16 w-full bg-slate-800 z-10'>
  <nav
    class='ml-auto mr-auto flex h-full w-full max-w-7xl items-center justify-between p-6 lg:pl-8 lg:pr-8'
  >
    {#if !$openResponsiveMenu}
      <div class='flex flex-1'>
        <a href='/' title='Home' class='flex items-center -m-1.5 p-1.5'>
          <img
            class='h-12 w-12'
            src={data.logo}
            alt='Home'
          />
          <span class='font-semibold text-white text-xl italic'>
            {data.title}
          </span>
        </a>
      </div>
    {:else}
      <div></div>
    {/if}
    <div class='flex lg:hidden'>
      <button
        type='button'
        class='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-500 focus:outline-none'
        aria-label='Open Mobile Menu'
        on:click={() => updateMenu(true)}
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
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
          />
        </svg>
      </button>
    </div>
    <div class='hidden lg:flex lg:gap-x-12'>
      {#each MenuConfig.items as conf}
        {#if conf.visible}
          <a href={conf.href} class='text-sm font-semibold leading-5 text-white'>
            {conf.title}
          </a>
        {/if}
      {/each}
      <span
        class='text-sm font-semibold leading-5 text-white cursor-pointer'
        on:click={() => updateAbout(true)}
        on:keypress={() => null}
        role='button'
        tabindex={0}
      >
        About
      </span>
    </div>
  </nav>
</header>

<style></style>
