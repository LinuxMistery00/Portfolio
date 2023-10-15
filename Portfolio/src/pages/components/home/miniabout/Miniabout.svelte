<script>
    const PurpleName = '<Linux/>'

    function ToGithub() {
        window.location.href = 'https://github.com/LinuxMistery00'
    }
</script>

<main>
    <div>
        <h1 class="Name">Eduardo Silva ou<br/> <span class="PurpleName">{ PurpleName }</span></h1><br/>
        <h1 on:click={ToGithub} class="devicon-github-original"></h1>
    </div>
</main>

<style>
 @-webkit-keyframes slide-top{0%{-webkit-transform:translateY(0);transform:translateY(0)}100%{-webkit-transform:translateY(-100px);transform:translateY(-100px)}}@keyframes slide-top{0%{-webkit-transform:translateY(0);transform:translateY(0)}100%{-webkit-transform:translateY(-100px);transform:translateY(-100px)}}

    .Name {
        text-align: center;
        margin-top: 30vh;
        font-size: 5vh;
        -webkit-animation:slide-top .4s both;animation:slide-top .4s both
    }

    .PurpleName {
        color: #8844ee;
    }

    .devicon-github-original {
        text-align: center;
        margin-top: -12vh;
        font-size: 5vh;
    }
</style>