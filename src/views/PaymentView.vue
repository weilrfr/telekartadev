<script setup>
    function copyNumber(number){
        navigator.clipboard.writeText(number);
    }
</script>
<template>
    <section>
        <div class="hs">
            <h1>Активация карты «Телекарта»</h1>
            <p>Начните смотреть ТВ: Активируйте вашу карту!</p>
        </div>
        <div class="payment-info">
            <div class="info">
                <h2>Как активировать карту?</h2>
                <p>Для этого необходимо отправить номер вашей Телекарты на один из номеров ватсап(12 знаков без дефиса)</p>
                <p>Или позвонить по одному из номеров снизу</p>
                <p>Ваша карта будет активирована в течение 12 часов с момента получения запроса.</p>
            </div>
            <div class="payment">
                <p>Активая карты через WhatsApp или по номеру телефона</p>
                <div>
                    <div class="number">
                        <p>+7 (777) 256 88 00</p>
                        <i class="pi pi-clipboard" @click="copyNumber('+7 (777) 256 88 00')"></i>
                    </div>
                    <div class="number">
                        <p>+7 (747) 154 37 37</p>
                        <i class="pi pi-clipboard" @click="copyNumber('+7 (747) 154 37 37')"></i>
                    </div>
                    <div class="w-button">
                        <a href="https://wa.me/+77772568800?text=Здравствуйте!%20Я%20хочу%20активировать%20карту%20Телекарта." target="_blank" rel="noopener noreferrer">
                            <button>Написать на ватсап<i class="pi pi-whatsapp"></i></button>
                        </a>
                    </div>
                    <div class="w-button">
                        <a href="https://wa.me/+77471543737?text=Здравствуйте!%20Я%20хочу%20активировать%20карту%20Телекарта." target="_blank" rel="noopener noreferrer">
                            <button>Написать на ватсап<i class="pi pi-whatsapp"></i></button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
    .hs {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
    }
    .payment-info {
        display: flex;
        justify-content: center;
        margin-top: 50px;
        flex-wrap: wrap;
    }
    .payment-info > div {
        flex-basis: 50%;
    }
    .info {
        border: 1px solid rgba(212, 15, 125, 0.2);
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        transition: transform 0.35s ease;
        text-align: center;
        margin-bottom: 20px;
        font-size: 1.1em;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .payment {
        border: 1px solid rgba(212, 15, 125, 0.2);
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        transition: transform 0.35s ease;
        text-align: center;
    }
    .payment > div {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .payment > div > div{
        display: flex;
        flex-basis: 45%;
    }
    .payment .number {
        display: flex;
        border: 1px solid rgba(212, 15, 125, 0.2);
        border-radius: 20px;
        padding: 10px 0px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        margin-top: 10px;
        flex-basis: 45%;
    }
    
    .w-button button{
        display: flex;
        border: 1px solid rgba(212, 15, 125, 0.2);
        border-radius: 20px;
        justify-content: center;
        padding: 10px 20px;
        margin-top: 20px;
        background-color: rgba(212, 15, 125, 1);
        width: 100%;
        transition: 300ms;
        color: white;
    }
    .w-button a {
        text-decoration: none;
        width: 100%;
    }
    .w-button button:hover {
        background: rgb(6, 211, 40);
        color: white;
        transition: 300ms;
        cursor: pointer;
    }
    .number i {
        margin-left: 10px;
        border-radius: 5px;
        padding: 3px;
        cursor: pointer;
        transition: background-color 0.2s, transform 0.1s, box-shadow 0.2s;
    }
    .number i:hover {
        background-color: rgba(212, 15, 125, 0.2);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    .number i:active {
        transform: scale(0.95);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
    .w-button i {
        margin-left: 10px;
        font-size: 1.2em;
    }
</style>