<template>
    <div class="reviews">
        <section-wrapper title="Customer Reviews" hint="What they say">
            <div v-for="(item, i) in reviewsData" :key="i" class="mb">
                <review :class="{'reverse': i % 2 !== 0}" :image="item.image" :descr="item.descr" :name="item.name"
                    :date="item.date" :button="false" />
            </div>
        </section-wrapper>
    </div>
</template>

<script>
import axios from 'axios'
import SectionWrapper from '@/components/wrappers/SectionWrapper.vue';
import Review from '@/components/sections/Review.vue';

export default {
    name: "Reviews",
    components: {
        SectionWrapper,
        Review
    },
    data() {
        return {
            reviewsData: []
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

<style lang="scss" scoped>

.reviews {
    padding-top: 50px;
}
.mb {
    &:not(:last-child) {
        margin-bottom: 30px;
    }
}
</style>