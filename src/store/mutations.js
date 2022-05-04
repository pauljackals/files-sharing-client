import { STORE } from "@/config/constants";

export default {
    [STORE.MUTATIONS.SET_USER](state, {user}) {
        state[STORE.STATE.USER] = user
    },
    [STORE.MUTATIONS.SET_DIRECTORY](state, {directory}) {
        state[STORE.STATE.DIRECTORY] = directory
    }
}
