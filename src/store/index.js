import { createStore } from 'vuex'

export default createStore({
  state: {
    personajes: [],
    filtrarPersonajes: []
  },
  getters: {
  },
  mutations: {
    setPersonajes(state, payload) {
      state.personajes = payload
    },
    setfiltrarPersonajes(state, payload) {
      state.filtrarPersonajes = payload
    }
  },
  actions: {
    async getPersonajes({commit}) {
      try {
        const res = await fetch('https://rickandmortyapi.com/api/character')
        const data = await res.json()
        commit('setPersonajes', data.results)
        commit('setfiltrarPersonajes', data.results)
      } catch (error) {
        console.error(error)
      }
    },
    filtrarPorStatus({commit, state}, status) {
      const results = state.personajes.filter((personaje) => {
        return personaje.status.includes(status)
      })
      commit('setfiltrarPersonajes', results)
    },
    filtrarPorNombre({commit, state}, name) {
      const formaNombre = name.toLowerCase()
      const results = state.personajes.filter((personaje) => {
        const nombrePersonaje = personaje.name.toLowerCase()

        if (nombrePersonaje.includes(formaNombre)) {
          return personaje
        }
      })
      commit('setfiltrarPersonajes', results)
    }
  },
  modules: {
  }
})
