<!-- App.svelte -->
<script>
  import { Router, Route } from "svelte-routing";
  import Home from "./pages/home/Home.svelte";
  import Scrollbar from "./components/scrollbar/Scrollbar.svelte";
</script>

<main>
  <Scrollbar/>
  <Router>
    <Route path="/" component={Home} />
  </Router>
</main>
