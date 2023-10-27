<script lang="ts">
  export let src = "";
  export let href: string | undefined = undefined;
  export let background = false;
</script>

<figure
  class={`group relative flex flex-col justify-center items-center w-full h-96 mb-12 rounded ${
    background ? "bg-white opacity-60" : ""
  }`}
>
  <img {src} class="h-96 w-96 object-contain" alt="Article" />
  {#if href !== undefined}
    <div
      class="hidden group-hover:block absolute w-full top-0 right-0 p-2 text-gray-500 text-sm bg-gray-700 rounded-t-sm opacity-70 italic text-right"
    >
      <a class="underline" {href} target="_blank">
        Image source
        <span class="text-sm"> &heartsuit; </span>
      </a>
    </div>
  {/if}
</figure>

<style></style>
