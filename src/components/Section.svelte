<script lang="ts">
  export let aria: string = "";
</script>

<section aria-label={aria}>
  <slot />
</section>

<style></style>
