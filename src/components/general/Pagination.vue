<template>
    <ul class="pagination" v-if="total !== 0 ">
        <li :class="{ 'disabled': isDisabledFirst }">
            <a href="#" @click.prevent="goToPage(page - 1)">&#60;&#60;</a>
        </li>

        <template v-if="showFirst">
            <li>
                <a href="#" @click.prevent="goToPage(1)">1</a>
            </li>
            <li>
                <span>...</span>
            </li>
        </template>

        <li v-for="p in pageRange" :key="p" :class="{ 'active': p === page }">
            <a href="#" @click.prevent="goToPage(p)">{{ p }}</a>
        </li>

        <template v-if="showLast">
            <li>
                <span>...</span>
            </li>
            <li>
                <a href="#" @click.prevent="goToPage(total)">{{ total }}</a>
            </li>
        </template>

        <li :class="{ 'disabled': isDisabledLast }">
            <a href="#" @click.prevent="goToPage(page + 1)">&#62;&#62;</a>
        </li>
    </ul>
</template>

<script>
export default {
    name: "Pagination",
    props: {
        page: {
            type: Number,
            default: 1,
            required: true
        },
        total: {
            type: Number,
            default: 0,
            required: true
        }
    },
    computed: {
        isDisabledFirst() {
            return this.page === 1
        },
        isDisabledLast() {
            return this.page === this.total
        },
        showFirst() {
            return this.page > 4 && this.total > 6
        },
        showLast() {
            return this.page < this.total - 3 && this.total > 6
        },
        pageRange() {
            let from = this.page - 2
            let to = this.page + 2
            if (this.page < 5) {
                from = 1
                to = 5
            }
            if (this.page > this.total - 4) {
                from = this.total - 4
                to = this.total
            }
            if (from < 1) {
                from = 1
            }
            if (to > this.total) {
                to = this.total
            }
            return Array(to - from + 1).fill().map((_, idx) => from + idx)
        }
    },
    methods: {
        goToPage(new_page) {
            this.$emit("toPage", new_page)
        }
    }
}
</script>

<style lang="scss">

.pagination {
    margin-bottom: 30px;
    padding-left: 20px;
    li {
        display: inline-block;
        cursor: pointer;
        background-color: rgba(85, 183, 255, .6);
        color: #fff;
        font-family: 'Playfair Display';
        font-weight: 500;
        font-size: 18px;
        padding: 5px 7px 7px;
        &.disabled {
            background-color: lightgrey;
        }

        &.active {
            background-color: #2194e6;
        }
    }
}
</style>