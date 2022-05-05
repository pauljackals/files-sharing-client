<template>
    <button @click="logOut">log out</button>
</template>

<script>
import { COMPONENT, STORE, VIEW } from '@/config/constants'
import { mapActions } from 'vuex'
import router from '@/router'

export default {
    name: COMPONENT.LOGOUT_BUTTON,
    methods: {
        ...mapActions({
            logOutAction: STORE.ACTIONS.LOG_OUT
        }),
        logOut() {
            this.logOutAction()
                .then(() => {
                    router.push({name: VIEW.LOGIN_VIEW})
                })
                .catch(() => {})
        }
    }
}
</script>

<style scoped>

</style>
