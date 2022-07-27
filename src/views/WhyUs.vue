<template>
    <div class="why_us">
        <intro title="Why choose us" bg="hero_why-choose-us.jpg" />

        <div class="container">
            <template v-for="(item, i) in exploreData">
                <explore :key="i" v-if="i === 3" :image1="item.image1" :image2="item.image2" :hint="item.hint"
                    :title="item.title" :p1="item.p1" :p2="item.p2" />
            </template>
        </div>
            
        <benefits />

        <div class="blue_bg">
            <review-carousel />
        </div>

        <faq>
            <template v-for="(item, i) in faqData">
                <accordion :key="i" v-if="i === 0" :question="item.question" :answer="item.answer" />
                <accordion :key="i" v-if="i === 1" :question="item.question" :answer="item.answer" />
                <accordion :key="i" v-if="i === 2" :question="item.question" :answer="item.answer" />
            </template>
        </faq>
    </div>
</template>

<script>
import axios from 'axios'
import Intro from '@/components/sections/Intro'
import Explore from '@/components/sections/Explore'
import Benefits from '@/components/sections/Benefits'
import ReviewCarousel from "@/components/modules/ReviewCarousel"
import Faq from '@/components/sections/Faq'
import Accordion from '@/components/modules/Accordion'

export default {
    name: "WhyUs",
    components: {
        Intro,
        Explore,
        Benefits,
        ReviewCarousel,
        Accordion,
        Faq
    },
    data() {
        return {
            exploreData: [],
            faqData: []
        }
    },
    created() {
        axios
            .get("data/explore.json")
            .then(resp => {
                this.exploreData = resp.data
            })
        axios
            .get("data/faq.json")
            .then(resp => {
                this.faqData = resp.data
            })
    }
}
</script>

<style lang="scss" scoped>
.intro {
    margin-bottom: 60px;
}
</style>