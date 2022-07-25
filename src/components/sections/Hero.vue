<template>
    <section class="hero">
        <div class="container">
            <div class="hero_wrap">
                <h2 class="hero_title">Explore new places with travello</h2>
                <div class="hero_descr">
                    The Travello company has over 30 years of professional experience in the field of outbound
                    tourism and offers only high-quality tour products on the tourist market.
                </div>
                <my-button title="Get started" :is-icon="false" @click="$router.push('/tours')" />
            </div>
        </div>
    </section>
</template>

<script>
import MyButton from '@/components/general/MyButton.vue'

export default {
    name: "Hero",
    components: {
        MyButton
    }
}
</script>

<style lang="scss" scoped>
.hero {
    margin-bottom: 60px;
    background-image: url(@/assets/images/home/hero.jpg);
    background-color: #2194e6;
    background-repeat: no-repeat;
    background-position: 70% 0;
    background-size: cover;
    &_wrap {
        max-width: 592px;
        padding: 240px 0 140px;
        color: #FFFFFF;
        .hero_title {
            font-weight: 600;
            font-size: 60px;
            line-height: 110%;
            margin-bottom: 25px;
        }
        .hero_descr {
            font-family: 'Work Sans';
            font-weight: 400;
            font-size: 18px;
            line-height: 150%;
            margin-bottom: 25px;
        }
    }
}
@media screen and (min-width: 1700px) {
    .hero {
        background-position: 0 50%;
    }
}
@media screen and (max-width: 750px) {
    .hero {
        &_wrap {
            .hero_title {
                font-size: 42px;
            }
        }
    }
}
@media screen and (max-width: 480px) {
    .hero {
        &_wrap {
            padding: 180px 0 70px;
            .hero_title {
                font-size: 32px;
            }
            .hero_descr {
                line-height: 130%;
            }
        }
    }
}
</style>