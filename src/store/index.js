import { STORE } from '@/config/constants'
import { createStore } from 'vuex'
import mutations from './mutations'
import actions from './actions'

export default createStore({
    state: {
        [STORE.STATE.USER]: null,
        [STORE.STATE.DIRECTORY]: null,
        [STORE.STATE.CODES]: null,
        [STORE.STATE.USERS]: null
    },
    mutations,
    actions
})
