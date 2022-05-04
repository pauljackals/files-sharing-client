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
    }
}
