
const state = {
    canvasLayout: [],
    // Additional canvas state if needed
  };
  
  const mutations = {
    SET_LAYOUT(state, layout) {
      state.canvasLayout = layout;
    },
    // Additional canvas mutations if needed
  };
  
  const actions = {
    setLayout({ commit }, layout) {
      commit('SET_LAYOUT', layout);
    },
    // Additional canvas actions if needed
  };
  
  const getters = {
    canvasLayout: state => state.canvasLayout
    // Additional canvas getters if needed
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
  };
  