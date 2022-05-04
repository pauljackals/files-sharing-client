<template>
    <div id="login">
        <h1>log in</h1>
        <UserForm @submitChain="logIn"/>
    </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue'
import { mapActions, mapState } from 'vuex'
import { STORE, VIEW } from '@/config/constants'
import router from '@/router'

const {DIRECTORY_VIEW} = VIEW

export default {
    name: VIEW.LOGIN_VIEW,
    components: { UserForm },
    methods: {
        ...mapActions({
            logInAction: STORE.ACTIONS.LOG_IN
        }),
        logIn({username, password}) {
            console.log(username, password);
            this.logInAction({username, password})
                .then(() => router.push({name: DIRECTORY_VIEW}))
                .catch(() => {})
        }
    },
    computed: {
        ...mapState({
            user: STORE.STATE.USER
        })
    },
    created() {
        if(this.user) {
            this.$router.push({name: DIRECTORY_VIEW})
        }
    }
}
</script>

<style scoped>
#login {
    background-color: lightgreen;
}
h1 {
    margin-top: 0;
}
</style>
