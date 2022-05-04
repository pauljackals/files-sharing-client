<template>
    <div id="directory">
        <h1>shared</h1>
        <ul>
            <li>dir1</li>
            <li>dir2</li>
        </ul>
    </div>
</template>

<script>
import { STORE } from '@/config/constants'
import { mapActions } from 'vuex'
export default {
    name: "DirectoryView",
    methods: {
        ...mapActions({
            fetchDirectory: STORE.ACTIONS.FETCH_DIRECTORY
        })
    },
    created() {
        this.fetchDirectory()
            .catch(() => {})
    }
}
</script>

<style scoped>
#directory {
    background-color: lightcoral;
}
h1 {
    margin-top: 0;
}
</style>
