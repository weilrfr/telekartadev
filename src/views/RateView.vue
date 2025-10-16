<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { useRates } from '@/composable/useRates';

const route = useRoute();
const rates = useRates().rates;
const rateId = route.params.id;

const currentRate = computed(() => {
    return rates.find(rate => rate.id === rateId);
});

</script>

<template>
    <section>
        <div v-if="currentRate">
            <h1>{{ currentRate.title }}</h1>
            <img :src="currentRate.imgСhannels" :alt="currentRate.title" />
            </div>
        <div v-else>
            <p>Тариф не найден.</p>
        </div>
    </section>
</template>
<style scoped>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 50px;
    }
    h1 {
        color: rgba(212, 15, 125, 1);
        margin-bottom: 20px;
    }
    img {
        max-width: 100%;
        height: auto;
        border: 1px solid rgba(212, 15, 125, 0.2);
        border-radius: 10px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    }   
</style>