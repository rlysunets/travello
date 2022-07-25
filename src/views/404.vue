<template>
    <div class="error_page">
        <div class="content">
            <div class="status">404</div>
            <div class="text">Sorry, this page does not exist!</div>
            <my-button title="Back to Home" :is-icon="true" @click="$router.push('/')" />
        </div>
    </div>
</template>

<script>
import MyButton from '@/components/general/MyButton.vue'

export default {
    name: "404",
    components: {
        MyButton
    }

}
</script>

<style lang="scss">
.error_page {
    background-color: rgba(85, 183, 255, .6);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .content {
        color: #fff;
        font-family: 'Work Sans';
        font-weight: 500;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .status {
            font-size: 150px;
            line-height: 120%;
        }
        .text {
            font-size: 70px;
            margin-bottom: 50px;
        }
    }
}
</style>