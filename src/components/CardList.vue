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

    /* Удалил 'div' и оставил только селектор для элемента-обертки карточки */
    .cards > :deep(div) { 
        /* Базовая ширина для 4-х карточек в ряд на больших экранах, с учетом margin/gap */
        flex-basis: 23%; 
        margin-bottom: 20px; /* Отступ между рядами */
    }
    
    /* Сохраняем специфическое уменьшение изображений, используя более современный селектор */
    .cards > :deep(div:nth-child(5) .card img),
    .cards > :deep(div:nth-child(6) .card img),
    .cards > :deep(div:nth-child(7) .card img) {
        width: 50%;
    }

    /* ---------------------------------------------------- */
    /* МЕДИА-ЗАПРОСЫ                      */
    /* ---------------------------------------------------- */

    /* Планшеты (прибл. 1024px и меньше): 3 карточки в ряд */


    /* Более маленькие планшеты / большие телефоны (прибл. 768px и меньше): 2 карточки в ряд */
    @media (max-width: 1024px) {
        .cards {
            justify-content: space-around; /* или space-evenly */
        }
        .cards > :deep(div) {
            /* 50% - отступы, чтобы уместиться в 2 колонки */
            flex-basis: 45%; 
        }
    }

    /* Телефоны (прибл. 480px и меньше): 1 карточка в ряд */
    @media (max-width: 480px) {
        .cards > :deep(div) {
            /* 100% для одной колонки */
            flex-basis: 95%;
        }
    }
</style>