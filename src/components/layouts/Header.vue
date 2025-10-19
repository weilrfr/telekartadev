<script setup>
import Button from '@/components/Button.vue';
</script>
<template>
    <section>
        <div class="cont">
            <div class="logo-partners">
                <div class="partners">
                    <p>Официальные</p>
                    <img src="@/assets/partners.png"/>
                    <p>Партнеры</p>
                </div>
                <img src="../../assets/Telekarta_logo_main_color.png" alt="Telekarta Logo" @click="$router.push('/')" class="logo-img"/>
            </div>
            <div class="nav">
                <ul>
                    <li>Проверить подписку телекарты вы можете, отправив фотографию с номером карты в WhatsApp</li>
                    <li class="contacts">
                        <div class="w-btns">
                            <a href="https://wa.me/+77772568800?text=Здравствуйте!%20Я%20хочу%20активировать%20карту%20Телекарта." target="_blank" rel="noopener noreferrer">
                                <i class="pi pi-whatsapp w-btn"/>
                            </a>
                            <a href="https://wa.me/+77471543737?text=Здравствуйте!%20Я%20хочу%20активировать%20карту%20Телекарта." target="_blank" rel="noopener noreferrer">
                                <i class="pi pi-whatsapp w-btn"/>
                            </a>
                        </div>
                        <div class="numbers">
                            <span>+7 (777) 256 88 00</span>
                            <span>+7 (747) 154 37 37</span>
                        </div>
                    </li>
                    <li class="master-call-button"> 
                        <Button text="Вызов мастера" @click="$router.push('/callTheMaster')" class="animated-master-button"/>
                    </li>
                    <li><Button text="Оплатить" @click="$router.push('/payment')"/></li>
                </ul>
            </div>
        </div>
    </section>
</template>
<style scoped>
    .partners img {
        width: 100%;
        height: auto; 
        max-width: 100px; 
    }
    .partners > * {
        flex-basis: 30%;
    }
    .animated-master-button {
        display: inline-flex;
        align-items: center;
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

        background-color: var(--brand-color); 
        color: var(--white); 
        
        box-shadow: 0 5px 15px rgba(212, 15, 125, 0.4); 
    }

    .animated-master-button:hover {
        background-color: var(--brand-color-dark);
        box-shadow: 0 8px 20px rgba(212, 15, 125, 0.6); 
        transform: translateY(-3px); 
    }

    .animated-master-button:active {
        transform: translateY(0); 
        box-shadow: 0 2px 5px rgba(212, 15, 125, 0.2); 
    }

    .logo-img {
        width: 30%;
    }

    section {
        display: flex;
        justify-content: center;
    }

    .logo-partners {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    

    .partners {
        display: flex;
        align-items: center;
        margin-right: 20px;
        flex-basis: 30%;
        justify-content: center;
    }
    .logo-partners > img {
        flex-basis: 70%;
    }

    .partners p {
        margin: 0 10px;
        font-size: 1.2em;
        white-space: nowrap; 
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
        flex-basis: 25%;
        display: flex;
        justify-content: center;
        text-align: center;
    }
    .contacts {
        display: flex;
    }
    .contacts .w-btns {
        display: flex;
        flex-direction: column;
        margin-right: 10px;
        
    }
    .w-btn {
        background-color: green;
        border-radius: 50px;
        font-size: 1em;
        color: rgb(255, 255, 255);
        cursor: pointer;
    }
    .contacts .numbers {
        display: flex;
        flex-direction: column;
    }
    .numbers span {
        font-size: 1.1vw;
    }
    .nav ul li:nth-child(1) {
        font-size: 1.2vw;
    }
    
    @media (max-width: 1100px) {
        .nav ul li:nth-child(1) {
            font-size: 2vw;
        }
        .cont {
            flex-direction: column; 
            align-items: center;
        }
        .cont > :nth-child(1),
        .cont > :nth-child(2) {
            flex-basis: 100%; 
            justify-content: center; 
        }
        .logo-partners {
            margin-bottom: 15px;
            width: 100%;
            justify-content: center;
        }
        

        .partners {
            flex-basis: auto; 
            flex-direction: column; 
            margin-right: 0; 
            align-items: center; 
            margin-bottom: 15px; 
        }
        
        .partners p {
            font-size: 1.5em; 
            margin: 5px 0;
            white-space: normal;
        }
        
        .partners img {
            max-width: 150px;
            margin: 10px 0;
        }

        .nav ul {
            flex-direction: column; 
            width: 100%;
            align-items: center;
        }
        .nav ul li {
            margin: 10px 0;
        }
        .contacts {
            align-items: center; 
        }
        .numbers span {
            font-size: 2vw;
        }
    }

    @media (max-width: 500px) {
        .nav ul li:nth-child(1) {
            font-size: 3vw;
        }
        .numbers span {
            font-size: 3vw;
        }
        .page-header h1 {
            font-size: 2em;
        }
        .partners {
            flex-direction: column; 
            width: auto;
            margin: 0;
        }
        .partners p {
            font-size: 1.1em;
        }
        
        .partners img {
             max-width: 80px; 
        }
        
        .logo-partners {
             flex-wrap: nowrap;
             align-items: center;
        }
        
        .logo-partners > img {
            width: 200px;
        }
        .animated-master-button, .pay-button {
            padding: 8px 15px;
            font-size: 0.9em;
        }
    }
</style>