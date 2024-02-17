const state = {
  formFields: [],
  selectedField: null
};

const mutations = {
  ADD_FIELD(state, field) {
    state.formFields.push(field);
  },
  SELECT_FIELD(state, fieldId) {
    state.selectedField = state.formFields.find(field => field.id === fieldId) || null;
  },
  UPDATE_FIELD(state, { fieldId, newProps }) {
    const field = state.formFields.find(field => field.id === fieldId);
    if (field) {
      Object.assign(field, newProps);
    }
  },
  REMOVE_FIELD(state, fieldId) {
    const index = state.formFields.findIndex(field => field.id === fieldId);
    if (index !== -1) {
      state.formFields.splice(index, 1);
    }
  }
};

const actions = {
  addField({ commit }, field) {
    commit('ADD_FIELD', field);
  },
  selectField({ commit }, fieldId) {
    commit('SELECT_FIELD', fieldId);
  },
  updateField({ commit }, { fieldId, newProps }) {
    commit('UPDATE_FIELD', { fieldId, newProps });
  },
  removeField({ commit }, fieldId) {
    commit('REMOVE_FIELD', fieldId);
  }
};

const getters = {
  formFields: state => state.formFields,
  selectedField: state => state.selectedField
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
