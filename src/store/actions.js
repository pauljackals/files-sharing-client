import { STORE } from "@/config/constants";
import http from "@/services/http";

export default {
    [STORE.ACTIONS.FETCH_ME]({commit}) {
        return http.fetchMe()
            .then(response => {
                const {user} = response.bodyJson
                commit(STORE.MUTATIONS.SET_DIRECTORY, {user})
            })
    },
    [STORE.ACTIONS.FETCH_DIRECTORY]({commit}) {
        return http.fetchDirectory()
            .then(response => {
                const {directory} = response.bodyJson
                commit(STORE.MUTATIONS.SET_DIRECTORY, {directory})
            })
    }
}
