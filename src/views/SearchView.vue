<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { RouterLink } from 'vue-router';

const searchQuery: Ref<string> = ref("");

</script>

<template>
    <h1>Search a product</h1>
    <section>
        <form @submit.prevent>
            <label for="query">Search Bar</label>
            <input v-model="searchQuery" type="text" id="query" placeholder="Search...">
            <RouterLink :to="{ name: 'resultats', query: { search: searchQuery } }">Buscar</RouterLink>
        </form>
    </section>
</template>