<script setup lang="ts">
import { computed, ref, type ComputedRef, type Ref } from 'vue';
import { useRoute } from 'vue-router';
import type { Product } from "../models/Product";
import ProductService from "../services/ProductService";

const route = useRoute();

const productService = new ProductService();

const products: Ref<Product[]> = ref(productService.getProducts());
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