<template>
    <div class="contacts">
        <intro title="Contact us" bg="hero_contacts.jpg" />

        <section-wrapper hint="Contact" title="Get in touch">
            <Form />
        </section-wrapper>

        <cards-wrapper>
            <card v-for="(item, i) in addressData" :key="i" :img="item.img" :title="item.title" :descr="item.descr" />
        </cards-wrapper>

        <my-map />

    </div>
</template>

<script>
import axios from "axios"
import Intro from "@/components/sections/Intro.vue"
import SectionWrapper from "@/components/wrappers/SectionWrapper.vue"
import Form from "@/components/general/Form.vue"
import CardsWrapper from '@/components/wrappers/CardsWrapper.vue'
import Card from '@/components/general/Card.vue'
import MyMap from '@/components/modules/MyMap.vue'

export default {
    name: "contacts",
    components: {
        Intro,
        SectionWrapper,
        Form,
        CardsWrapper,
        Card,
        MyMap
    },
    data() {
        return {
            addressData: []
        }
    },
    created() {
        axios
            .get("data/address.json")
            .then(resp => {
                this.addressData = resp.data
            })
    }
}
</script>
