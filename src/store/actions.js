import { STORE } from "@/config/constants";
import http from "@/services/http";

const setUser = commit => response => {
    const {user} = response.bodyJson
    commit(STORE.MUTATIONS.SET_USER, {user})
}

export default {
    [STORE.ACTIONS.FETCH_ME]({commit}) {
        return http.fetchMe()
            .then(setUser(commit))
    },

    [STORE.ACTIONS.REGISTER]({commit}, {
        username,
        password,
        code
    }) {
        return http.register(username, password, code)
    },

    [STORE.ACTIONS.LOG_IN]({commit}, {
        username,
        password
    }) {
        return http.logIn(username, password)
            .then(setUser(commit))
    },

    [STORE.ACTIONS.LOG_OUT]({commit}) {
        return http.logOut()
            .then(commit(STORE.MUTATIONS.CLEAR_USER))
    },
    
    [STORE.ACTIONS.FETCH_DIRECTORY]({commit}) {
        return http.fetchDirectory()
            .then(response => {
                const {directory} = response.bodyJson
                commit(STORE.MUTATIONS.SET_DIRECTORY, {directory})
            })
    },

    [STORE.ACTIONS.FETCH_CODES]({commit}) {
        return http.fetchCodes()
            .then(response => {
                const {codes} = response.bodyJson
                codes.reverse()
                commit(STORE.MUTATIONS.SET_CODES, {codes})
            })
    },

    [STORE.ACTIONS.GENERATE_CODE]({commit}) {
        return http.generateCode()
            .then(response => {
                const {code} = response.bodyJson
                commit(STORE.MUTATIONS.ADD_CODE, {code})
            })
    },

    [STORE.ACTIONS.DESTROY_CODE]({commit}, {_id}) {
        return http.destroyCode(_id)
            .then(response => {
                const {code} = response.bodyJson
                commit(STORE.MUTATIONS.REMOVE_CODE, {code})
            })
    }
}
