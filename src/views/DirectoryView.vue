<template>
    <div id="directory">
        <h1>shared</h1>
        <ul>
            <li>dir1</li>
            <li>dir2</li>
        </ul>
    </div>
</template>

<script>
import { STORE, VIEW } from '@/config/constants'
import { mapActions, mapState } from 'vuex'

export default {
    name: VIEW.DIRECTORY_VIEW,
    computed: {
        ...mapState({
            user: STORE.STATE.USER
        })
    },
    methods: {
        ...mapActions({
            fetchDirectory: STORE.ACTIONS.FETCH_DIRECTORY
        })
    },
    created() {
        if(!this.user) {
            return this.$router.push({name: VIEW.LOGIN_VIEW})
        }
        this.fetchDirectory()
            .catch(() => {})
    }
}
</script>

<style scoped>
</style>
