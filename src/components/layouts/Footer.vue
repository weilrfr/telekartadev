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
                    <p>+7 (977) 967 03 94</p>
                    <a href="https://wa.me/+77772568800?text=Здравствуйте!%20Я%20хочу%20активировать%20карту%20Телекарта." target="_blank" rel="noopener noreferrer">
                        <i class="pi pi-whatsapp w-btn"/>
                    </a>
                </div>
                <div>
                    <Button text="Вызов мастера" @click="$router.push('/callTheMaster')" class="animated-master-button"/>
                </div>
            </div>
            <p>© 2025 Партнеры спутникового телевидения |  Уверенная зона покрытия России, Казахстана, Кыргызстана</p>
        </div>
    </section>
</template>
<style scoped>
    .animated-master-button {
        display: inline-flex;
        align-items: center;
        background-color: white;
        color: black;
        justify-content: center;
        padding: 12px 25px; 
        border: none;
        border-radius: 25px; 
        font-weight: 700;
        font-size: 1.1em;
        cursor: pointer;
        text-decoration: none; 
        white-space: nowrap; 
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94); 
    }

    .animated-master-button:hover {
        background: rgb(156, 156, 156);
        transform: translateY(-3px); 
    }

    .animated-master-button:active {
        transform: translateY(0); 
    }


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
        align-items: center;
        width: 100%;
        text-align: center;
        margin-bottom: 50px;   
        justify-content: space-around; 
        flex-wrap: wrap;
    }
    .cont h1 {
        font-size: 2em;
        width: 100%;
        text-align: center;
        margin-top: 50px;
    }
    .footer > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-basis: 33%;
        text-align: center;
    }
    .footer p {
        margin: 2px 0;
        font-size: clamp(0.7rem, 1.3vw, 3rem);
    }
    .footer p:nth-child(4) {
        margin-top: 20px;
        font-size: 0.9em;
    }
    .cont > p {
        font-size: clamp(0.9rem, 1.3vw, 2rem);
        margin-bottom: 20px;
        text-align: center;
    }
    .w-btn {
        background-color: green;
        border-radius: 50px;
        font-size: 2em;
        margin-top: 20px;
        cursor: pointer;
    }
</style>