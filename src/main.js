import Vue from 'vue'
import App from './App.vue'
import VueCompositionAPI from '@vue/composition-api'
import Vuex from 'vuex'
import produce from "immer"

Vue.use(Vuex);
Vue.use(VueCompositionAPI);

const store = new Vuex.Store({
  state: {
    count: 10,
    obj: {
      hello_world: 'hello-world',
    },
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setObjBasic(state, { k, v }) {
      state.obj = {
        ...state.obj,
        [k]: v,
      };
    },
    setObjImmer(state, { k, v }) {
      // saving a line of code "...state.obj" 
      state.obj = produce(state.obj, (draftState) => {
        draftState[k] = v;
      });
    },
  },
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
