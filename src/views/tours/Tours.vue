<template>
    <div class="tours">
        <intro title="Tours" bg="hero_tours.jpg" />

        <section-wrapper title="Popular Tour Destinations" hint="Perfect vacation">
            <div class="types">
                <span class="hint" :class="{ 'active': type === '' }" @click="setType('')">All</span>
                <span class="hint" :class="{ 'active': type === 'Cultural' }"
                    @click="setType('Cultural')">Cultural</span>
                <span class="hint" :class="{ 'active': type === 'Histoty' }" @click="setType('Histoty')">Histoty</span>
                <span class="hint" :class="{ 'active': type === 'Hike' }" @click="setType('Hike')">Hike</span>
            </div>
            <tour-card :type="type" />
        </section-wrapper>

        <travel />

        <section-wrapper hint="About us" title="Gallery">
            <gallery />
        </section-wrapper>
    </div>
</template>

<script>
import Intro from "@/components/sections/Intro.vue"
import SectionWrapper from '@/components/wrappers/SectionWrapper.vue'
import TourCard from '@/components/general/TourCard.vue'
import Travel from "@/components/sections/Travel.vue"
import Gallery from '@/components/modules/Gallery.vue'

export default {
    name: "Tours",
    components: {
        Intro,
        TourCard,
        SectionWrapper,
        Travel,
        Gallery,
    },
    data() {
        return {
            type: ""
        }
    },
    methods: {
        setType(type) {
            this.type = type
        }
    }
}
</script>

<style lang="scss">
.types {
    display: flex;
    gap: 40px;
    margin-bottom: 20px;
    span {
        cursor: pointer;
        border-bottom: 2px solid #fff;
        padding-bottom: 5px;
        &.active {
            border-bottom: 2px solid rgb(85, 183, 255);
        }
        &:hover {
            border-bottom: 2px solid rgb(85, 183, 255);
        }
    }
}
</style>