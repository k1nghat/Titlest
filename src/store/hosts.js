// import { make } from "vuex-pathify";
import * as types from "./mutation-types";

const state = {
    hosts: [
        {
          id: 0,
          date: undefined,
          hostState: true,
          hostName: "www.google.com",
          userTitle: " - Titlest",
          defaultTitle: undefined,
          originalTabTitles: {},
          isAppended: true,
          hostBindings: [],
        },
        {
          id: 1,
          date: undefined,
          hostState: false,
          hostName: "discordapp.com",
          userTitle: " - Titlest",
          defaultTitle: undefined,
          originalTabTitles: {},
          isAppended: false,
          hostBindings: [],
        },
        {
          id: 2,
          date: undefined,
          hostState: true,
          hostName: "www.stackoverflow.com",
          userTitle: " - Titlest",
          defaultTitle: undefined,
          originalTabTitles: {},
          isAppended: true,
          hostBindings: [],
        },
        {
          id: 3,
          date: undefined,
          hostState: true,
          hostName: "open.spotify.com",
          userTitle: " - Titlest",
          defaultTitle: undefined,
          originalTabTitles: {},
          isAppended: true,
          hostBindings: [],
        },
        {
          id: 4,
          date: undefined,
          hostState: true,
          hostName: "www.github.com",
          userTitle: " - Titlest",
          defaultTitle: undefined,
          originalTabTitles: {},
          isAppended: true,
          hostBindings: [],
        },
      ],
};

const getters = {
  getHosts: state => state.hosts,
  getHostIndexByHostName: state => hostName => state.hosts.findIndex(host => host.hostName === hostName),
  getHostByHostName: state => hostName => state.hosts.find(host => host.hostName === hostName)
};

const actions = {
  setHostProperty({ commit, getters }, payload) {
    // i cant figure out why this is happening. cross talk between popup
    // and background scripts and a weird payload property is added to the
    // action payload unnecessarily. if that property is here i return
    // from the action. :shruggie:
    if (payload.payload) return;
    
    // console.log(`LOG: setHostProperty(11) -> payload: `, payload);
    // console.log(`LOG: setHostProperty(11) -> payload: `, JSON.stringify(payload));
  payload.index = getters.getHostIndexByHostName(payload.host.hostName);
  // if (payload.index === undefined) {
  //   payload.index = getters.getHostIndexByHostName(payload.value);
  // };
  console.log(`LOG: setHostProperty(12) -> payload: `, payload);
  // console.log(`LOG: setHostProperty(12) -> payload: `, JSON.stringify(payload));
    
    commit(payload.mutation, payload);
  },
  // setHostProperty2({ commit, getters }, payload) {
  //   console.log(`LOG: setHostProperty(21) -> payload: `, payload);
  
  //   payload.index = getters.getHostIndexByHostName(payload.host.hostName);
  //   // if (payload.index === undefined) {
  //   //   payload.index = getters.getHostIndexByHostName(payload.value);
  //   // };
  //   console.log(`LOG: setHostProperty(22) -> payload: `, payload);
      
  //     commit(payload.mutation, payload);
  //   }
};

const mutations = {
    // ...make.mutations(state),
  [types.SET_USER_TITLE](state, payload) {
    state.hosts[payload.index].userTitle = payload.value
  },
  [types.SET_IS_APPENDED](state, payload) {
    state.hosts[payload.index].isAppended = payload.value
  },
  [types.SET_HOST_STATE](state, payload) {
  // console.log(`LOG: SET_HOST_STATE payload: `, payload);
  state.hosts[payload.index].hostState = payload.value
  // console.log(`LOG: SET_HOST_STATE state: `, state);
  },
  [types.SET_DEFAULT_TITLE](state, payload) {
  console.log(`LOG: SET_DEFAULT_TITLE payload: `, payload);
    state.hosts[payload.index].defaultTitle = payload.value;
  },
  [types.SET_ORIGINAL_TAB_TITLE](state, payload) {
  console.log(`LOG: SET_ORIGINAL_TAB_TITLE payload: `, payload);
  // console.log(`LOG: SET_ORIGINAL_TAB_TITLE payload: `, JSON.stringify(payload));
    state.hosts[payload.index].originalTabTitles[payload.value.tabId] = payload.value.originalTabTitle;
  }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}