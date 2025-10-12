<script setup>
import CardItem from '@/components/CardItem.vue';
import Pioner from '@/assets/pioner.png'
import Master from '@/assets/master.png'
const rates = [
    {
        img: Pioner,
        title: 'Тариф Пионер',
        routerLink: '/pioner',
    },
    {
        img: Master,
        title: 'Тариф Мастер',
        routerLink: '/master',
    },
]
</script>
<template>
    <section>        
        <div class="cards">
            <div v-for="rate in rates" :key="rate.title">
                <CardItem :rate="rate"/>
            </div>
        </div>
    </section>
</template>
<style scoped>

</style>