<script lang="ts">
  import { onMount } from "svelte";
  import Prism from "prismjs";
  import "prismjs/plugins/line-numbers/prism-line-numbers";
  import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace";
  import "prismjs/components/prism-zig";

  export let language: string = "javascript";
  export let code: string = "";
  
  onMount(() => {
    Prism.highlightAll();
  });
</script>

<pre class={`language-${language} line-numbers`}>
  <code class={`language-${language}`}>
    {@html Prism.highlight(code, Prism.languages[language], language)}
  </code>
</pre>

<style></style>
