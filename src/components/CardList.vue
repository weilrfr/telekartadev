<script setup>
import CardItem from '@/components/CardItem.vue';
const rates = [
    {
        id: 'pioner',
        img: () => import('@/assets/pioner.png'),
        title: 'Тариф Пионер',
    },
    {
        id: 'master',
        img: () => import('@/assets/master.png'),
        title: 'Тариф Мастер',
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