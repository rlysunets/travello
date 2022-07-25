<template>
    <vue-collapsible-panel-group accordion>
        <vue-collapsible-panel :expanded="false">
            <template #title>{{ question }}</template>
            <template #content>{{ answer }}</template>
        </vue-collapsible-panel>
    </vue-collapsible-panel-group>
</template>

<script>
import { VueCollapsiblePanelGroup, VueCollapsiblePanel } from '@dafcoe/vue-collapsible-panel'
import '@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css'
export default {
    name: "Accordion",
    components: {
        VueCollapsiblePanelGroup,
        VueCollapsiblePanel
    },
    props: {
        question: {
            type: String,
            default: "",
            required: true
        },
        answer: {
            type: String,
            default: "",
            required: true
        }
    }
}
</script>

<style lang="scss">
.vcpg {
    border: none !important;
    font-family: 'Playfair Display';
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    color: #121212;
}
.vcp__header { 
    --base-color: #fff;
    --border-color: #2194e6;
    --bg-color-header: #fff; 
    --bg-color-header-hover: #fff;
    --bg-color-header-active: #fff;
}
.vcp__body {
    border-top: 1px solid #2194e6 !important;
    .vcp__body-content {
        font-family: 'Work Sans';
        font-weight: 400;
        font-size: 18px;
        line-height: 150%;
        color: #333333;
    }
}
.vcp__header-icon{
    padding: 20px 0;
    span {
        svg {
            fill: #2194e6;
        }
    }
}  
@media screen and (max-width: 650px) {
    .vcpg {
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        color: #121212;
    }
}
</style>