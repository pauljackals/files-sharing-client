<template>
    <div id="register">
        <UserForm @submitChain="register" :register="true" />
    </div>
</template>

<script>
import { STORE, VIEW } from "@/config/constants";
import UserForm from "@/components/UserForm.vue";
import { mapActions, mapState } from "vuex";

export default {
    name: VIEW.REGISTER_VIEW,
    components: {
        UserForm,
    },
    computed: {
        ...mapState({
            user: STORE.STATE.USER,
        }),
    },
    methods: {
        ...mapActions({
            registerAction: STORE.ACTIONS.REGISTER,
        }),
        register({ username, password, code }) {
            this.registerAction({ username, password, code })
                .then(() => this.$router.push({name: VIEW.LOGIN_VIEW}))
                .catch(() => {})
        },
    },
    created() {
        if (this.user) {
            return this.$router.push({ name: VIEW.DIRECTORY_VIEW });
        }
    },
};
</script>

<style scoped>
</style>
