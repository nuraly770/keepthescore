import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import ScoreApi from '@/scripts/scoreApi'
export default createStore({
  state: {
    userName: null,
    session: false,
    apiRes: {},
    playersList: {},
    player: {},
    place: {},
    firstPlaceScore: 0,
    publicKey: '',
    privateKey: '',
    loaded: false,
    gender: 'male',
    counterNumber: 0,
    selectedTab: null
  },
  mutations: {
    stateUpdater (state, payload) {
      state[payload.name] = payload.value
    },
  },
  getters: {},
  actions: {
    getBoard ({ commit, state, dispatch }) {
      const scoreApi = new ScoreApi(state.publicKey, state.privateKey)
      scoreApi.getBoard().then(res =>{
        commit('stateUpdater', { name: 'playersList', value: res.players })
        commit('stateUpdater', { name: 'apiRes', value: res })
        commit('stateUpdater', { name: 'loaded', value: true })
        dispatch('getPlayerData')
      })
    },
    addScore ({ commit, state, dispatch }) {
      (async () => {
        const scoreApi = new ScoreApi(state.publicKey, state.privateKey)
        await scoreApi.addScore(state.player.id, state.counterNumber)
        scoreApi.getBoard().then(res => {
          commit('stateUpdater', { name: 'playersList', value: res.players })
          commit('stateUpdater', { name: 'apiRes', value: res })
          commit('stateUpdater', { name: 'loaded', value: true })
          commit('stateUpdater', { name: 'counterNumber', value: 0 })
          dispatch('getPlayerData')
        })
      })()
    },
    getPublicKey ({ commit }) {
      const url = document.location.href
      const key = url.split('#?sav=')[1]
      let pbKey = key.split('|')[0]
      if (pbKey.includes('%7C')) {
        pbKey = key.split('%7C')[0]
      }
      commit('stateUpdater', { name: 'publicKey', value: pbKey })
    },
    getPrivateKey ({ commit }) {
      const url = document.location.href
      const key = url.split('#?sav=')[1]
      let pKey = key.split('|')[1]
      if (!pKey && key.includes('%7C')) {
        pKey = key.split('%7C')[1]
      }
      commit('stateUpdater', { name: 'privateKey', value: pKey })
    },
    getPlayerData ({ commit, state }) {
      const players = state.apiRes.players
      const index = players.findIndex(c => c.player_name === state.userName)
      commit('stateUpdater', { name: 'player', value: players[index]})
    }
  },
  modules: {
  },
  /* blacklisted states will be cleared on page reload */
  plugins: [
    // createPersistedState({
    //   storage: window.sessionStorage,
    //   paths: ['user', 'fileList']
    // }),
    createPersistedState({
      storage: window.localStorage,
      paths: ['userName', 'session', 'player', 'place', 'gender', 'counterNumber', 'selectedTab']
    })
  ]
})
