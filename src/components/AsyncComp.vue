<script lang="ts" setup>
import { ref } from "vue";
import { delay } from "../utils/helpFn";
const article = ref('');
const init = async () => {
    await delay(4000);
    article.value = 'hello world'
}
await init();
</script>

<template>
    <div class="container">
        <div>
            {{ article }}
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>