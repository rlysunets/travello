<template>
    <div>
        <intro title="About us" bg="hero_about.jpg" />

        <div class="container">
            <template v-for="(item, i) in exploreData">
                <explore :key="i" v-if="i === 1" :image1="item.image1" :image2="item.image2" :hint="item.hint"
                    :title="item.title" :p1="item.p1" :p2="item.p2" />
            </template>
        </div>

        <section-wrapper hint="About us" title="Why choose us">
            <cards-wrapper>
                <card v-for="(item, i) in whyUsCardsData" :key="i" :img="item.img" :title="item.title"
                    :descr="item.descr" />
            </cards-wrapper>
        </section-wrapper>

        <section-wrapper hint="About us" title="Numbers speaks louder" class="blue_bg">
            <numbers />
        </section-wrapper>

        <section-wrapper hint="About us" title="Gallery">
            <gallery />
        </section-wrapper>
    </div>
</template>

<script>
import axios from "axios"
import Intro from '@/components/sections/Intro.vue'
import Explore from '@/components/sections/Explore.vue'
import SectionWrapper from '@/components/wrappers/SectionWrapper.vue'
import CardsWrapper from '@/components/wrappers/CardsWrapper.vue'
import Card from '@/components/general/Card.vue'
import Numbers from '@/components/modules/Numbers.vue'
import Gallery from '@/components/modules/Gallery.vue'

export default {
    name: "About",
    components: {
        Intro,
        Explore,
        SectionWrapper,
        CardsWrapper,
        Card,
        Numbers,
        Gallery
    },
    data() {
        return {
            exploreData: [],
            whyUsCardsData: [],
        }
    },
    created() {
        axios
            .get("../data/explore.json")
            .then(resp => {
                this.exploreData = resp.data
            })
        axios
            .get("../data/whyUsCards.json")
            .then(resp => {
                this.whyUsCardsData = resp.data
            })

    }
}
</script>

<style lang="scss" scoped>
.intro {
    margin-bottom: 60px;
}
</style>