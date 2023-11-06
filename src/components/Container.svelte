<script lang='ts'>
  export let top = 0;
  export let bottom = 0;
</script>

<div class={`mt-${top} mb-${bottom}`}>
  <slot />
</div>

<style></style>
