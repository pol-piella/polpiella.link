<script lang="ts">
  export let url: string;
  export let icon: string;
  export let title: string;
  export let background: string;
  export let text: string;
</script>

<div class={`${background} py-3 hover:bg-opacity-80 transition-colors`}>
  <a href={url} class="w-full flex justify-center items-center gap-3">
    <img class="aspect-square w-6" src={icon} />
    <p class="text-md text-white">{title}</p>
  </a>
</div>
