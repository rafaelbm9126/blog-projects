<script lang="ts">
  export let list: string[] = [];
</script>

<ul class="list-inside list-disc text-white">
  {#each list as item, _ (item)}
    <li>
      {item}
    </li>
  {/each}
</ul>

<style></style>
