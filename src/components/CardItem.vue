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
        router.push({ name: 'rate', params: { id }});
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
                <Button text="Подробнее о тарифе" @click="goToRate(rate.routerLink)"/>
            </div>
        </div>
    </section>
</template>
<style scoped></style>