<script lang="ts" setup>
import { ref } from 'vue';
const isShow = ref(false);
</script>

<template>
    <div class="container">
        <h1>Teleport</h1>
        <button @click="isShow = true">open</button>
        <Teleport to="#tel-modal">
            <div v-if="isShow" class="tel-modal">
                <div>
                    this is Teleport
                </div>
                <button @click="isShow = false">close</button>
            </div>
        </Teleport>
    </div>
</template>

<style scoped lang="scss">
.tel-modal {
    border: 1px solid black;
}
</style>