<template>
  <div class="not-found">
    <div class="content">
      <h1 class="status-code">404</h1>
      <h2 class="message">Упс! Страница не найдена</h2>
      <p class="description">
        К сожалению, мы не смогли найти страницу, которую вы ищете.
      </p>
      <router-link to="/" class="home-link">
        Вернуться на главную
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  font-family: Arial, sans-serif;
}

.content {
  padding: 40px;
  border-radius: 12px;
}

.status-code {
  font-size: 8rem;
  margin: 0;
  font-weight: 700;
  letter-spacing: 5px;
  color: rgba(212, 15, 125, 1);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); 
}

.message {
  font-size: 2rem;
  margin-top: 10px;
  margin-bottom: 20px;
  font-weight: 600;
}

.description {
  font-size: 1.1rem;
  margin-bottom: 30px;
  opacity: 0.9;
}

.home-link {
  display: inline-block;
  padding: 12px 25px;
  background-color: var(--text-color-light); 
  color: var(--primary-color); 
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: background-color 0.3s, transform 0.2s;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.home-link:hover {
  background-color: #f0f0f0;
  transform: translateY(-2px);
}
</style>