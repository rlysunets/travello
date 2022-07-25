<template>
    <div class="one_tour" v-if="oneItem !== null">
        <section-wrapper hint="About the place" :title="oneItem.city">
            <div class="item_pic">
                <img :src="require('@/assets/images/gallery/' + oneItem.img)" :alt="oneItem.city">
            </div>
            <div class="item_content">
                <div class="sidebar">
                    <div class="sidebar_block">
                        <div class="title">Destination</div>
                        <div class="content">
                            <div class="icon">
                                <img src="@/assets/images/marker.svg" alt="icon">
                            </div>
                            <div class="text">{{ oneItem.country }}</div>
                        </div>
                    </div>
                    <div class="sidebar_block">
                        <div class="title">Type</div>
                        <div class="content">
                            <div class="icon">
                                <img src="@/assets/images/type.svg" alt="icon">
                            </div>
                            <div class="text">{{ oneItem.type }}</div>
                        </div>
                    </div>
                    <div class="sidebar_block">
                        <div class="title">Duration</div>
                        <div class="content">
                            <div class="icon">
                                <img src="@/assets/images/duration.svg" alt="icon">
                            </div>
                            <div class="text">{{ oneItem.duration }}</div>
                        </div>
                    </div>
                    <div class="sidebar_block">
                        <div class="title">Price</div>
                        <div class="content">
                            <div class="icon">
                                <img src="@/assets/images/price.svg" alt="icon">
                            </div>
                            <div class="text">{{ oneItem.price }}</div>
                        </div>
                    </div>

                </div>
                <div class="about_tour">
                    <div class="hint">{{ oneItem.country }}</div>
                    <div class="section_title">{{ oneItem.city }}</div>
                    <p>{{ oneItem.descr.p1 }}</p>
                    <p>{{ oneItem.descr.p2 }}</p>
                    <p>{{ oneItem.descr.p3 }}</p>
                </div>
            </div>
            <ask title="Like this tour? Contact to book" />
        </section-wrapper>
    </div>
</template>

<script>
import axios from 'axios'
import SectionWrapper from '@/components/wrappers/SectionWrapper.vue'
import Ask from '@/components/sections/Ask.vue'

export default {
    name: "OneTour",
    components: {
        SectionWrapper,
        Ask
    },
    data() {
        return {
            oneItem: null
        }
    },
    created() {
        axios
            .get('../data/tours.json')
            .then(resp => {
                this.oneItem = resp.data.find(el => el.slug === this.$route.params.slug)
            })
            // .catch(() => {
            //     $router.push('/:pathMatch(.*)*')
            // })
    }
}
</script>

<style lang="scss">
.one_tour {
    padding-top: 50px;
    .item_pic {
        margin-bottom: 120px;
        position: relative;
        padding-top: 50%;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            left: 0;
            top: 0;
        }
    }
    .item_content {
        display: flex;
        justify-content: space-between;
        gap: 50px;
        .sidebar {
            flex-basis: 35%;
            padding: 40px;
            background-color: #B1DAF6;
            &_block {
                margin-bottom: 30px;
                .title {
                    font-size: 24px;
                    line-height: 32px;
                    color: #121212;
                    margin-bottom: 16px;
                }
                .content {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    .icon {
                        width: 20px;
                        height: 20px;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .text {
                        font-family: 'Work Sans';
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 130%;
                        color: #333333;
                    }
                }
            }
        }
        .about_tour {
            flex-basis: 65%;
            p {
                font-family: 'Work Sans';
                font-weight: 400;
                font-size: 18px;
                line-height: 150%;
                color: #333333;
                &:not(:last-child) {
                    margin-bottom: 20px;
                }
            }
        }
    }
}
@media screen and (max-width: 800px) {
    .one_tour {
        .item_pic {
            margin-bottom: 60px;
        }
        .item_content {
            flex-wrap: wrap;
            flex-direction: column-reverse;
            gap: 0;
            .sidebar {
                flex-basis: 100%;
                display: flex;
                flex-wrap: wrap;
                margin-top: 40px;
                &_block {
                    flex: 50%;
                }
            }
            .about_tour {
                flex-basis: 1000%;
            }
        }
    }
}
</style>