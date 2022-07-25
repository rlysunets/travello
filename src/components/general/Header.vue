<template>
    <div>
        <div id="overlay"></div>
        <header id="header">
            <div class="container">
                <div class="header">
                    <!-- header logo -->
                    <div class="header_logo">
                        <router-link to="/">
                            <img src="@/assets/images/header_logo.svg" alt="Travello logo">
                        </router-link>
                    </div>
                    <!-- header menu -->
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
                    <!-- header button -->
                    <div class="header_button">
                        <my-button title="Contact us" :is-icon="false" @click="$router.push('/contacts')" />
                    </div>

                    <!-- burger menu -->
                    <div class="burger">
                        <button class="hamburger hamburger--slider" type="button" @click="toggleMenu">
                            <span class="hamburger-box">
                                <span class="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                    <!-- mobile menu -->
                    <nav class="menu-mobile">
                        <div class="menu-mobile_heading">
                            <div class="menu-mobile_logo">
                                <router-link to="/" @click="toggleMenu">
                                    <img src="@/assets/images/header_logo.svg" alt="Travello logo">
                                </router-link>
                            </div>
                            <div class="burder">
                                <button class="hamburger is-active hamburger--slider" type="button" @click="toggleMenu">
                                    <span class="hamburger-box">
                                        <span class="hamburger-inner"></span>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <ul class="menu-mobile_list">
                            <li class="menu-mobile_item">
                                <router-link class="menu-mobile_link" to="/" @click="toggleMenu">Home</router-link>
                            </li>
                            <li class="menu-mobile_item">
                                <router-link class="menu-mobile_link" to="/about" @click="toggleMenu">About
                                </router-link>
                            </li>
                            <li class="menu-mobile_item">
                                <router-link class="menu-mobile_link" to="/why-us" @click="toggleMenu">Why us
                                </router-link>
                            </li>
                            <li class="menu-mobile_item">
                                <router-link class="menu-mobile_link" to="/tours" @click="toggleMenu">Tours
                                </router-link>
                            </li>
                            <li class="menu-mobile_item">
                                <router-link class="menu-mobile_link" to="/news" @click="toggleMenu">News</router-link>
                            </li>
                            <div class="header_button">
                                <my-button title="Contact us" :is-icon="false" @click="$router.push('/contacts')" />
                            </div>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
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
        window.addEventListener("scroll", this.addHeaderBg)
    },
    methods: {
        addHeaderBg() {
            if (window.scrollY > 150) {
                document.querySelector("#header").classList.add("header_fixed")
            } else {
                document.querySelector("#header").classList.remove("header_fixed")
            }
        },
        toggleMenu() {
            document.querySelector(".hamburger").classList.toggle("is-active")
            document.querySelector(".burger").classList.toggle("hide")
            document.querySelector(".header_button").classList.toggle("hide")
            document.querySelector(".menu-mobile").classList.toggle("active")
            document.querySelector("#overlay").classList.toggle("open")
            document.querySelector("body").classList.toggle("hidden")
            document.querySelector("#header").classList.toggle("color")
        }
    }
}
</script>

<style lang="scss">
@import "@/assets/css/humburger.scss";
#overlay {
    display: none;
    position: fixed;
    z-index: 1010;
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
#header {
    background-color: rgba(85, 183, 255, .6);
    position: fixed;
    z-index: 1010;
    left: 0;
    top: 0;
    width: 100%;
    display: flex;
    align-items: center;
    &.color {
        box-shadow: none;
        background-color: transparent;
        backdrop-filter: blur(0);
    }
}
.header_fixed {
    height: 60px;
    box-shadow: 0 0 10px #FFF;
    backdrop-filter: blur(10px);
}
.header {
    font-family: 'Work Sans';
    font-weight: 500;
    font-size: 24px;
    line-height: 100%;
    color: #FFFFFF;
    display: flex;
    gap: 70px;
    align-items: center;
    height: 80px;
    &_logo {
        flex: 1 1 auto;
        min-width: 167px;
    }
    &_menu {
        .menu_list {
            display: flex;
            gap: 25px;
            .menu_item {
                .menu_link {
                    &:hover {
                        border-bottom: 1px solid #FFFFFF;
                        padding-bottom: 3px;
                        transition: all .3s ease;
                    }
                }
            }
        }
    }
}
/* burger & mobile menu styles ============================================= */
.burger {
    display: none;
}
.hide {
    transition: all .3s ease;
    transform: translateX(300%);
}
.menu-mobile {
    padding-left: 30px;
    position: fixed;
    width: 350px;
    background-color: rgb(85, 183, 255);
    box-shadow: 0 0 10px #FFF;
    backdrop-filter: blur(10px);
    height: 100vh;
    left: 0;
    top: 0;
    display: block;
    transition: all .3s ease;
    transform: translateX(-110%);
    &_heading {
        padding: 15px 0 20px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &.active {
        transform: translateX(0);
    }
    &_item {
        margin-bottom: 20px;
    }
    &_link {
        font-family: 'Work Sans';
        font-weight: 700;
        font-size: 1.6rem;
        line-height: 2.625rem;
    }
}
.hidden {
    overflow: hidden;
}
.none {
    display: none;
}
@media screen and (max-width: 992px) {
    .header {
        .header_menu {
            display: none;
        }

        .burger {
            display: block;
        }
    }
}
@media screen and (max-width: 600px) {
    .header_button {
        display: none;
    }
}
</style>