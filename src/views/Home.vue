<template>
    <div>
        <hero />

        <div class="container">
            <template v-for="(item, i) in exploreData">
                <explore :key="i" v-if="i === 0" :image1="item.image1" :image2="item.image2" :hint="item.hint"
                    :title="item.title" :p1="item.p1" :p2="item.p2" />
            </template>
        </div>

        <cards-wrapper>
            <card v-for="(item, i) in homeCardsData" :key="i" :img="item.img" :title="item.title" :descr="item.descr" />
        </cards-wrapper>

        <review-carousel />

        <travel />
    </div>
</template>

<script>
import axios from "axios"
import Hero from '@/components/sections/Hero.vue'
import Explore from '@/components/sections/Explore.vue'
import Card from "@/components/general/Card.vue"
import CardsWrapper from "@/components/wrappers/CardsWrapper.vue"
import Travel from "@/components/sections/Travel.vue"
import ReviewCarousel from "@/components/modules/ReviewCarousel.vue"

export default {
    name: "Home",
    components: {
        Hero,
        Explore,
        Card,
        CardsWrapper,
        Travel,
        ReviewCarousel,
    },
    data() {
        return {
            exploreData: [],
            homeCardsData: []
        }
    },
    created() {
        axios
            .get("../data/explore.json")
            .then(resp => {
                this.exploreData = resp.data
            })

        axios
            .get("../data/homeCards.json")
            .then(resp => {
                this.homeCardsData = resp.data
            })
    }
}
</script>

<style lang="scss" scoped>

</style>