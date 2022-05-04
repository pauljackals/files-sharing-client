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
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
