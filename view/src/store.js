import { createStore } from 'vuex';


const store = createStore({
    state: {
        counter: 10
    },
    getters: {
        counter: state => state.counter * 3
    },
    mutations: {
        decrement: state => state.counter--,
        increment: (state, num) => state.counter = state.counter + num,
    },
    actions: {
        decrement: ({ commit }) => commit('decrement'),
        increment: ({ commit }) => {
            setTimeout(() => {
                commit('increment', 3)
            }, 500)
        }
    },
});


export default store