<template>
    <div id="app">
        <vue3-progress />
        <Header />
        <router-view />
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/general/Header"
import Footer from "@/components/general/Footer"

export default {
    name: "App",
    components: {
        Header,
        Footer
    },
    mounted() {
        this.$progress.finish()
    },
    created() {
        this.$progress.start()

        this.$router.beforeEach((to, from, next) => {
            this.$progress.start()
            next()
        })

        this.$router.afterEach((to, from) => {
            this.$progress.finish()
        })
    }
}
</script>

