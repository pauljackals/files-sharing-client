<template>
    <div id="admin-code" class="admin-page">
        <button @click="generateCode">generate code</button>
        <CodeList :codes="codes"/>
    </div>
</template>

<script>
import { STORE, VIEW } from '@/config/constants'
import CodeList from '@/components/code/CodeList.vue'
import { mapActions, mapMutations, mapState } from 'vuex'

export default {
    components: { CodeList },
    name: VIEW.ADMIN_CODE_VIEW,
    computed: {
        ...mapState({
            codes: STORE.STATE.CODES
        })
    },
    methods: {
        ...mapActions({
            fetchCodes: STORE.ACTIONS.FETCH_CODES,
            generateCodeAction: STORE.ACTIONS.GENERATE_CODE
        }),
        ...mapMutations({
           clearCodes: STORE.MUTATIONS.CLEAR_CODES 
        }),
        generateCode() {
            this.generateCodeAction()
                .catch(() => {})
        }
    },
    created() {
        this.fetchCodes()
            .catch(() => {})
    },
    unmounted() {
        this.clearCodes()
    }
}
</script>

<style scoped>

</style>
