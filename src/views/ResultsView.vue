<script setup lang="ts">
import { computed, ref, type ComputedRef, type Ref } from 'vue';
import { useRoute } from 'vue-router';
import type { Product } from "../models/Product";
import ProductService from "../services/ProductService";


const route = useRoute();

const productService = new ProductService();

const products: Ref<Product[]> = ref(productService.getProducts());

const searched_products = computed<Product[]>(() => products.value.filter(product => product.name.toLowerCase().startsWith(route.query.search as string)));

</script>

<template>
    <h1>Results page</h1>
    <section v-if="searched_products?.length > 0">
        <article v-for="product in searched_products" :key="product.id">
            <h2>{{ product.name }}</h2>
            <RouterLink :to="{ name: 'product', params: { id: product.id } }">Go to Detail</RouterLink>
        </article>
    </section>
    <section v-else>
        <p>There are no matches.</p>
    </section>
</template>