<template>
    <li>
        <span :class="{used: !!code.user}">{{code.code}}</span>
        <button v-if="!code.user" @click="destroyCode">X</button>
        <span v-else class="code-user">{{code.user.username}}</span>
    </li>
</template>

<script>
import { COMPONENT, STORE } from '@/config/constants'
import { mapActions } from 'vuex'

export default {
    name: COMPONENT.CODE_ITEM,
    props: ["code"],
    methods: {
        ...mapActions({
            destroyCodeAction: STORE.ACTIONS.DESTROY_CODE
        }),
        destroyCode() {
            const {_id} = this.code
            this.destroyCodeAction({_id})
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
.code-user {
    margin-left: 10px;
    font-weight: bold;
}
.used {
    text-decoration: line-through;
}
</style>
