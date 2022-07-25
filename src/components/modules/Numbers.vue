<template>
    <div class="numbers_wrap">
        <div class="number" v-for="(item, i) in numbersData" :key="i">
            <div class="number_qty">
                <vue3-autocounter :ref="`counter${i+1}`" :startAmount="0" :endAmount="item.qty" :duration="3" separator=" " :autoinit="false" />
            </div>
            <div class="number_descr">{{ item.title }}</div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import Vue3Autocounter from 'vue3-autocounter';

export default {
    name: "Numbers",
    components: {
        Vue3Autocounter
    },
    data() {
        return {
            numbersData: []
        }
    },
    created() {
        window.addEventListener("scroll", this.startCounters)
        axios
            .get("../data/numbers.json")
            .then(resp => {
                this.numbersData = resp.data
            })
    },
    computed: {
        numbersOffset() {
            return document.querySelector(".numbers_wrap").offsetTop - (outerHeight / 2)
        }
    },
    methods: {
        start() {
            for (let i in this.$refs) {
                this.$refs[i][0].start()
            }
        },
        startCounters() {
            if (window.scrollY > this.numbersOffset) {
                this.start()
                window.removeEventListener("scroll", this.startCounters)
            }
        }
    }
}
</script>

<style lang="scss">
.numbers_wrap {
    display: flex;
    .number {
        flex-basis: 25%;
        padding: 0 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        &_qty {
            text-align: center;
            font-family: 'Work Sans';
            font-weight: 500;
            font-size: 42px;
            line-height: 100%;
            color: #000000;
            margin-bottom: 20px;
        }
        &_descr {
            max-width: 140px;
            font-size: 24px;
            line-height: 120%;
            text-align: center;
            color: #000000;
        }
        &:not(:last-child) {
            border-right: 2px solid #2094E6;
        }
    }
}
@media screen and (max-width: 900px) {
    .numbers_wrap {
        flex-wrap: wrap;
        .number {
            flex-basis: 50%;
            &:nth-child(1),
            &:nth-child(2) {
                margin-bottom: 30px;
            }
            &:nth-child(2) {
                border-right: none;
            }
        }
    }
}
@media screen and (max-width: 480px) {
    .numbers_wrap {
        .number {
            flex-basis: 100%;
            &:nth-child(1),
            &:nth-child(3) {
                border-right: none;
            }
            &:nth-child(3) {
                margin-bottom: 30px;
            }
            &_qty {
                font-size: 36px;
            }
            &_descr {
                max-width: 100%;
                font-size: 22px;
            }
        }
    }
}
</style>