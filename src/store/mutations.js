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
    },

    [STORE.MUTATIONS.SET_CODES](state, {codes}) {
        state[STORE.STATE.CODES] = codes
    },
    
    [STORE.MUTATIONS.ADD_CODE](state, {code}) {
        state[STORE.STATE.CODES].unshift(code)
    },

    [STORE.MUTATIONS.CLEAR_CODES](state) {
        state[STORE.STATE.CODES] = null
    },

    [STORE.MUTATIONS.REMOVE_CODE](state, {code}) {
        const codes = state[STORE.STATE.CODES]
        const index = codes.findIndex(codeStore => codeStore._id===code._id)
        codes.splice(index, 1)
    }
}
