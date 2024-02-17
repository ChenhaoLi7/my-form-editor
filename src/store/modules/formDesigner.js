
const state = {
    designerData: {},
    // Additional designer state if needed
  };
  
  const mutations = {
    UPDATE_DESIGNER_DATA(state, designerData) {
      state.designerData = designerData;
    },
    // Additional designer mutations if needed
  };
  
  const actions = {
    updateDesignerData({ commit }, designerData) {
      commit('UPDATE_DESIGNER_DATA', designerData);
    },
    // Additional designer actions if needed
  };
  
  const getters = {
    designerData: state => state.designerData
    // Additional designer getters if needed
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
  };
  