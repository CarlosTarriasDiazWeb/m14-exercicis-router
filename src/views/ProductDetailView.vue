<script setup lang="ts">
import { computed, ref, type ComputedRef, type Ref } from 'vue';
import { useRoute } from 'vue-router';


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

const current_product: ComputedRef<Product | undefined> = computed(() => products.value.find(product => product.id === Number(route.params.id)));

</script>

<template>
    <h1>Product Detail</h1>
    <section>
        <p>Product ID : {{ current_product?.id }}</p>
        <p>Product Name : {{ current_product?.name }}</p>
        <p>Product Category : {{ current_product?.category }}</p>
        <p>Product Price : {{ current_product?.price }}</p>
    </section>
</template>