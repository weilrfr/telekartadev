<script setup>

</script>
<template>
    <section>
        <div class="cont">
            <div class="footer">
                <h1>Telekartatv</h1>
                <div>
                    <p>+7 (965) 354 37 37</p>
                    <p>+7 (962) 821 37 37</p>
                    <p>+7 (963) 521 37 37</p>
                    <p>© 2025 Партнеры спутникового телевидения |  Уверенная зона покрытия России, Казахстана, Кыргызстана</p>
                </div>
            </div>
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
        max-width: 1300px;
    }
    .footer {
        display: flex;
        background-color: rgba(212, 15, 125, 1);
        flex-wrap: wrap;
        align-items: flex-end;
        width: 100%;
        text-align: center;    }
    .footer h1 {
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
</style>