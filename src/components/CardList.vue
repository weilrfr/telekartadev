<script setup>
import CardItem from '@/components/CardItem.vue';
import Pioner from '@/assets/pioner.png';
import Master from '@/assets/master.png';
import Lider from '@/assets/lider.png';
import Premier from '@/assets/premier.png';
const rates = [
    {
        id: 'pioner',
        img: Pioner,
        title: 'Тариф Пионер',
    },
    {
        id: 'master',
        img: Master,
        title: 'Тариф Мастер',
    },
    {
        id: 'lider',
        img: Lider,
        title: 'Тариф Мастер',
    },
    {
        id: 'master',
        img: Premier,
        title: 'Тариф Мастер',
    },
]
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
</style>