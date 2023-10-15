<!-- ProjectCard.svelte -->
<script lang="ts">
    export let name: string;
    export let image: string;
    export let repoURL: string;
    export let projectURL: string;
  </script>
  
  <div class="Card">
    <h1>{ name }</h1>
    <slot></slot>
  </div>
  
  <style>
    .Card {
      background-color: #212223;
      width: 60vh;
      height: 35vh;
      border-radius: 1.5vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 1vh;
    }

    @media (max-width: 728px) {
        .Card {
            width: 50vh;
        }
    }
  </style>
  