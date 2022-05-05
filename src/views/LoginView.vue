<template>
    <div id="login">
        <UserForm @submitChain="logIn" :register="false"/>
        <router-link :to="registerView" class="register">
            New? Register now!
        </router-link>
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
    data(){
        return {
            registerView: {name: VIEW.REGISTER_VIEW}
        }
    },
    methods: {
        ...mapActions({
            logInAction: STORE.ACTIONS.LOG_IN
        }),
        logIn({username, password}) {
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
.register {
    width: 200px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    font-style: italic;
}
</style>
