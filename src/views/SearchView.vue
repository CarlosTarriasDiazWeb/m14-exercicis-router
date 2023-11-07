<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

const searchQuery: Ref<string> = ref("");
const errorMessage: Ref<string> = ref("");

const router = useRouter();

const searchProducts = () => {

    errorMessage.value = "";
    if (searchQuery.value !== "") {
        router.push({ path: '/resultats', query: { search: searchQuery.value } });
    }
    else {
        errorMessage.value = "Search field cannot be empty";
    }


};

</script>

<template>
    <h1>Search a product</h1>
    <section>
        <form @submit.prevent>
            <label for="query">Search Product</label>
            <input v-model.trim="searchQuery" type="text" id="query" placeholder="Search...">
            <button @click="searchProducts()" type="submit">Find</button>
            <!-- <RouterLink :to="{ name: 'resultats', query: { search: searchQuery } }">Find</RouterLink> -->
        </form>
    </section>
    <div>
        {{ errorMessage }}
    </div>
</template>
<style scoped></style>