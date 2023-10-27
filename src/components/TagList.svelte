<script lang="ts">
  export let tags: string[];
</script>

<div class="flex mb-6 overflow-x-scroll sm:overflow-hidden scroll-style-spetial">
  {#each tags as tag}
    <a class="ml-4 first:ml-0" href={`/?tag=${tag}`}>
      <div
        class="text-xs inline-flex items-center font-medium leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 cursor-pointer"
      >
        {tag}
      </div>
    </a>
  {/each}
</div>

<style></style>
