<template>
    <div class="tours_list">
        <div v-for="(item, id) in toursList" :key="id" class="tours_item">
            <div class="item_pic">
                <router-link :to="{ name: 'oneTour', params: { slug: item.slug }}"></router-link>
                
                <div class="badge">{{ item.type }}</div>
                
                <img :src="require('@/assets/images/gallery/'+item.img)" :alt="item.city">
            </div>
            <div class="item_content">
                <h2 class="item_title">{{ item.title }}</h2>
                <div class="item_location">{{ item.city }}, {{ item.country}}</div>
                <div class="item_details">
                    <div class="button">
                        <my-button title="Detail" :is-icon="true">
                            <slot>
                                <router-link :to="{ name: 'oneTour', params: { slug: item.slug }}"></router-link>
                            </slot>
                        </my-button>
                    </div>
                    <div class="pricing">
                        <div class="duration hint">{{ item.duration }}</div>
                        <div class="price hint">{{ item.price }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import MyButton from '@/components/general/MyButton'

export default {
    name: "TourCard",
    components: {
        MyButton
    },
    props: {
        type: {
            type: String,
            default: ""
        },
    },
    data() {
        return {
            toursData: []
        }
    },
    computed: {
        toursList() {
            return this.type !== "" ? this.toursData.filter(el => el.type === this.type) : this.toursData
        }
    },
    created() {
        axios
            .get('data/tours.json')
            .then(resp => {
                this.toursData = resp.data
            })
    }
}
</script>

<style lang="scss">
.tours_list {
    display: flex; 
    flex-wrap: wrap;
    .tours_item {
        flex: 50%;
        padding: 20px;
        display: flex;
        flex-direction: column;
        .item_pic {
            cursor: pointer;
            position: relative;
            padding-top: 50%;
            margin-bottom: 20px;
            transition: all .3s ease-in;
        }
        .badge {
            position: absolute;
            left: 0;
            top: 20px;
            background-color: #2194e6;
            color: #fff;
            display: block;
            z-index: 1;
            padding: 5px 20px;
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
        }
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            left: 0;
            top: 0;
        }
        .item_content {
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex-grow: 1;
            .item_title {
                margin-bottom: 15px;
                line-height: 26px;
            }
            .item_location {
                font-family: 'Work Sans';
                font-weight: 400;
                font-size: 20px;
                line-height: 150%;
                color: #333333;
                margin-bottom: 30px;
            }
            .item_details {
                display: flex;
                justify-content: space-between;
                align-items: center;
                .button {
                    position: relative;
                }
            }
        }
        a {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            display: block;
            z-index: 1000;
        }
        &:hover {
            display: block;
            box-shadow: 0px 7px 29px rgba(100, 100, 111, 0.2);
            transform: translateY(-20px);
            transition: all .3s ease-in;
        }
    }
}
@media screen and (max-width: 800px) {
    .tours_list {
        .tours_item {
            padding: 0;
            flex: 100%;
        }
    }
}
</style>