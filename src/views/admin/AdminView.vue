<template>
    <div id="admin">
        <h1>Admin</h1>
        <div class="admin-pages">
            <router-link :to="adminCodeView">codes</router-link>
            <router-link :to="adminUserView">users</router-link>
        </div>
        <router-view/>
    </div>
</template>

<script>
import { STORE, VIEW } from '@/config/constants'
import { mapState } from 'vuex'

export default {
    name: VIEW.ADMIN_VIEW,
    data(){
        return {
            adminCodeView: {name: VIEW.ADMIN_CODE_VIEW},
            adminUserView: {name: VIEW.ADMIN_USER_VIEW}
        }
    },
    computed: {
        ...mapState({
            user: STORE.STATE.USER
        })
    },
    created() {
        if(!this.user) {
            return this.$router.push({name: VIEW.LOGIN_VIEW})
        } else if (!this.user.admin) {
            return this.$router.push({name: VIEW.DIRECTORY_VIEW})
        }
    }
}
</script>

<style scoped>
.admin-pages {
    margin-bottom: 20px;
}
.admin-pages > *:not(:first-child) {
    margin-left: 20px;
}
.admin-pages a {
    font-size: 20px;
    text-decoration: none;
    padding: 5px;
}
.admin-pages a.router-link-exact-active {
    background-color: green;
    color: black;
}
.admin-page {
    border: 1px solid green;
    width: 700px;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
}
</style>
