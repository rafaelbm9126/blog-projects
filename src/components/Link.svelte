<script lang='ts'>
  export let href: string | undefined = undefined;
  export let arialabel: string | undefined = undefined;
</script>

<a
  class='text-blue-300 underline'
  {href}
  aria-label={arialabel}
  target='_blank'
>
  <slot />
</a>

<style></style>
