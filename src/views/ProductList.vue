<script setup lang="ts">
import { type Ref, ref } from 'vue';
import { useRoute, RouterLink } from 'vue-router';

import type { Product } from "../models/Product";
import ProductService from "../services/ProductService";

const productService = new ProductService();

const products: Ref<Product[]> = ref(productService.getProducts());

const route = useRoute();


</script>

<template>
    <h1>Product List</h1>
    <section>
        <article v-for="product in products" :key="product.id">
            <h2>{{ product.name }}</h2>
            <RouterLink :to="{ name: 'product', params: { id: product.id } }">Go to Detail</RouterLink>
        </article>
    </section>
</template>