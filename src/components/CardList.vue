<script setup>
    import CardItem from '@/components/CardItem.vue';
    import { useRates } from '@/composable/useRates.js';

    const { rates } = useRates();

</script>
<template>
    <section class="card-list">        
        <div class="cards">
            <div v-for="rate in rates" :key="rate.title">
                <CardItem :rate="rate"/>
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

    .cards > div {
        flex-basis: 23%;
    }
                                                                                    
    .cards > div:nth-child(5):deep(.card img),
    .cards > div:nth-child(6):deep(.card img),
    .cards > div:nth-child(7):deep(.card img) {
        width: 50%;
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