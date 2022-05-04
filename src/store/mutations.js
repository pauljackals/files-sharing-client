import { STORE } from "@/config/constants";

const {SET_USER} = STORE.MUTATIONS

export default {
    [SET_USER](state, {user}) {
        state[STORE.STATE.USER] = user
    },

    [STORE.MUTATIONS.CLEAR_USER](state) {
        state[STORE.STATE.USER] = null
    },
    
    [STORE.MUTATIONS.SET_DIRECTORY](state, {directory}) {
        state[STORE.STATE.DIRECTORY] = directory
    }
}
