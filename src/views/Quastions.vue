<template>
    <div class="questions">
        <section-wrapper title="Frequently asked questions" hint="Any more questions?">
            <div class="accordion_wrap">
                <div class="accordion_item" v-for="(item, i) in faqData" :key="i">
                    <accordion :question="item.question" :answer="item.answer" />
                </div>
            </div>
            <ask title="Still have questions?" />
        </section-wrapper>
    </div>
</template>

<script>
import axios from 'axios'
import SectionWrapper from '@/components/wrappers/SectionWrapper.vue'
import Accordion from '@/components/modules/Accordion.vue'
import MyButton from '@/components/general/MyButton.vue'
import Ask from '@/components/sections/Ask.vue'

export default {
    name: "Questions",
    components: {
        SectionWrapper,
        Accordion,
        MyButton,
        Ask
    },
    data() {
        return {
            faqData: []
        }
    },
    created() {
        axios
            .get("../data/faq.json")
            .then(resp => {
                this.faqData = resp.data
            })
    }
}
</script>

<style lang="scss" scoped>
.questions {
    padding-top: 50px;
}
.accordion_wrap {
    width: 700px;
    .accordion_item {
        margin-bottom: 30px;  
    }
}
@media screen and (max-width: 750px) {
    .accordion_wrap {
        width: 500px;
    }
}
@media screen and (max-width: 540px) {
    .accordion_wrap {
        width: 350px;
    }
}
</style>