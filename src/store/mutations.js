import { STORE } from "@/config/constants";

const {SET_USER} = STORE.MUTATIONS

const removeElement = (elements, elementToRemove) => {
    const index = elements.findIndex(element => element._id===elementToRemove._id)
    elements.splice(index, 1)
}

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

    [STORE.MUTATIONS.CLEAR_DIRECTORY](state) {
        state[STORE.STATE.DIRECTORY] = null
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
        removeElement(state[STORE.STATE.CODES], code)
    },

    [STORE.MUTATIONS.SET_USERS](state, {users}) {
        state[STORE.STATE.USERS] = users
    },
    
    [STORE.MUTATIONS.CLEAR_USERS](state) {
        state[STORE.STATE.USERS] = null
    },

    [STORE.MUTATIONS.REMOVE_USER](state, {user}) {
        removeElement(state[STORE.STATE.USERS], user)
    },
}
