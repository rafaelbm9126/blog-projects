<script lang="ts">
  export let src = "";
  export let href = "";
</script>

<figure class="flex flex-col w-full h-96 mb-12">
  <img
    src={src}
    class="h-96 w-auto object-contain"
    alt=""
  />
  <figcaption
    class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400"
  >
    <a
      class="text-blue-600"
      href={href}
      target="_blank"
      >origin</a
    >
  </figcaption>
</figure>

<style></style>
