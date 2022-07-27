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
import Intro from "@/components/sections/Intro"
import SectionWrapper from "@/components/wrappers/SectionWrapper"
import Form from "@/components/general/Form"
import CardsWrapper from '@/components/wrappers/CardsWrapper'
import Card from '@/components/general/Card'
import MyMap from '@/components/modules/MyMap'

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
