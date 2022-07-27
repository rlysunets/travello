<template>
    <div class="one">
        <div class="container">
            <div class="one_wrap">
                <time class="date">{{ oneItem.publishedAt }}</time>
                <h2 class="section_title">{{ oneItem.title }}</h2>
                <div class="item_pic">
                    <img :src="oneItem.urlToImage" :alt="oneItem.title">
                </div>
                <div class="descr">{{ oneItem.description }}</div>
                <div class="back">
                    <my-button title="Back to all" :is-icon="true" @click="$router.push('/news')" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import MyButton from '@/components/general/MyButton'

export default {
    name: "One",
    components: {
        MyButton
    },
    data() {
        return {
            oneItem: []
        }
    },
    created() {
        let url = `https://newsapi.org/v2/everything?q=${this.$route.params.title}&apiKey=76498ae586a94328ac5ccba99185f515`
        axios
            .get(url)
            .then(resp => {
                if (resp.data.articles.length === 0) {
                    this.$router.push('/404')
                } 
                this.oneItem = resp.data.articles[0]
            })
            .catch(() => {
                this.$router.push('/404')
            })
    }
}
</script>

<style lang="scss">
.one {
    padding: 150px 0;
}
.date {
    font-weight: 700;
}
.item_pic {
    position: relative;
    padding-top: 50%;
    margin-bottom: 20px;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        left: 0;
        top: 0;
    }
}
.descr {
    font-family: 'Work Sans';
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    color: #333333;
    margin-bottom: 60px;
}
.back {
    display: flex;
    justify-content: flex-end;
}
</style>