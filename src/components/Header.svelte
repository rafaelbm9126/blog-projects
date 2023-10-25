<script lang="ts" type="module">
  import { openResponsiveMenu } from "../store/index";

  function updateMenu(show: boolean) {
    openResponsiveMenu.set(show);
  }
</script>

<header class="h-16 w-full bg-slate-800">
  <nav
    class="ml-auto mr-auto flex h-full w-full max-w-7xl items-center justify-between p-6 lg:pl-8 lg:pr-8"
  >
    <div class="flex flex-1">
      <a href="/" class="-m-1.5 p-1.5">
        <img
          class="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=500"
          alt=""
        />
      </a>
    </div>
    <div class="flex lg:hidden">
      <button
        type="button"
        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-500 focus:outline-none"
        on:click={() => updateMenu(true)}
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
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </div>
    <div class="hidden lg:flex lg:gap-x-12">
      <a href="/" class="text-sm font-semibold leading-5 text-white">Product</a>
      <a href="/" class="text-sm font-semibold leading-5 text-white">Features</a
      >
      <a href="/" class="text-sm font-semibold leading-5 text-white"
        >Marketplace</a
      >
      <a href="/" class="text-sm font-semibold leading-5 text-white">Company</a>
    </div>
    <div class="hidden flex-1 lg:flex lg:justify-end" />
  </nav>
</header>

<style></style>
