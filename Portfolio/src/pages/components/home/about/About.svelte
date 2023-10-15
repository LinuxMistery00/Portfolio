<main>
    <h1 class="Title">{ Title }</h1>
    <Saos animation={"from-left 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
        <div class="About">
            <h2>Olá! Me chamo Eduardo Silva Barros e atualmenteestou trabalhando</h2> 
            <h2>em projetos pessoais e buscando aprender mais no mundo do Design,</h2>
            <h2>Programação e Desenvolvimento Pessoal. Pretendo no futuro cursar</h2>
            <h2>algum dos seguintes cursos: Ciência da computação, Sistemas de</h2>
            <h2>Informação, TI ou Engenharia de Software. Eu iniciei na progra-</h2>
            <h2>mação por meados de 2022 com a Linguagem Java, mas me senti des-</h2>
            <h2>animado por ter achado a programação difícil, devido ao Java ser</h2>
            <h2>uma Linguagem não muito fácil por ser orientada a objetos. No e-</h2>
            <h2>ntanto, depois voltei a estudar Programação com o curso Fullstack</h2>
            <h2>da OneBitCode, Hora de Codar, Cod3r e Curso Em Vídeo. No momento,</h2>
            <h2>não estou interessado que ninguém entre em contato comigo, inde-</h2>
            <h2>pendentemente do motivo.</h2>
        </div>
    </Saos>
</main>

<style>
@keyframes -global-from-left {
  0% {
    transform: rotateX(50deg) translateX(-200vw) skewX(-50deg);
    opacity: 1;
  }
  100% {
    transform: rotateX(0deg) translateX(0) skewX(0deg);
    opacity: 1;
  }
}

  .Title {
    margin-top: 80vh;
    text-align: center;
    font-size: 6vh;
    color: #8844ee;
  }

  .About h2 {
    font-size: 3vh;
    text-align: center;
  }
</style>

<script>
    import Saos from 'saos'
    
    const Title = '<About/>'
</script>