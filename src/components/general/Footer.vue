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
                                <a href="tel:1234567890" class="menu_link menu_link_bold">422-233-4344</a>
                            </li>
                            <li class="menu_item">
                                <span>Ticket Office:</span>
                                <a href="tel:1234567890" class="menu_link menu_link_bold">422-233-4340</a>
                            </li>
                            <li class="menu_item">
                                <!-- <ul class="socials">
                                    <li class="social_item">
                                        <a href="https://www.facebook.com/" class="social_link"
                                            rel="nofollow, noreferrer" title="Facebook" target="_blank">
                                            <svg width="10" height="18" viewBox="0 0 10 18" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M6.39703 17.997V9.801H9.16203L9.57303 6.592H6.39703V4.548C6.39703 3.622 6.65503 2.988 7.98403 2.988H9.66803V0.126997C8.84903 0.0389974 8.02503 -0.00300262 7.20103 -2.6249e-06C4.75703 -2.6249e-06 3.07903 1.492 3.07903 4.231V6.586H0.332031V9.795H3.08503V17.997H6.39703Z"
                                                    fill="white" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li class="social_item">
                                        <a href="https://www.instagram.com/" class="social_link"
                                            rel="nofollow, noreferrer" title="Instagram" target="_blank">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M13.5 0H4.5C2.02522 0 0 2.02432 0 4.5V13.5C0 15.9748 2.02522 18 4.5 18H13.5C15.9748 18 18 15.9748 18 13.5V4.5C18 2.02432 15.9748 0 13.5 0ZM9 12.7499C6.92865 12.7499 5.24993 11.0704 5.24993 9C5.24993 6.92865 6.92865 5.24993 9 5.24993C11.0704 5.24993 12.7501 6.92865 12.7501 9C12.7501 11.0704 11.0704 12.7499 9 12.7499ZM12.7501 4.12492C12.7501 4.74615 13.2532 5.24992 13.8751 5.24992C14.497 5.24992 15.0001 4.74615 15.0001 4.12492C15.0001 3.5037 14.497 2.99992 13.8751 2.99992C13.2532 2.99992 12.7501 3.5037 12.7501 4.12492Z"
                                                    fill="white" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li class="social_item">
                                        <a href="https://twitter.com/" class="social_link" rel="nofollow, noreferrer"
                                            title="Twitter" target="_blank">
                                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M17.633 3.99701C17.646 4.17201 17.646 4.34601 17.646 4.52001C17.646 9.84501 13.593 15.981 6.186 15.981C3.904 15.981 1.784 15.32 0 14.172C0.324 14.209 0.636 14.222 0.973 14.222C2.856 14.222 4.589 13.586 5.974 12.501C4.203 12.464 2.719 11.304 2.207 9.70801C2.456 9.74501 2.706 9.77001 2.968 9.77001C3.329 9.77001 3.692 9.72001 4.029 9.63301C2.182 9.25901 0.799 7.63801 0.799 5.68001V5.63001C1.336 5.92901 1.959 6.11601 2.619 6.14101C1.534 5.41901 0.823 4.18401 0.823 2.78701C0.823 2.03901 1.022 1.35301 1.371 0.755012C3.354 3.19801 6.335 4.79501 9.677 4.97001C9.615 4.67001 9.577 4.35901 9.577 4.04701C9.577 1.82701 11.373 0.0190125 13.605 0.0190125C14.765 0.0190125 15.812 0.505012 16.548 1.29101C17.458 1.11601 18.33 0.779012 19.104 0.318012C18.805 1.25301 18.168 2.03901 17.333 2.53801C18.144 2.45001 18.93 2.22601 19.652 1.91401C19.104 2.71201 18.419 3.42301 17.633 3.99701Z"
                                                    fill="white" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li class="social_item">
                                        <a href="https://www.youtube.com/" class="social_link"
                                            rel="nofollow, noreferrer" title="You Tube" target="_blank">
                                            <svg width="23" height="16" viewBox="0 0 23 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M19.9673 0.731491C20.929 0.856793 21.8482 1.7921 21.9651 2.76751C22.3792 6.34222 22.3792 9.80863 21.9651 13.3822C21.8482 14.3576 20.929 15.2941 19.9673 15.4182C14.1029 16.1469 8.17221 16.1469 2.30949 15.4182C1.34689 15.2938 0.427732 14.3576 0.310784 13.3822C-0.103269 9.80835 -0.103269 6.34222 0.310784 2.76751C0.427732 1.7921 1.34689 0.856515 2.30949 0.731491C8.17221 0.00279225 14.1026 0.00279225 19.9673 0.731491ZM9.28155 4.36274V11.7881L14.8505 8.07556L9.28155 4.36274Z"
                                                    fill="white" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul> -->
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
    // .socials {
    //     margin-left: -10px;
    //     padding-top: 20px;
    //     display: flex;
    //     gap: 20px;
    //     .social_item {
    //         width: 40px;
    //         height: 40px;
    //         .social_link {
    //             width: 100%;
    //             height: 100%;
    //             align-items: center;
    //             display: flex;
    //             align-items: center;
    //             justify-content: center;
    //             transition: all .2s ease;
    //             border-radius: 50%;
    //             &:hover {
    //                 outline: 2px solid #fff;
    //                 transform: scale(1.05);
    //             }
    //         }

    //     }
    // }
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