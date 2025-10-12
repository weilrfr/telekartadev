<script setup>
import CardItem from '@/components/CardItem.vue';
const rates = [
    {
        img: '',
        title: 'Тариф Пионер',
        routerLink: '/pioner',
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