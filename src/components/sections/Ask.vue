<template>
    <div class="ask">
        <div class="ask_question">{{ title }}</div>
        <div class="ask_button">
            <my-button title="Contact us" :is-icon="true" @click="$router.push('/contacts')" />
        </div>
    </div>
</template>

<script>
import MyButton from '@/components/general/MyButton.vue'

export default {
    name: "Ask",
    components: {
        MyButton
    },
    props: {
        title: {
            type: String,
            default: "",
            required: true
        }
    }
}
</script>

<style lang="scss">
.ask {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top: 50px;

    &_question {
        font-size: 18px;
        line-height: 24px;
        color: #2094E6;
    }
}
</style>