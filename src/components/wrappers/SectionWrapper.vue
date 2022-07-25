<template>
    <section class="section">
        <div class="container">
            <div class="section_wrapper">
                <div class="section_header">
                    <div class="header_hint hint">{{ hint }}</div>
                    <h2 class="header_title section_title">{{ title }}</h2>
                </div>
                <div class="section_body">
                    <p>{{ descr }}</p>
                    <slot></slot>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "SectionWrapper",
    props: {
        hint: {
            type: String,
            default: "",
            required: true
        },
        title: {
            type: String,
            default: "",
            required: true
        },
        descr: {
            type: String,
            default: ""
        }
    }
}
</script>

<style lang="scss" scoped>
.section {
    padding: 60px 0;
    &_wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        .section_header {
            text-align: center;
        }
        .section_body {
            p {
                max-width: 690px;
                font-family: 'Work Sans';
                font-weight: 400;
                font-size: 18px;
                line-height: 150%;
                text-align: center;
                color: #FFFFFF;
                margin-bottom: 30px;
            }
        }
    }
}
</style>