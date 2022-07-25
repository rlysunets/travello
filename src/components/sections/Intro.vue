<template>
    <section class="intro" 
        :style="`background-image: url(${require('@/assets/images/intro/' + bg)})`">
        <div class="container">
            <div class="intro_wrap">
                <h2 class="intro_title">{{ title }}</h2>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "intro",
    props: {
        title: {
            type: String,
            default: "",
            required: true
        },
        bg: {
            type: String,
            default: "",
            required: false
        }
    }
}
</script>

<style lang="scss">
.intro {
    background-color: #959c98;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
    &_wrap {
        .intro_title {
            padding: 210px 0 130px;
            font-weight: 600;
            font-size: 48px;
            line-height: 61px;
            text-align: center;
            color: #FFFFFF;
        }
    }
}
</style>