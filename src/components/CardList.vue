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

    .cards {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        max-width: 1300px;
        width: 100%;
        margin-top: 50px;
    }

    .cards > :deep(div) { 
        flex-basis: 23%; 
        margin-bottom: 20px;
    }

    .cards > :deep(div:nth-child(5) .card img),
    .cards > :deep(div:nth-child(6) .card img),
    .cards > :deep(div:nth-child(7) .card img) {
        width: 50%;
    }
    .cards > :deep(div:nth-child(7) h3) {
        font-size: 20px;
    }
    @media (max-width: 1024px) {
        .cards {
            justify-content: space-around; 
        }
        .cards > :deep(div) {
            flex-basis: 45%; 
        }
    }

    @media (max-width: 480px) {
        .cards > :deep(div) {
            flex-basis: 95%;
        }
    }
</style>