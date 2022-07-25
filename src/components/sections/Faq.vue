<template>
    <section class="faq">
        <div class="container">
            <div class="faq_wrap">
                <div class="faq_content">
                    <div class="faq_hint hint">Any more questions?</div>
                    <h2 class="faq_title section_title">Frequently asked questions</h2>
                    <div class="faq_descr">Here you’ll find the answers to some of the most common questions asked by
                        our customers.</div>
                    <div class="faq_button">
                        <my-button title="All quastions" :is-icon="true" @click="$router.push('/quastions')"/>
                    </div>
                </div>
                <div class="faq_accordion">
                    <slot></slot>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import MyButton from '@/components/general/MyButton.vue'

export default {
    name: "Faq",
    components: {
        MyButton
    }
}
</script>

<style lang="scss">

.faq {
    padding: 60px 0;
    &_wrap {
        display: flex;
        .faq_content {
            flex-basis: 55%;
            padding: 20px 0 0 60px;
            .faq_title {
                margin-bottom: 20px;
            }
            .faq_descr {
                margin-bottom: 20px;
                font-family: 'Work Sans';
                font-weight: 400;
                font-size: 18px;
                line-height: 150%;
                color: #333333;
            }
        }
        .faq_accordion {
            flex-basis: 45%;
            padding-top: 60px;
        }
    }
}
@media screen and (max-width: 992px) {
    .faq {
        &_wrap {
            flex-wrap: wrap;
            .faq_content {
                flex-basis: 100%;
                padding: 20px 0;
            }
            .faq_accordion {
                flex-basis: 100%;
                padding-top: 0;
            }
        }
    }
}
</style>