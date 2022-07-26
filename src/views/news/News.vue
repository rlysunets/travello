<template>
    <div class="news">
        <intro title="News" bg="hero_news.jpg" />

        <section-wrapper title="The latest travel news" hint="News">
            <pagination :page="page" :total="totalPages" @to-page="toPage" />

            <div class="news_list">
                <div class="news_item" v-for="(item, i) in newsList" :key="i">
                    <router-link :to="{ name: 'oneNews', params: { title: item.title } }">
                        <div class="item_pic">
                            <img v-if="item.urlToImage !== null" :src="item.urlToImage" :alt="item.title" @error="errorImg">
                            <img v-else :src="require('@/assets/images/no-image-available.png')" :alt="item.title">
                        </div>
                        <div class="item_content">
                            <h2 class="title">{{ item.title }}</h2>
                            <time>{{ item.publishedAt }}</time>
                            <p class="descr" v-html="item.description"></p>
                        </div>
                    </router-link>
                </div>
            </div>
        </section-wrapper>
    </div>
</template>

<script>
import axios from 'axios'
import Intro from "@/components/sections/Intro.vue"
import SectionWrapper from '@/components/wrappers/SectionWrapper.vue'
import Pagination from '@/components/general/Pagination.vue'

export default {
    name: "News",
    components: {
    Intro,
    SectionWrapper,
    Pagination
},
    data() {
        return {
            API_key: "76498ae586a94328ac5ccba99185f515",
            // API_key: "1c05599a56d5486e85cd22b247e1bac8",
            q: "tourism",
            newsList: [],
            page: 1,
            pageSize: 12
        }
    },
    computed: {
        totalPages() {
            const pages = Math.floor(this.newsList.totalResults / this.pageSize)
            const maxPages = Math.floor(100 / this.pageSize)
            return this.newsList.totalResults < 100 ? pages : maxPages
        },
        toDateFormater() {
            const date = new Date()
            const year = date.getFullYear()
            const month = date.getMonth() + 1
            const day = date.getDate()
            return year + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day)
        },
        fromDateFormater() {
            const date = new Date()
            const year = date.getFullYear()
            const month = date.getMonth() + 1
            const day = date.getDate() - 1
            return year + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day)
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            let url = `https://newsapi.org/v2/everything?q=${this.q}&apiKey=${this.API_key}`
            url += `&from=${this.fromDateFormater}`
            url += `&to=${this.toDateFormater}`
            url += `&language=en`
            url += `&pageSize=${this.pageSize}`
            url += `&page=${this.page}`
            axios
                .get(url)
                .then(resp => {
                    this.newsList = resp.data.articles
                })
        },
        toPage(new_page) {
            this.page = new_page
            this.fetchData()
        },
        errorImg(e) {
            e.target.src = require('@/assets/images/no-image-available.png')
        }
    }
}
</script>

<style lang="scss">
.news_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .news_item {
        padding: 20px;
        display: flex;
        flex-direction: column;
        max-width: 33%;
        .item_pic {
            position: relative;
            padding-top: 50%;
            margin-bottom: 15px;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                position: absolute;
                left: 0;
                top: 0;
                display: block;
            }
        }
        .item_content {
            padding: 10px;
            .title{
                margin-bottom: 10px;
            }
            .descr {
                margin-top: 20px;
                text-align: justify;
                font-family: 'Work Sans';
                font-weight: 400;
                font-size: 20px;
                line-height: 150%;
                color: #333333;
            }
        }
        a:hover {
            display: block;
            box-shadow: 0px 7px 29px rgba(100, 100, 111, 0.2);
            transform: translateY(-20px);
            transition: all .3s ease-in;
        }
    }
    
}
@media screen and (max-width: 750px) {
    .news_list {
        .news_item {
            max-width: 50%;
        }
    }
}
@media screen and (max-width: 550px) {
    .news_list {
        .news_item {
            max-width: 100%;
        }
    }
}
</style>