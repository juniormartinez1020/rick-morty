<template>
  <div class="filtrar">
     <div class="elemento" @click="filtrar('')">
        todos
     </div>
     <div class="elemento" @click="filtrar('Alive')">
         Alive
     </div>
     <div class="elemento" @click="filtrar('Dead')">
        Dead
     </div>
     <div class="elemento" @click="filtrar('unknown')">
        Unknown
     </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore()

        const filtrar = ((status) => {
            store.dispatch('filtrarPorStatus', status)
        })

        return {
            filtrar
        }
    }
}
</script>

<style lang="scss">
 .filtrar {
     width: 400px;
     margin: 0 auto;
     display: grid;
     grid-template-columns: repeat(4, 1fr);
     border-radius: 10px;
     overflow: hidden;
     .elemento {
        padding: 1rem 0.5px;
        background-color: var(--background-card);
        text-align: center;
        cursor: pointer;
        &:hover {
            color: var(--text-orange);
            }
        }
    }
</style>