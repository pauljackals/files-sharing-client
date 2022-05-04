<template>
    <nav>
        <router-link :to="directoryView">Files Sharing</router-link>
        <span v-if="user">{{user.username}}</span>
        <LogoutButtonVue v-if="user"/>
        <router-link v-else :to="loginView">login</router-link>
    </nav>
</template>

<script>
import { mapState } from 'vuex'
import { COMPONENT, STORE, VIEW } from '@/config/constants'
import LogoutButtonVue from './LogoutButton.vue'

export default {
    name: COMPONENT.NAVIGATION_BAR,
    components: {
        LogoutButtonVue
    },
    data(){
        return {
            directoryView: {name: VIEW.DIRECTORY_VIEW},
            loginView: {name: VIEW.LOGIN_VIEW}
        }
    },
    computed: {
        ...mapState({
            user: STORE.STATE.USER
        })
    }
}
</script>

<style scoped>
nav {
    background-color: lightskyblue;
}
</style>
