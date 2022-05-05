<template>
    <ul v-if="users">
        <UserItem v-for="user in users" :user="user" :key="user._id" />
    </ul>
</template>

<script>
import { COMPONENT } from '@/config/constants'
import UserItem from './UserItem.vue'

export default {
    components: { UserItem },
    name: COMPONENT.USER_LIST,
    props: ["users"]
}
</script>

<style scoped>
ul {
    padding-left: 0;
}
</style>
