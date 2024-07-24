<template>
  <div class="search">
    <input 
    type="text"
    placeholder="buscar por nombre"
    v-model="nombre"
    @keyup="filtrar()"
    >
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore()
    const nombre = ref('')

    const filtrar = () => {
        store.dispatch('filtrarPorNombre', nombre.value)
    }

    return {
        nombre,
        filtrar
    }
  }
}
</script>

<style lang="scss">
  .search {
    width: 400px;
    margin: 3rem auto 0;
    input {
        height: 52px;
        width: 400px;
        border: none;
        border-radius: 10px;
        padding: 0 0.5rem;
    }
  }
</style>