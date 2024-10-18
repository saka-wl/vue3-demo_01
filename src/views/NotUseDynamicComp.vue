<script lang="ts" setup>
import { ref } from 'vue';

const state = ref(0);
</script>

<template>
    <div class="container">
        <h1>Hello</h1>
        <span>this is not dynamic router</span>
        <button @click="state ++">{{ state }}</button>
    </div>
</template>
