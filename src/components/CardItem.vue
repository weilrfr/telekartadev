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
        console.log(id);
    }

</script>
<template>
    <section>
        <div class="card">
            <div>
                <img :src="rate.img" :alt="rate.title" />
                <h3>{{ rate.title }}</h3>
            </div>
            <div>
                <Button text="Подробнее о тарифе" @click="goToRate(rate.id)"/>
            </div>
        </div>
    </section>
</template>
<style scoped></style>