<template>
    <li>
        <span>{{user.username}}{{user.admin ? '*' : ''}}</span>
        <button v-if="user._id!==userCurrent._id" @click="destroyUser">X</button>
    </li>
</template>

<script>
import { COMPONENT, STORE } from '@/config/constants'
import { mapActions, mapState } from 'vuex'

export default {
    name: COMPONENT.USER_ITEM,
    props: ["user"],
    computed: {
        ...mapState({
            userCurrent: STORE.STATE.USER
        })
    },
    methods: {
        ...mapActions({
            destroyUserAction: STORE.ACTIONS.DESTROY_USER
        }),
        destroyUser() {
            const {_id} = this.user
            this.destroyUserAction({_id})
                .catch(() => {})
        }
    }
}
</script>

<style scoped>
li {
    list-style: none;
    margin-bottom: 20px;
}
button {
    margin-left: 10px;
    padding: 0 4px;
}
</style>
