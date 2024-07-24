<template>
   <div>
     <h1>rick & morty</h1>
     <FiltrarPorStatus /> 
     <FiltrarPorNombre />
     <ListaPersonajes />
   </div>
</template>

<script>
import FiltrarPorNombre from './components/FiltrarPorNombre.vue';
import FiltrarPorStatus from './components/FiltrarPorStatus.vue';
import ListaPersonajes from './components/ListaPersonajes.vue';


export default {
  name: 'App',
  components: {
     ListaPersonajes,
     FiltrarPorNombre,
     FiltrarPorStatus
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  :root {
    --background-body: #23282f;
    --background-card: #2c3e44;
    --text-white: #ffffff;
    --text-gray: #c1c1c1;
    --text-orange: #ff9700;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    background-color: var(--background-body);
    color: var(--text-white);
    font-family: "Kanit", sans-serif;
  }
  h1 {
    margin-bottom: 3rem;
    text-align: center;
  }
  .container {
    width: 980px;
    max-width: 90%;
    margin: 5rem auto;
  }
  img {
    width: 100%;
  }
</style>
