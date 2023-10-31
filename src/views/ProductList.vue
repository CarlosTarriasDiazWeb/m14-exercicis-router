<script setup lang="ts">
import { type Ref, ref } from 'vue';
import { useRoute, RouterLink } from 'vue-router';

interface Product {
    id: number,
    name: string,
    category: string,
    price: number
}

const route = useRoute();

const products: Ref<Product[]> = ref([
    { id: 1, name: 'product_1', category: 'basics', price: 10.54 },
    { id: 2, name: 'product_2', category: 'convenience', price: 20.50 },
    { id: 3, name: 'product_3', category: 'industrial', price: 32.50 },
    { id: 4, name: 'product_4', category: 'basics', price: 9.99 },
    { id: 5, name: 'product_5', category: 'emergency', price: 19.99 },
    { id: 6, name: 'product_6', category: 'convenience', price: 29.99 },
])

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