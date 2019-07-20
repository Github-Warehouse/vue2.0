import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 3
}

const mutations = {
    add(state, number) {
        state.count += number
    },
    reduce(state) {
        state.count--
    }
}

const getters = {
    count(state){
        return state.count+=100
    }
}

const moduleA={
    state,
    mutations,
    getters
}

export default new Vuex.Store({
    modules:{
        a:moduleA
    }
})