<script lang="ts">
  import { format_date } from "@helpers";

  export let date: string;

  const date_f = format_date(date);

</script>

<div class="flex items-center">
  <div class="mr-2">
    <svg
      class="fill-gray-600"
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 1H18V4H6V1H4C2.9 1 2 1.9 2 3V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V3C22 1.9 21.1 1 20 1zM20 20H4V10h16V20z"
      />
    </svg>
  </div>
  <span class="text-xs text-gray-400 italic uppercase">
    <dl>
      <dt class="sr-only">Published on</dt>
      <dd>
        <time datetime={date_f.iso}>{date_f.print}</time>
      </dd>
    </dl>
  </span>
</div>

<style></style>
