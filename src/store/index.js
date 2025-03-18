import Vue from 'vue';
import { createStore } from 'vuex';

Vue.use(store);

// Create a new store instance.
const store = createStore({
    state () {
      return {
        count: 0
      }
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
})