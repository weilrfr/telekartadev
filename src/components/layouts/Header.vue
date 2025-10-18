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
                <img src="../../assets/Telekarta_logo_main_color.png" alt="Telekarta Logo" @click="$router.push('/')"/>
            </div>
            <div class="nav">
                <ul>
                    <li>Проверить подписку телекарты вы можете, отправив фотографию с номером карты в WhatsApp</li>
                    <li>
                        <a href="https://wa.me/+77772568800?text=Здравствуйте!%20Я%20хочу%20активировать%20карту%20Телекарта." target="_blank" rel="noopener noreferrer">
                        <i class="pi pi-whatsapp btn"/>
                    </a>
                    </li>
                    <li class="contacts">
                        <span>+7 (777) 256 88 00</span>
                        <span>+7 (747) 154 37 37</span>
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

    img {
        width: 70%;
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
    }

    .partners img {
        width: 20%;
    }

    .partners p {
        margin: 0 10px;
        font-size: 1.2em;
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
        display: flex;
        justify-content: flex-end;
        text-align: center;
    }
    .contacts {
        display: flex;
        flex-wrap: wrap;
    }
    .contacts span {
        flex-basis: 100%;
    }

    @media (max-width: 900px) {
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
    }

    @media (max-width: 500px) {
        .page-header h1 {
            font-size: 2em;
        }
        .partners {
            margin-right: 10px;
        }
        .partners img {
            width: 20px;
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