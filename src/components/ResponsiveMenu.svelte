<script lang="ts">
  import { openResponsiveMenu } from "../store/index";

  function updateMenu(show: boolean) {
    openResponsiveMenu.set(show);
  }
</script>

<div>
  {#if $openResponsiveMenu == true}
    <div
      class="fixed inset-0 z-10 bg-slate-800 opacity-50"
      on:click={() => updateMenu(false)}
      on:keypress={() => null}
      role="button"
      tabindex={0}
    />
    <div
      class="menu-responsive-shadow fixed bottom-0 right-0 top-0 z-10 w-full max-w-sm overflow-y-auto bg-slate-800 p-6 pt-5"
    >
      <div class="flex items-center justify-between">
        <a href="/" class="-m-1.5 p-1.5">
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=500"
            alt=""
          />
        </a>
        <button
          type="button"
          class="-m-2.5 rounded-md p-2.5 text-gray-600"
          on:click={() => updateMenu(false)}
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div class="mt-6 flow-root">
        <div class="-mb-6 -mt-6">
          <div class="pb-6 pt-6">
            <a
              href="/"
              class="-ml-3 -mr-3 block rounded-lg pb-2 pt-2 text-base font-semibold leading-7 text-white decoration-inherit"
              >Product</a
            >
            <a
              href="/"
              class="-ml-3 -mr-3 block rounded-lg pb-2 pt-2 text-base font-semibold leading-7 text-white decoration-inherit"
              >Features</a
            >
            <a
              href="/"
              class="-ml-3 -mr-3 block rounded-lg pb-2 pt-2 text-base font-semibold leading-7 text-white decoration-inherit"
              >Marketplace</a
            >
            <a
              href="/"
              class="-ml-3 -mr-3 block rounded-lg pb-2 pt-2 text-base font-semibold leading-7 text-white decoration-inherit"
              >Company</a
            >
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  .menu-responsive-shadow {
    --tw-ring-color: #ffffff7c;
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0
      var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0
      calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
      var(--tw-shadow, 0 0 /0000);
  }
</style>
