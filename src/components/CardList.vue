<script setup>
    import CardItem from '@/components/CardItem.vue';
    import { useRouter } from 'vue-router'
    import { useRates } from '@/composable/useRates.js';

    const router = useRouter();
    const { rates } = useRates();
    function goToRate(id) {
        router.push({ name: 'rates', params: { id }});
    }
</script>
<template>
    <section class="card-list">        
        <div class="cards">
            <div v-for="rate in rates" :key="rate.title">
                <CardItem :rate="rate" @click="goToRate(rate.id)"/>
            </div>
        </div>
    </section>
</template>
<style scoped>
    .card-list {
        display: flex;
        justify-content: center;
        width: 100%;
    }
    .cards {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        max-width: 1300px;
        width: 100%;
        margin-top: 50px;
    }
</style>