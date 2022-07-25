<template>
    <div class="cards">
        <div class="container">
            <div class="cards_wrap">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardsWrapper"
}
</script>

<style lang="scss">
.cards {
    padding-bottom: 60px;
    &_wrap {
        display: flex;
        justify-content: space-around;
        gap: 20px;
    }
}
@media screen and (max-width: 900px) {
    .cards_wrap {
        flex-wrap: wrap;
        justify-content: center;
        .card {
            flex-basis: 45%;
        }
    }
}
@media screen and (max-width: 550px) {
    .cards_wrap {
        .card {
            flex-basis: 100%;
        }
    }
}
</style>