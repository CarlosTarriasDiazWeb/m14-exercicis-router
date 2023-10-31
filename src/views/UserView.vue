<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

</script>

<template>
    <h1>Usuari</h1>
    <ul>
        <li>
            <p>{{ route.params.postId }}</p>
        </li>
        <li>
            <p>{{ route.params.username }}</p>
        </li>
        <li>
            <p>{{ route.params }}</p>
        </li>

    </ul>
</template>