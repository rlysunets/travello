<template>
    <div>
        <div id="overlay"></div>
        <header class="header">
            <div class="container">
                <div class="header_wrap">
                    <div class="header_logo">
                        <router-link to="/">
                            <img src="@/assets/images/header_logo.svg" alt="Travello logo">
                        </router-link>
                    </div>
                    <nav class="header_menu">
                        <ul class="menu_list">
                            <li class="menu_item">
                                <router-link class="menu_link" to="/">Home</router-link>
                            </li>
                            <li class="menu_item">
                                <router-link class="menu_link" to="/about">About</router-link>
                            </li>
                            <li class="menu_item">
                                <router-link class="menu_link" to="/why-us">Why us</router-link>
                            </li>
                            <li class="menu_item">
                                <router-link class="menu_link" to="/tours">Tours</router-link>
                            </li>
                            <li class="menu_item">
                                <router-link class="menu_link" to="/news">News</router-link>
                            </li>
                        </ul>
                    </nav>
                    <div class="header_button">
                        <my-button title="Contact us" :is-icon="false" @click="$router.push('/contacts')" />
                    </div>
                    <div class="header_burger">
                        <button class="hamburger hamburger--slider" type="button" @click="toggleMenu">
                            <span class="hamburger-box">
                                <span class="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
        <nav class="mobile_menu">
            <ul class="menu_list">
                <li class="menu_item">
                    <router-link class="menu_link" to="/" @click="toggleMenu">Home</router-link>
                </li>
                <li class="menu_item">
                    <router-link class="menu_link" to="/about" @click="toggleMenu">About
                    </router-link>
                </li>
                <li class="menu_item">
                    <router-link class="menu_link" to="/why-us" @click="toggleMenu">Why us
                    </router-link>
                </li>
                <li class="menu_item">
                    <router-link class="menu_link" to="/tours" @click="toggleMenu">Tours
                    </router-link>
                </li>
                <li class="menu_item">
                    <router-link class="menu_link" to="/news" @click="toggleMenu">News</router-link>
                </li>
            </ul>
            <div class="header_button" @click="toggleMenu">
                <my-button title="Contact us" :is-icon="false" @click="$router.push('/contacts')" />
            </div>
        </nav>
    </div>
</template>

<script>
import MyButton from '@/components/general/MyButton.vue'

export default {
    name: "Header",
    components: {
        MyButton
    },
    created() {
        window.addEventListener("scroll", this.addFixedHeader)
    },
    methods: {
        addFixedHeader() {
            if (window.scrollY > 150) {
                document.querySelector(".header").classList.add("fixed")
                document.querySelector(".mobile_menu").classList.add("fixed")
            } else {
                document.querySelector(".header").classList.remove("fixed")
                document.querySelector(".mobile_menu").classList.remove("fixed")
            }
        },
        toggleMenu() {
            document.querySelector(".hamburger").classList.toggle("is-active")
            document.querySelector(".mobile_menu").classList.toggle("active")
            document.querySelector("#overlay").classList.toggle("open")
            document.querySelector("body").classList.toggle("hidden")
        }
    }
}
</script>

<style lang="scss">
@import "@/assets/css/humburger.scss";

#overlay {
    display: none;
    position: fixed;
    z-index: 1001;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(85, 183, 255, .3);
    &.open {
        display: block;
        overflow: hidden;
    }
}
.header {
    background-color: rgba(87, 185, 255, 0.6);
    position: fixed;
    z-index: 1010;
    left: 0;
    top: 0;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    &.fixed {
        height: 60px;
        box-shadow: 0 0 10px #FFF;
        backdrop-filter: blur(10px);
    }
    &_wrap {
        display: flex;
        align-items: center;
        gap: 70px;
        .header_logo {
            flex: 1 1 auto;
            min-width: 167px;
        }
        .header_menu {
            .menu_list {
                display: flex;
                gap: 25px;
                .menu_item {
                    .menu_link {
                        font-family: 'Work Sans';
                        font-weight: 500;
                        font-size: 24px;
                        line-height: 100%;
                        color: #FFFFFF;
                        &:hover {
                            border-bottom: 1px solid #FFFFFF;
                            padding-bottom: 3px;
                            transition: all .3s ease;
                        }
                    }
                }
            }
        }
        .header_burger {
            display: none;
        }
    }
}
.mobile_menu {
    padding: 20px;
    background-color: rgba(87, 185, 255, 0.6);
    position: fixed;
    z-index: 1011;
    width: 350px;
    box-shadow: 0 0 10px #FFF;
    backdrop-filter: blur(10px);
    height: 100vh;
    left: 0;
    top: 80px;
    display: block;
    transition: all .3s ease;
    transform: translateY(-200%);
    &.fixed {
        top: 60px;
    }
    &.active {
        transform: translateY(0);
    }
    .menu_list {
        .menu_item {
            margin-bottom: 20px;       
             .menu_link {
                font-family: 'Work Sans';
                font-weight: 500;
                font-size: 26px;
                line-height: 120%;
                color: #FFFFFF;
            }
        }
    }
}
.hidden {
    overflow: hidden;
}
@media screen and (max-width: 992px) {
    .header_wrap {
        .header_menu {
            display: none;
        }
        .header_button {
            display: none;
        }
        .header_burger {
            display: block;
        }
    }
}
</style>