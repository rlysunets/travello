<template>
    <div class="ask">
        <div class="ask_question">{{ title }}</div>
        <div class="ask_button">
            <my-button title="Contact us" :is-icon="true" @click="$router.push('/contacts')" />
        </div>
    </div>
</template>

<script>
import MyButton from '@/components/general/MyButton'

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
    gap: 20px;
    padding-top: 50px;
    &_question {
        font-size: 18px;
        line-height: 24px;
        color: #2094E6;
    }
}
@media screen and (max-width: 350px) {
    .ask {
        flex-direction: column;
        gap: 20px;
    }
}
</style>