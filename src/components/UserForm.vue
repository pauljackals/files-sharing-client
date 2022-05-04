<template>
    <form @submit.prevent="submit">
        <input type="text" v-model="form.username" placeholder="username">
        <input type="password" v-model="form.password" placeholder="password">
        <input type="submit" value="log in">
    </form>
</template>

<script>
import { COMPONENT } from '@/config/constants'
export default {
    name: COMPONENT.USER_FORM,
    data(){
        return {
            form: {
                username: "",
                password: ""
            }
        }
    },
    methods: {
        submit() {
            this.$emit("submitChain", this.form)
        }
    }
}
</script>

<style>

</style>
