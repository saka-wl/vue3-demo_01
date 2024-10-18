<script setup lang="ts">

</script>

<template>
  <div class="app-container">
    <h1>Hello Vue3</h1>
    <div id="tel-modal"></div>
    <button @click="$router.push('/api/home')">about home</button>
    <button @click="$router.push('/api/defineAsyncComponent')">about defineAsyncComponent&Suspense</button>
    <button @click="$router.push('/api/teleport')">about teleport</button>
    <button @click="$router.push('/api/notUseDynamicComp')">about not use dynamic router</button>
    <RouterView />
  </div>
</template>

<style scoped>

</style>
