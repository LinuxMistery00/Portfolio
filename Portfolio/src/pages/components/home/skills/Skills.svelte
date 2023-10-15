<main>
    <h1 class="Title">{ Title }</h1>
    <div class="Skills">
        <h1 class="InterTitle">Front-End</h1>
        <Saos animation={"from-right 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
        <div class="FrontEnd">
            <Skillcard>
                <i class="devicon-html5-plain devicon"></i>
            </Skillcard>
            <Skillcard>
                <i class="devicon-css3-plain devicon"></i>
            </Skillcard>
            <Skillcard>
                <i class="devicon-javascript-plain devicon"></i>
            </Skillcard>
            <Skillcard>
                <i class="devicon-typescript-plain devicon"></i>
            </Skillcard>
            <Skillcard>
                <i class="devicon-sass-plain devicon"></i>
            </Skillcard>
            <Skillcard>
                <i class="devicon-bulma-plain devicon"></i>
            </Skillcard>
            <Skillcard>
                <i class="devicon-bootstrap-plain devicon"></i>
            </Skillcard>
            <Skillcard>
                <i class="devicon-react-plain devicon"></i>
            </Skillcard>
            <Skillcard>
                <i class="devicon-nextjs-plain devicon"></i>
            </Skillcard>
            <Skillcard>
                <i class="devicon-angularjs-plain devicon"></i>
            </Skillcard>
            <Skillcard>
                <i class="devicon-vuejs-plain devicon"></i>
            </Skillcard>
            <Skillcard>
                <i class="devicon-svelte-plain devicon"></i>
            </Skillcard>
        </div>
    </Saos>
        <h1 class="InterTitle">Back-End</h1>
        <Saos animation={"from-left 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
        <div class="BackEnd">
            <Skillcard>
                <i class="devicon-nodejs-plain devicon"></i>
            </Skillcard>
            <Skillcard>
                <i class="devicon-express-original devicon"></i>
            </Skillcard>
            <Skillcard>
                <i class="devicon-flask-plain devicon"></i>
            </Skillcard>
            <Skillcard>
                <i class="devicon-nestjs-plain devicon"></i>
            </Skillcard>
            <Skillcard>
                <i class="devicon-mongodb-plain devicon"></i>
            </Skillcard>
            <Skillcard>
                <i class="devicon-postgresql-plain devicon"></i>
            </Skillcard>
            <Skillcard>
                <i class="devicon-sequelize-plain devicon"></i>
            </Skillcard>
        </div>
    </Saos>
        <h1 class="InterTitle">Others</h1>
        <Saos animation={"from-up 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
        <div class="Others">
            <Skillcard>
                <i class="devicon-java-plain devicon"></i>
            </Skillcard>
            <Skillcard>
                <i class="devicon-python-plain devicon"></i>
            </Skillcard>
            <Skillcard>
                <i class="devicon-rust-plain devicon"></i>
            </Skillcard>
        </div>
    </Saos>
</div>
</main>

<style>
@keyframes -global-from-right {
  0% {
    transform: translateX(200vw);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes -global-from-left {
  0% {
    transform: translateX(-200vw);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes -global-from-up {
  0% {
    transform: translateY(200vw);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
    
    .devicon {
        margin-left: 2.5vh;
        margin-top: 5vh;
        font-size: 15vh;
        position: absolute;
    }

    .Title {
        margin-top: 80vh;
        font-size: 6vh;
        text-align: center;
        color: #8844ee;
    }

    .Skills {
        display: flex;
        flex-direction: column;
        gap: 2vh;
    }

    .FrontEnd, .BackEnd, .Others {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 2vh;
    }

    .InterTitle {
        text-align: center;
    }
</style>

<script>
    import Saos from "saos";

    const Title = '<Skills/>'

    import Skillcard from "../skillcard/Skillcard.svelte";
</script>