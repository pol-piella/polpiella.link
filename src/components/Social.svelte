<script lang="ts">
  export let url: string;
  export let icon: string;
  export let title: string;
  export let background: string;
</script>

<div class={`${background} py-3 hover:bg-opacity-80 transition-colors not-prose`}>
  <a href={url} class="w-full flex justify-center items-center gap-3">
    <img class="aspect-square w-6" src={icon} alt={`Social media icon for ${title}`} />
    <p class="text-white">{title}</p>
  </a>
</div>
