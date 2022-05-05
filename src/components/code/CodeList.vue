<template>
    <ul v-if="codes">
        <CodeItem v-for="code in codes" :code="code" :key="code._id"/>
    </ul>
</template>

<script>
import { COMPONENT } from '@/config/constants'
import CodeItem from './CodeItem.vue'

export default {
    components: { CodeItem },
    name: COMPONENT.CODE_LIST,
    props: ["codes"]
}
</script>

<style scoped>
ul {
    padding-left: 0;
}
</style>
