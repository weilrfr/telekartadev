<script setup>
import Button from '@/components/Button.vue';
import CardList from '@/components/CardList.vue';
import Carousel from '@/components/Carousel.vue';
const scrollToTarget = () => {
  const targetElement = document.getElementById('target-el');
  
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  }
};
</script>

<template>
  <Carousel/>
  <section id="sec1">
    <div class="cont">
      <div class="info">
        <div>
          <h1>Моментальная оплата</h1>
          <p>Продление подписки</p>
          <p>Уверенная зона покрытия России, Казахстана, Кыргызстана</p>
          <img src="/src/assets/kaspi.png"/>
          <img src="/src/assets/halyk.jpg"/>
        </div>
        <div>
          <img src="../assets/Telekarta_logo_main_color.png" alt="Telekarta TV" />
        </div>
        <div class="btn-cont">
          <Button text="Оплатить" @click="$router.push('/payment')"/>
          <Button text="Транспондеры | Частоты каналов" @click="$router.push('/frequencies')"/>
          <Button text="Посмотреть тарифы" class="rate" @click="scrollToTarget"/>
        </div>
      </div>
    </div>
  </section>
  <section>
    <CardList id="target-el"/>
  </section>
</template>
<style scoped>
  #sec1 {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    flex-wrap: wrap;
    height: 79vh;
  }
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  .info :nth-child(1) {
    flex-basis: 50%;
  }
  .info :nth-child(1) h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
    line-height: 1.2;
    color: rgba(212, 15, 125, 1);
    
  }
  .info :nth-child(1) p {
    font-size: 1.2em;
    line-height: 1.6;
  }
  .info > :nth-child(2) {
    flex-basis: 50%;
    display: flex;
    justify-content: flex-end;
  }
  .info img {
    width: 70%;
  }
  .info :nth-child(1) p:nth-child(4) {
    font-size: 0.9em;
    margin-top: 20px;
  }
  .rate:hover {
    background: rgba(212, 15, 125, 1);
    margin-top: 1px;
    color: white;
    transition: 300ms;
    border: none;
  }
  .rate {
    background: white;
    border-color: black;
    border: 1px solid black;
    color: black;
    transition: 300ms;
  }


  .btn-cont {
    margin-top: 10vh;
  }

  .btn-cont > * {
    margin-right: 20px;
    margin-bottom: 50px;
  }
  .cards {
    display: block;
  }
  .info img {
    width: 10%;
    height: auto;
  }



  @media (max-width: 768px) {

    #sec1 {
      height: auto;
    }
    .info > :nth-child(1), .info > :nth-child(2) {
      flex-basis: 100%;
      text-align: center;
      justify-content: center;
    }
    .info > :nth-child(2) {
      margin-top: 20px;
    }
    .btn-cont {
      margin-top: 5vh;
      text-align: center;
    }
    .btn {
      text-align: center;
      margin-right: 10px;
    }
    .info img {
      width: 10%;
    }
    .info {
      flex-direction: column;
    }
  }
</style>