<template>
    <div id="directory">
        <ul>
            <DirectoryNode v-if="directory" :node="directory"/>
        </ul>
    </div>
</template>

<script>
import { STORE, VIEW } from '@/config/constants'
import { mapActions, mapMutations, mapState } from 'vuex'
import DirectoryNode from '@/components/DirectoryNode.vue'

export default {
    name: VIEW.DIRECTORY_VIEW,
    components: {
        DirectoryNode
    },
    computed: {
        ...mapState({
            user: STORE.STATE.USER,
            directory: STORE.STATE.DIRECTORY
        })
    },
    methods: {
        ...mapActions({
            fetchDirectory: STORE.ACTIONS.FETCH_DIRECTORY
        }),
        ...mapMutations({
            clearDirectory: STORE.MUTATIONS.CLEAR_DIRECTORY
        })
    },
    created() {
        if(!this.user) {
            return this.$router.push({name: VIEW.LOGIN_VIEW})
        }
        this.fetchDirectory()
            .catch(() => {})
    },
    unmounted() {
        this.clearDirectory()
    }
}
</script>

<style scoped>
ul {
    text-align: left;
}
</style>
