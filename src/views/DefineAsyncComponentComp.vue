<script setup lang="ts">
import { defineAsyncComponent, type Component } from 'vue';
import LoadingComp from '../components/LoadingComp.vue';
const AsyncComp = defineAsyncComponent((): Promise<Component> => import('../components/AsyncComp.vue'));
</script>

<template>
  <div class="container">
    <h1>Hello defineAsyncComponent</h1>
    <Suspense>
      <template #default>
        <AsyncComp />
      </template>
      <template #fallback>
        <LoadingComp />
      </template>
    </Suspense>
  </div>
</template>
