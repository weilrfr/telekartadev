<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { useRates } from '@/composable/useRates';
import Button from '@/components/Button.vue';
const route = useRoute();
const rates = useRates().rates;
const rateId = route.params.id;

const currentRate = computed(() => {
    return rates.find(rate => rate.id === rateId);
});

</script>

<template>
    <section>
        <div v-if="currentRate" class="rate-details">
            <h1>{{ currentRate.title }}</h1>
            <img v-if="currentRate.imgСhannels" :src="currentRate.imgСhannels" :alt="currentRate.title" />
            <div v-else class="multiroom-info">
                <p>Услуга «Мультирум» от «Телекарты» позволяет смотреть каналы спутникового ТВ на двух телевизорах.</p>
                <p>Разные каналы одновременно: Вы можете смотреть разные каналы на обоих телевизорах, независимо друг от друга.</p>
                <p>Скидка на второй телевизор: Для дополнительного ТВ предоставляются льготные условия и скидки на абонентскую плату.</p>
                <p>Для получение более подробной информации вы можете позвонить по телефону или написать на Ватсап.</p>
            </div>
        </div>
        <div v-else>
            <p>Тариф не найден.</p>
        </div>
        <div>
            <Button text="Вернуться на главную" @click="$router.push('/')"/>
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
        text-align: center;
    }
    img {
        width: 100%;
        max-width: 100%;
        height: auto;
        border-radius: 10px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    }
    .multiroom-info {
        background-color: #f8f8f8;
        padding: 30px;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        transition: transform 0.3s, box-shadow 0.3s;
        text-align: center;
        margin-bottom: 50px;
    }

    .multiroom-info:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    }

    .multiroom-info p {
    margin-bottom: 15px;
    line-height: 1.9;
    font-size: 1.2rem; 
    color: #333;
    }
    .multiroom-info p:last-child {
        margin-bottom: 0;
        font-style: italic;
    }
</style>