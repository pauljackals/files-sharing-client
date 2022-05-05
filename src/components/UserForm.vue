<template>
    <form @submit.prevent="submit">
        <h1>{{title}}</h1>
        <input type="text" v-model="form.username" placeholder="username">
        <input type="password" v-model="form.password" placeholder="password">

        <input v-if="register" type="text" v-model="form.code" placeholder="code">

        <input type="submit" :value="submitText">
    </form>
</template>

<script>
import { COMPONENT } from '@/config/constants'
export default {
    name: COMPONENT.USER_FORM,
    props: ["register"],
    data(){
        return {
            form: {
                username: "",
                password: "",
                code: ""
            },
            title: this.register ? "Register" : "Login",
            submitText: this.register ? "register" : "login"
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
form {
    border: 5px solid green;
    width: 300px;
    display: flex;
    flex-direction: column;
    padding: 30px;
    margin-left: auto;
    margin-right: auto;
}
input:not(:first-of-type) {
    margin-top: 15px;
}
</style>
