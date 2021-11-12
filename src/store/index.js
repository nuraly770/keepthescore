import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import ScoreApi from '@/scripts/scoreApi'
export default createStore({
  state: {
    session: false,
    playersList: {}
  },
  mutations: {
    stateUpdater (state, payload) {
      state[payload.name] = payload.value
    },
    // enableProgressBar (state) {
    //   state.progressBar = true
    // },
    // disableProgressBar (state) {
    //   state.progressBar = false
    //   state.upDownloadPercentage = 0
    // },
    // enableNotifications (state, message) {
    //   state.notifications = message
    // },
    // disableNotifications (state) {
    //   state.notifications = ''
    // },
    // pushFileProcessing (state, payload) {
    //   state.fileProcessing.push(payload)
    // },
    // logOut (state) {
    //   state.user.loggedIn = false
    // },
    // logIn (state) {
    //   state.user.loggedIn = true
    // }
  },
  getters: {
    getFileListValue: (state) => {
      return state.fileList
    }
  },
  actions: {
    getBoard ({ commit }) {
      const scoreApi = new ScoreApi()
      scoreApi.getBoard().then(res =>{
        commit('stateUpdater', { name: 'playersList', value: res.players })
      })
    }
    // updateUpDownloadPercentageAction ({ commit }, percent) {
    //   commit('stateUpdater', { name: 'upDownloadPercentage', value: percent })
    // },
    // uploadFilesCountAction ({ commit }, count) {
    //   commit('stateUpdater', { name: 'uploadFilesCount', value: count })
    // },
    // filterList ({ commit }, filterValue) {
    //   const deNetStorage = new DeNetStorage(this.state.apiUrl)
    //   deNetStorage.infoDir(this.state.selectedDirKey).then(result => {
    //     result = result.filter(item => item.name.toLowerCase().indexOf(filterValue) > -1)
    //     commit('stateUpdater', { name: 'fileList', value: result })
    //   })
    // },
    // sortList ({ commit }, prop) {
    //   const deNetStorage = new DeNetStorage(this.state.apiUrl)
    //   deNetStorage.infoDir(this.state.selectedDirKey).then(result => {
    //     if (prop === 'type') {
    //       for (const x of result) {
    //         if (x.isFolder === false) {
    //           const file = x.name.split('/').pop()
    //           const fileArray = [file.substr(0, file.lastIndexOf('.')), file.substr(file.lastIndexOf('.') + 1, file.length)]
    //           x.type = fileArray[1]
    //         } else {
    //           x.type = ''
    //         }
    //       }
    //       result = result.sort((a, b) => (a.type > b.type) ? 1 : -1)
    //       commit('stateUpdater', { name: 'fileList', value: result })
    //     } else {
    //       result = result.sort((a, b) => (a[prop] > b[prop]) ? 1 : -1)
    //       commit('stateUpdater', { name: 'fileList', value: result })
    //     }
    //   })
    // }
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
      paths: ['session']
    })
  ]
})
