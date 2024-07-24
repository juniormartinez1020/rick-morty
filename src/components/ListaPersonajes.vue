<template>
  <section>
    <div class="personajes">
        <div 
        class="elemento__personaje"
        v-for="personaje in personajes"
        :key="personaje.id"
        >
           <TarjetaPersonaje 
            :personaje="personaje"
           />
        </div>
    </div>
  </section>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import TarjetaPersonaje from './TarjetaPersonaje.vue';

export default {
    components: {
        TarjetaPersonaje
    },
    setup() {
        const store = useStore()
        const personajes = computed(() => {
            return store.state.filtrarPersonajes
        })

        onMounted(() => {
            store.dispatch('getPersonajes')
        })

        return {
            personajes
        }
    }
}
</script>

<style>
 .personajes {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    margin: 3rem 0;
 }
</style>