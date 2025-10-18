<script setup>
// Здесь могут быть импорты, но для этой страницы они не требуются.
// PrimeIcons используются напрямую в шаблоне через классы.
</script>

<template>
    <section class="master-services">
        <div class="cont">
            <header class="page-header">
                <h1>Услуги и возможности наших мастеров</h1>
                <p>Ваш комфорт и бесперебойный просмотр — наш приоритет. Наши сертифицированные мастера готовы оказать полный спектр технической поддержки прямо у вас дома.</p>
            </header>

            <div class="services-list">
                
                <div class="service-card">
                    <div class="icon pi pi-search"></div>
                    <h2>Проверка технического состояния оборудования</h2>
                    <p>Проведем полную диагностику вашей спутниковой антенны, конвертера, кабельной линии и приёмника. Мы выявим и устраним причины плохого сигнала или перебоев в работе, гарантируя стабильный прием.</p>
                </div>

                <div class="service-card">
                    <div class="icon pi pi-sync"></div>
                    <h2>Обновление ПО и настройка каналов</h2>
                    <p>Установим актуальное программное обеспечение (ПО) на ваш спутниковый приёмник. Выполним перенастройку каналов в соответствии с последними изменениями оператора и обновим список каналов, чтобы вы не пропустили ни одной новинки.</p>
                </div>

                <div class="service-card">
                    <div class="icon pi pi-credit-card"></div>
                    <h2>Прием абонентской платы</h2>
                    <p>Для вашего удобства мастер может принять оплату за абонентскую плату прямо на месте.</p>
                </div>

            </div>

            <div class="call-to-action">
                <h3>Нужна помощь мастера?</h3>
                <p>Свяжитесь с нами, чтобы вызвать специалиста в удобное для вас время!</p>
                <a href="https://wa.me/+77471543737?text=Здравствуйте!%20Я%20хочу%20активировать%20карту%20Телекарта." target="_blank" rel="noopener noreferrer" class="button">Вызвать мастера</a>
            </div>

        </div>
    </section>
</template>

<style scoped>

    .master-services {
        display: flex;
        justify-content: center;
        padding: 50px 20px;
    }
    
    .cont {
        flex-wrap: wrap; 
        max-width: 1000px;
        text-align: center;
    }

    .page-header {
        flex-basis: 100%;
        margin-bottom: 40px;
        padding-bottom: 20px;
        border-bottom: 2px solid #ddd;
    }
    .page-header h1 {
        font-size: 2.5em;
        color: #333;
        margin-bottom: 10px;
    }
    .page-header p {
        font-size: 1.1em;
        color: #666;
    }

    .services-list {
        display: flex;
        flex-wrap: wrap;
        gap: 30px; 
        justify-content: center;
        width: 100%;
        margin-bottom: 40px;
    }
    .service-card {
        flex: 1 1 300px; 
        background-color: #f8f8f8;
        padding: 30px;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        transition: transform 0.3s, box-shadow 0.3s;
        text-align: center;
    }
    .service-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    }
    .service-card h2 {
        font-size: 1.4em;
        color: #333;
        margin: 15px 0 10px;
    }
    .service-card p {
        color: #555;
        line-height: 1.6;
    }

    .icon {
        font-size: 3em;
        margin-bottom: 10px;
        line-height: 1; 
        color: rgba(212, 15, 125, 1);
        font-family: 'primeicons'; 
    }

    .call-to-action {
        flex-basis: 100%;
        margin-top: 20px;
        padding: 30px;
        background-color: #ffe6fd; 
        border-radius: 12px;
    }
    .call-to-action h3 {
        font-size: 1.8em;
        color: rgba(212, 15, 125, 1);
        margin-bottom: 10px;
    }
    .button {
        display: inline-block;
        margin-top: 15px;
        padding: 12px 30px;
        background-color: rgba(212, 15, 125, 1);
        color: white;
        text-decoration: none;
        border-radius: 8px;
        font-size: 1.1em;
        font-weight: bold;
        transition: background-color 0.3s;
    }
    .button:hover {
        background-color: rgb(145, 7, 85);
    }
    @media (max-width: 650px) {
        .services-list {
            flex-direction: column;
            gap: 20px;
        }
        .service-card {
            flex: 1 1 100%;
        }
    }
</style>