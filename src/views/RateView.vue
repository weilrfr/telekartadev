<script setup>
import { defineProps } from 'vue';

defineProps({
    rate: {
        type: Object,
        required: true
    }
});
</script>

<template>
    <section>
        <img :src="rate.img"></img>
    </section>
</template>