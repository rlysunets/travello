<template>
    <div class="card">
        <div class="card_icon">
            <img :src="require('@/assets/images/cards/'+img)" :alt="title">
        </div>
        <div class="card_title">{{ title }}</div>
        <div class="card_text">{{ descr }}</div>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        img: {
            type: String,
            default: "",
        },
        title: {
            type: String,
            default: "",
            required: true
        },
        descr: {
            type: String,
            default: "",
            required: true
        }
    }
}
</script>

<style lang="scss">
.card {
    cursor: pointer;
    flex-basis: 25%;
    padding: 40px 25px 30px;
    box-shadow: 0px 7px 29px rgba(100, 100, 111, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 15px;
    &_icon {
        width: 50px;
        height: 50px;
        margin: 10px;
    }
    &_title {
        font-size: 24px;
        line-height: 32px;
        color: #121212;
    }
    &_decr {
        font-family: 'Work Sans';
        font-weight: 400;
        line-height: 150%;
        color: #333333;
    }
    &:hover {
        transition: all .3s ease-in;
        transform: scale(1.1);
    }
}
</style>