<template>
    <div class="explores">
        <section-wrapper title="Explore world with us" hint="Explore">
            <explore v-for="(item, i) in exploreData" :key="i" :class="{ 'reverse': i % 2 !== 0 }"
                :image1="item.image1" :image2="item.image2" :p1="item.p1" :p2="item.p2" :button="false" />
        </section-wrapper>
    </div>
</template>

<script>
import axios from "axios"
import Explore from '@/components/sections/Explore.vue'
import SectionWrapper from '@/components/wrappers/SectionWrapper.vue'

export default {
    name: "Explores",
    components: {
        Explore,
        SectionWrapper
    },
    data() {
        return {
            exploreData: []
        }
    },
    created() {
        axios
            .get("../data/explore.json")
            .then(resp => {
                this.exploreData = resp.data
            })
    }
}
</script>

<style lang="scss" scoped>
.explores {
    padding-top: 50px;
}
</style>