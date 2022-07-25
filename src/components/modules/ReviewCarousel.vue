<template>
    <section class="reviews">
        <div class="container">
            <carousel v-if="reviewsData.length !==0" :settings="settings">
                <slide v-for="(item) in reviewsData" :key="item">
                    <review :image="item.image" :hint="item.hint" :title="item.title" :descr="item.descr"
                    :name="item.name" :date="item.date" />
                </slide>
                <template #addons>
                    <navigation />
                </template>
            </carousel>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import Review from '@/components/sections/Review.vue';

export default {
    name: "ReviewCarousel",
    components: {
        Carousel,
        Slide,
        Navigation,
        Review
    },
    data() {
        return {
            reviewsData: [],
            settings: {
                itemsToShow: 1,
                snapAlign: 'center',
                autoplay: 5000,
                transition: 2000,
                wrapAround: true,
            }
        }
    },
    created() {
        axios
            .get("../data/reviews.json")
            .then(resp => {
                this.reviewsData = resp.data
            })
    }
}
</script>

<style lang="scss">
.reviews {
    padding-bottom: 60px;
}
.carousel__prev,
.carousel__next {
    background-color: #2194e6;
    &:hover {
        background-color: transparent;
        outline: 2px solid #2194e6;
        transition: all .3s ease;
        svg {
            fill: #2194e6;
        }
    }
}
@media screen and (max-width: 550px) {
    .carousel__prev,
    .carousel__next {
        display: none;
    }
}
</style>