import Vue from 'vue'
import Vuex from 'vuex'
import request from './assets/js/request'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            token: ''
        },
        language: localStorage.getItem('language') || 'zh'
    },
    mutations: {
        SET_LANGUAGE: (state, language) => {
            state.language = language
            localStorage.setItem('language', language)
        },
        SET_USER: (state, user) => {
            state.user = user
        },
        CLEAR_USER: (state) => {
            state.user = {}
        }
    },
    actions: {
        setLanguage({ commit }, language) {
            commit('SET_LANGUAGE', language)
        },
        Login({commit}, userInfo) {
            return new Promise((resolve, reject) => {
                request({
                    url: '/login',
                    method: 'post',
                    params: {
                        account: userInfo.account,
                        password: userInfo.password
                    }
                }).then((response) => {
                    commit('SET_USER', response)
                    resolve(response)
                })
            })
        },
        LogOut({commit}) {
            commit('CLEAR_USER')
        }
    },
    getters: {
        user: state => {
            return state.user;
        },
        language: state => {
            return state.language;
        }
    }

})
