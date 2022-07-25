<template>
    <div class="reviews_wrap">
        <div class="reviews_content">
            <div class="review_hint hint">{{ hint }}</div>
            <h2 class="reviews_title section_title">{{ title }}</h2>
            <div class="reviews_descr">{{ descr }}</div>
            <div class="reviews_user">{{ name }}</div>
            <div class="reviews_date">
                <time>{{ date }}</time>
            </div>
            <div class="reviews_button" v-if="button">
                <my-button title="All reviews" :is-icon="true" @click="$router.push('/reviews')" />
            </div>
        </div>
        <div class="reviews_image">
            <img class="img_border" :src="require('@/assets/images/reviews/' + image)" :alt="title">
        </div>
    </div>
</template>

<script>
import MyButton from '@/components/general/MyButton.vue'

export default {
    name: "Review",
    components: {
        MyButton
    },
    props: {
        image: {
            type: String,
            default: ""
        },
        hint: {
            type: String,
            default: ""
        },
        title: {
            type: String,
            default: ""
        },
        descr: {
            type: String,
            default: ""
        },
        name: {
            type: String,
            default: ""
        },
        date: {
            type: String,
            default: ""
        },
        button: {
            type: Boolean,
            default: true,
        }
    }
}
</script>

<style lang="scss">
.reviews_wrap {
    display: flex;
    justify-content: space-around;
    .reviews_content {
        display: flex;
        flex-direction: column;
        text-align: left;
        flex-basis: 45%;
        padding: 10px 20px;
        .review_hint {
            margin-bottom: 10px;
        }
        .reviews_title {
            margin-bottom: 20px;
        }
        .reviews_descr {
            flex: 1 1 auto;
            margin-bottom: 15px;
            font-family: 'Work Sans';
            font-weight: 400;
            font-size: 18px;
            line-height: 150%;
            color: #333333;
        }
        .reviews_user {
            font-family: 'Work Sans';
            font-weight: 500;
            font-size: 24px;
            line-height: 100%;
            color: #000000;
        }
        .reviews_date {
            margin-bottom: 30px;
        }
    }
    .reviews_image {
        flex-basis: 45%;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
@media screen and (max-width: 750px) {
    .reviews_wrap {
        flex-wrap: wrap;
        .reviews_content {
            flex-basis: 95%;
            padding: 0;

            .reviews_button {
                margin-bottom: 20px;
            }
        }
        .reviews_image {
            flex-basis: 95%;
        }
    }
}
</style>