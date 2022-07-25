<template>
    <section class="benefits">
        <div class="benefit" v-for="(item, i) in benefitsData" :key="i">
            <div class="benefit_icon">
                <img :src="require('@/assets/images/cards/'+item.img)" :alt="item.title">
            </div>
            <div class="benefit_content">
                <div class="benefit_content_title">{{ item.title }}</div>
                <div class="benefit_content_descr">{{ item.descr }}</div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'

export default {
    name: "Benefits",
    data() {
        return {
            benefitsData: []
        }
    },
    created() {
        axios
            .get("../data/benefits.json")
            .then(resp => {
                this.benefitsData = resp.data
            })
    }
}
</script>

<style lang="scss">
.benefits {
    max-width: 650px;
    display: flex;
    flex-wrap: wrap;
    .benefit {
        padding: 10px 20px;
        flex-basis: 45%;
        display: flex;
        gap: 25px;
        &_icon {
            img {
                position: relative;
                top: 10px;
                width: 40px;
                height: 40px;
            }
        }
        &_content {
            &_title {
                position: relative;
                margin-bottom: 15px;
                font-size: 24px;
                line-height: 32px;
                color: #121212;
                &::before {
                    content: "";
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    background-color: #B1DAF6;
                    display: block;
                    position: absolute;
                    top: 0;
                    left: -50px;
                    z-index: -1;
                }
            }
            &_descr {
                font-family: 'Work Sans';
                font-weight: 400;
                font-size: 16px;
                line-height: 130%;
                color: #333333
            }
        }
    }
}
@media screen and (max-width: 667px) {
    .benefits {
        .benefit {
            flex-basis: 100%;
            &:not(:last-child) {
                margin-bottom: 25px;
            }
        }
    }
}
</style>