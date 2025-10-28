<script setup>
    import { defineProps } from 'vue';
    import Button from '@/components/Button.vue';
    import { useRouter } from 'vue-router'
    const router = useRouter();
    defineProps({
        rate: {
            type: Object,
            required: true
        }
    });
    function goToRate(id) {
        router.push({ name: 'rates', params: { id }});
    }
</script>
<template>
    <section>
        <div class="card" @click="goToRate(rate.id)">
            <div>
                <img :src="rate.img" :alt="rate.title" class="rate-img" />
                <h3>{{ rate.title }}</h3>
            </div>
            <div>
                <Button text="Список каналов"/>
            </div>
        </div>
    </section>
</template>
<style scoped>
    .card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border: 1px solid rgba(212, 15, 125, 0.2);
        border-radius: 10px;
        padding: 20px;
        height: 100%;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        transition: transform 0.35s ease;
        text-align: center;
        margin-top: 20px;
        cursor: pointer; /* Добавил, чтобы показать, что карточка кликабельна */
    }
    .card:hover {
        transform: translateY(-10px);
    }
    
    .card img {
        /* Изменено с width: 100% для лучшей адаптивности, если изображение меньше 100% контейнера */
        max-width: 100%; 
        height: auto; 
        margin-bottom: 20px;
        display: block; /* Убеждаемся, что блочный элемент */
        margin-left: auto; /* Центрирование изображения */
        margin-right: auto;
    }
    .card h3 {
        font-size: 1.5em;
        margin-bottom: 20px;
        color: rgba(212, 15, 125, 1);
        /* Добавил адаптивный размер шрифта для маленьких экранов */
    }

    /* Адаптивные стили для текста внутри карточки */
    @media (max-width: 480px) {
        .card {
            padding: 15px;
        }
        .card h3 {
            font-size: 1.3em;
        }
    }
</style>