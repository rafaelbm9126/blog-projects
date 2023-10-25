<script lang="ts">
  export let src = "";
  export let href = "";
  export let background = false;
</script>

<figure
  class={`flex flex-col w-full h-96 mb-12 rounded ${
    background ? "bg-white opacity-60" : ""
  }`}
>
  <img {src} class="h-96 w-auto object-contain" alt="" />
  <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
    <a class="text-blue-600" {href} target="_blank">origin</a>
  </figcaption>
</figure>

<style></style>
