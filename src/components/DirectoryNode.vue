<template>
    <li :class="{directory, open}">
        <span v-if="directory" class="node-name node-directory" @click="toggle">{{node.name}}</span>
        <a v-else class="node-name node-file" :href="link" target="_blank">{{node.name}}</a>
        <span class="node-size">({{size}}MB)</span>
        <ul v-if="node.children && open">
            <DirectoryNode v-for="child in node.children" :node="child" :key="child.path"/>
        </ul>
    </li>
</template>

<script>
import { COMPONENT, API } from '@/config/constants'

export default {
    name: COMPONENT.DIRECTORY_NODE,
    props: ["node"],
    data() {
        return {
            size: Math.round(this.node.size/1024/1024 *100)/100,
            link: `${API}/${this.node.path}`,
            open: false,
            directory: this.node.type==="directory"
        }
    },
    methods: {
        toggle() {
            this.open = !this.open
        }
    }
}
</script>

<style>
.node-size {
    margin-left: 10px;
    padding: 0 2px;
    font-style: italic;
}
li {
    margin-bottom: 5px;
    font-size: 18px;
    list-style: none;
}
.node-name {
    cursor: pointer;
    font-weight: bold;
}
.node-directory {
    background-color: green;
    color: black;
    padding: 0 2px;
}
li.directory::marker {
    content: ">";
}
li.directory.open::marker {
    content: "V";
}
</style>
