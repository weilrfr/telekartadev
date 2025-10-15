<script setup>
import Button from '@/components/Button.vue';
</script>
<template>
    <section>
        <div class="cont">
            <div>
                <img src="../../assets/Telekarta_logo_main_color.png" alt="Telekarta Logo" @click="$router.push('/')"/>
            </div>
            <div class="nav">
                <ul>
                    <li>Вызов мастера</li>
                    <li>Контакты</li>
                    <li><Button text="Оплатить"/></li>
                </ul>
            </div>
        </div>
    </section>
</template>
<style scoped>

    section {
        display: flex;
        justify-content: center;
    }
    .cont img {
        width: 70%;
    }
    .cont :nth-child(1) {
        flex-basis: 30%;
    }
    .cont :nth-child(2) {
        flex-basis: 70%;
        display: flex;
        justify-content: flex-end;
    }
    .nav ul {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 100px;
        list-style-type: disc;
    }
</style>