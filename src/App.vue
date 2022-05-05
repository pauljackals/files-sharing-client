<template>
    <NavigationBar/>
    <router-view v-if="ready" />
</template>

<script>
import { mapActions } from 'vuex';
import NavigationBar from './components/NavigationBar.vue';
import { STORE } from './config/constants';

export default {
    name: "App",
    components: {
        NavigationBar
    },
    data(){
        return {
            ready: false
        }
    },
    methods: {
        ...mapActions({
            fetchMe: STORE.ACTIONS.FETCH_ME
        })
    },
    created() {
        this.fetchMe()
            .catch(() => {})
            .finally(() => {
                this.ready = true
            })
    },
};
</script>

<style>
body {
    margin: 0;
    padding: 0;
}

#app {
    font-family: 'Courier New', Courier, monospace;
    text-align: center;
    color: green;
    background-color: black;
    height: 100vh;
}
/* nav a.router-link-exact-active {
    color: #42b983;
} */
button, input[type="submit"] {
    background-color: green;
    border: none;
    color: black;
    font-family: inherit;
    font-size: 16px;
    font-weight: bold;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
}
input {
    background-color: black;
    border: 1px solid green;
    font-family: inherit;
    color: green;
    font-size: 16px;
}
input:-webkit-autofill {
    background-color: green;
    color: black;
}
h1 {
    margin-top: 0;
}
a {
    color: inherit;
}
</style>
