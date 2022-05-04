<template>
    <nav>
        <router-link :to="{name: DirectoryViewVue.name}">Files Sharing</router-link>
    </nav>
</template>

<script>
import DirectoryViewVue from '@/views/DirectoryView.vue'

export default {
    name: "NavigationBar",
    data(){
        return {
            DirectoryViewVue
        }
    }
}
</script>

<style scoped>
nav {
    background-color: lightskyblue;
}
</style>
