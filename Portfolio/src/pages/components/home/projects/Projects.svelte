<script lang="ts">
    import { onMount } from "svelte";
    import Projectcard from "../projectcard/Projectcard.svelte";
  
    type Project = {
        id: number;
        name: string;
        html_url: string;
        homepage: string | null;
        image: string;
        repo_url: string;
        project_url: string;
    };
  
    let Title: string = "<Projects/>";
    let projects: Project[] = [];
    let hiddenProjects: string[] = ["Naval-Battle", "LinuxMistery00", "ProgramadorOrientadoaObjetoMain", "Indalo", "Windows95", "Portfolio", "To-Do-List", "E-Commerce", "Tic-Tac-Toe", "Curso-de-Java-RocketSeat", "TextsForYou"];
  
    const openRepository = (url: string) => {
        window.open(url, '_blank');
    };
  
    const openProject = (url: string | null) => {
        if (url) {
            window.open(url, '_blank');
        }
    };
  
    onMount(() => {
        // Fetch data and populate the 'projects' array
        fetch('https://api.github.com/users/LinuxMistery00/repos')
            .then(response => response.json())
            .then((data: Project[]) => {
                projects = data.map((project: Project) => {
                    let faviconUrl: string | null = project.homepage ? `${project.homepage}/favicon.ico` : null;
                    let technologies: string[] = [];
  
                    switch (project.name) {
                        case 'Finance':
                            technologies = ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'NodeJS', 'MongoDB'];
                            break;
                        case 'Calc':
                            technologies = ['HTML5', 'SASS', 'TypeScript', 'Angular'];
                            break;
                        // Adicione cases para outros projetos aqui
                    }
  
                    return {
                        ...project,
                        faviconUrl,
                        technologies,
                    };
                });
            });
    });
</script>
  
<main>
    <h1 class="Title">{Title}</h1>
    <div class="Projects">
        {#each projects as project (project.id)}
            {#if !hiddenProjects.includes(project.name)}
                <Projectcard name={project.name} image={project.image} repo_url={project.html_url} project_url={project.homepage}>
                    <div class="Buttons">
                        <button on:click={() => openRepository(project.html_url)}>Open Repo</button>
                        <button on:click={() => openProject(project.homepage)}>Open Project</button>
                    </div>
                </Projectcard>
            {/if}
        {/each}
    </div>
</main>
  
<style>
    .Title {
        margin-top: 80vh;
        text-align: center;
        font-size: 6vh;
        color: #8844ee;
    }
  
    .Projects {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 2vh;
    }

    .Buttons button {
        width: 30vh;
        height: 5vh;
        font-size: 3vh;
        border: 0;
        border-radius: 3vh;
        color: #f1f2f3;
        background-color: #8844ee;
    }

    .Buttons {
        display: flex;
    }
</style>
