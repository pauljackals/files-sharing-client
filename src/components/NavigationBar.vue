<template>
    <nav>
        <div class="nav-part"></div>
        <div class="nav-part">
            <router-link :to="directoryView" class="nav-title">Files Sharing</router-link>
        </div>
        <div v-if="!user" class="nav-part">
            <router-link :to="loginView">
                <button>login</button>
            </router-link>
        </div>
        <div v-else class="nav-part">
            <span class="nav-username">{{user.username}}</span>
            <router-link v-if="user.admin" :to="adminView">
                <button>admin</button>
            </router-link>
            <LogoutButtonVue />
        </div>
    </nav>
    <div id="nav-dummy"></div>
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
            loginView: {name: VIEW.LOGIN_VIEW},
            adminView: {name: VIEW.ADMIN_VIEW}
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
nav, #nav-dummy {
    height: 70px;
}
#nav-dummy {
    margin-bottom: 50px;
}
nav {
    background-color: green;
    color: black;
    display: flex;
    align-items: center;
    position: fixed;
    width: 100%;
}
.nav-part {
    flex: 1;
}
.nav-part > *:not(:first-child) {
    margin-left: 30px;
}
.nav-title {
    font-size: 40px;
    font-weight: bold;
}
button {
    background-color: black;
    color: green;
    font-size: 20px;
}
.nav-username {
    font-size: 20px;
    font-weight: bold;
    font-style: italic;
}
</style>
