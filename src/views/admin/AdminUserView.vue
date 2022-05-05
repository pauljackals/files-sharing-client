<template>
    <div id="admin-user" class="admin-page">
        <UserList :users="users"/>
    </div>
</template>

<script>
import { STORE, VIEW } from '@/config/constants'
import { mapActions, mapMutations, mapState } from 'vuex'
import UserList from '@/components/user/UserList.vue'

export default {
    components: { UserList },
    name: VIEW.ADMIN_USER_VIEW,
    computed: {
        ...mapState({
            users: STORE.STATE.USERS
        })
    },
    methods: {
        ...mapActions({
            fetchUsersAction: STORE.ACTIONS.FETCH_USERS
        }),
        ...mapMutations({
            clearUsers: STORE.MUTATIONS.CLEAR_USERS
        })
    },
    created() {
        this.fetchUsersAction()
            .catch(() => {})
    },
    unmounted() {
        this.clearUsers()
    }
}
</script>

<style scoped>

</style>
