<template>
    <div id="error">
        <h1>Error</h1>
        <h2>{{message}}</h2>
    </div>
</template>

<script>
import { VIEW } from '@/config/constants'

export default {
    name: VIEW.ERROR_VIEW,
    props: ["message"]
}
</script>

<style>

</style>
