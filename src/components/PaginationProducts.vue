<template>
    <!-- <p>Paginas {{totalPages()}}</p> -->
    <ul v-if="totalPages > 1">
        <!-- <router-link :to="{query:query(1)}">Início</router-link> -->
<!-- {{ pages }} -->
        <li v-for="page in pages" :key="page">
            <router-link :to="{query:query(page)}">{{ page }}</router-link>
        </li>
        <!-- <router-link :to="{query:query(totalPages)}">Fim</router-link> -->

    </ul>
</template>

<script>
export default {
    props: {
        productPages: {
            type: Number,
            default: 1,
        },
        totalProducts: {
            type: Number,
            default: 1
        }
    },
    methods: {

        query(page) {
            return {
                ...this.$route.query,
                _page: page
            }
        }
    },

    computed: {
        pages() {
            const currentPage = Number(this.$route.query._page)
            const range = 9
            const offset = Math.ceil(range / 2)
            const total = this.totalPages
            const pagesArray = []

            for (let i = 1; i <= total; i++) {
                pagesArray.push(i)
            }

            pagesArray.splice(0, currentPage - offset)
            pagesArray.splice(range, total)

            return pagesArray
        },

        totalPages() {
            const total = this.totalProducts / this.productPages;
            return total !== Infinity ? Math.ceil(total) : 0;

        },
    }
}
</script>

<style scoped>
    ul {
        grid-column: 1/ -1;
    }
    li {
        display: inline-block;
    }

    li a {
        padding: 2px 8px;
        border-radius: 2px;
        margin: 4px;
    }

    li a.router-link-exact-active,
    li a:hover {
        background: #87f;
        color: #fff;
    }
</style>