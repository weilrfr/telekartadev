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
                    <li class="contacts">
                        <span>+7 (777) 256 88 00</span>
                        <span>+7 (747) 154 37 37</span>
                    </li>
                    <li><Button text="Оплатить" @click="$router.push('/payment')"/></li>
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
    .cont > :nth-child(1) {
        flex-basis: 30%;
    }
    .cont > :nth-child(2) {
        flex-basis: 70%;
        display: flex;
        justify-content: flex-end;
    }
    .nav ul {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        list-style-type: disc;
    }
    .nav ul li {
        font-size: 1.1em;
        flex-basis: 33%;
    }
    .contacts {
        display: flex;
        flex-wrap: wrap;
    }
    .contacts span {
        flex-basis: 100%;
    }
</style>