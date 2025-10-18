<script setup>
import Button from '@/components/Button.vue';
</script>
<template>
    <section>
        <div class="cont">
            <h1>TelekartaTV</h1>
            <div class="footer">
                <div>
                    <img src="@/assets/equipment.png" alt="logo" />
                    <p>ДОСТАВКА СПУТНИКОВОГО ОБОРУДОВАНИЯ ПОД ЗАКАЗ !</p>
                </div>
                <div>
                    <p>+7 (777) 256 88 00</p>
                    <p>+7 (747) 154 37 37</p>
                    <a href="https://wa.me/+77772568800?text=Здравствуйте!%20Я%20хочу%20активировать%20карту%20Телекарта." target="_blank" rel="noopener noreferrer">
                        <i class="pi pi-whatsapp btn"/>
                    </a>
                </div>
            </div>
            <p>© 2025 Партнеры спутникового телевидения |  Уверенная зона покрытия России, Казахстана, Кыргызстана</p>
        </div>
    </section>
</template>
<style scoped>
    section {
        display: flex;
        justify-content: center;
        background-color: rgba(212, 15, 125, 1);
        color: white;
        margin-top: 25vh;
    }
    .cont {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        flex-wrap: wrap;
        max-width: 1300px;
    }
    .footer {
        display: flex;
        background-color: rgba(212, 15, 125, 1);
        align-items: flex-end;
        width: 100%;
        text-align: center;
        margin-bottom: 50px;    
    }
    .cont h1 {
        font-size: 2em;
        width: 100%;
        text-align: center;
        margin-top: 50px;
    }
    .footer div {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-basis: 100%;
        text-align: center;
    }
    .footer p {
        margin: 2px 0;
    }
    .footer p:nth-child(4) {
        margin-top: 20px;
        font-size: 0.9em;
    }
    .cont > p {
        font-size: 1.2em;
        margin-bottom: 20px;
    }
    .btn {
        background-color: green;
        border-radius: 50px;
        font-size: 2em;
        margin-top: 20px;
        cursor: pointer;
    }
</style>