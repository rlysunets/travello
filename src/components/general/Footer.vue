<template>
    <footer class="footer">
        <div class="container">
            <div class="footer_wrap">
                <div class="footer_content">
                    <div class="footer_logo">
                        <a href="#">
                            <img src="@/assets/images/footer_logo.svg" alt="Travello logo">
                        </a>
                    </div>

                    <div class="footer_menu">
                        <div class="menu_title">Learn More</div>
                        <ul class="munu_list">
                            <li class="menu_item">
                                <router-link class="menu_link" to="/about">About Travello</router-link>
                            </li>
                            <li class="menu_item">
                                <router-link class="menu_link" to="/explores">Explore With Travello</router-link>
                            </li>
                            <li class="menu_item">
                                <router-link class="menu_link" to="/quastions">Frequently Asked Questions</router-link>
                            </li>
                            <li class="menu_item">
                                <router-link class="menu_link" to="/reviews">Recent Customer Reviews</router-link>
                            </li>
                            <li class="menu_item">
                                <router-link class="menu_link" to="/news">Latest News</router-link>
                            </li>
                        </ul>
                    </div>

                    <div class="footer_menu">
                        <div class="menu_title">Contact Us</div>
                        <ul class="munu_list">
                            <li class="menu_item">
                                <span>Hotel Reservation:</span>
                                <a href="tel:4222334344" class="menu_link menu_link_bold">422-233-4344</a>
                            </li>
                            <li class="menu_item">
                                <span>Ticket Office:</span>
                                <a href="tel:4222334340" class="menu_link menu_link_bold">422-233-4340</a>
                            </li>
                            <li class="menu_item">
                                <socials />
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="footer_copy">© 2022 Travello | by Roman Lysunets</div>
            </div>
        </div>
    </footer>
</template>

<script>
import Socials from '@/components/general/Socials'

export default {
    name: "Footer",
    components: {
        Socials
    }
}
</script>

<style lang="scss">
.footer {
    background-color: #000;
    padding: 64px 0;
    font-family: 'Josefin Sans';
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
    color: #FFFFFF;
    &_wrap {
        .footer_content {
            margin-bottom: 86px;
            display: flex;
            justify-content: space-between;
            gap: 40px;
        }
        .footer_copy {
            text-align: center;
            line-height: 26px;
        }
    }
}
.footer_menu {
    .menu_title {
        margin-bottom: 25px;
    }
    .munu_list {
        display: flex;
        flex-direction: column;
        gap: 10px;
        .menu_item {
            span {
                font-size: 14px;
                line-height: 14px;
                font-weight: 400;
                opacity: 0.8;
                margin-bottom: 10px;
            }
            .menu_link {
                font-weight: 400;
                font-size: 14px;
                opacity: 0.8;
                &_bold {
                    font-weight: 500;
                    opacity: 1;
                }
                &:hover {
                    border-bottom: 1px solid #FFFFFF;
                    padding-bottom: 2px;
                    transition: all .3s ease;
                }
            }
        }
    }
}
@media screen and (max-width: 768px) {
.footer_content {
        flex-wrap: wrap;
        .footer_logo {
            flex-basis: 100%;
        }
    }
}
</style>