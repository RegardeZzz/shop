<template>
    <header>
        <section class="wrapper">
            <nav id="head">
                <!-- Логотип -->
                <div class="logo">
                <router-link to="/"><img src="@/assets/img/header/logo.svg" alt="Logo" /></router-link>
                </div>

                <!-- Ссылки навигации -->
                <ul class="nav-links">
                    <li><router-link to="/"><p>Главная</p></router-link></li>
                    <li><router-link to="/catalog"><p>Каталог</p></router-link></li>
                    <li><router-link to="/review"><p>Отзывы</p></router-link></li>
                    <li><router-link to="/contacts"><p>Контакты</p></router-link></li>
                </ul>

                <!-- Иконки пользователя и корзины -->
                <div class="icons">
                    <a href="#"><img src="@/assets/img/header/user.svg" alt="Личный кабинет" /></a>
                    <a href="#"><img src="@/assets/img/header/shop.svg" alt="Корзина" /></a>
                </div>
            </nav>
        </section>
  </header>
</template>

<script>
    export default {
        name: "HeaderPage",
    }
</script>

<style scoped>

/* Контейнер */
.wrapper {
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
}

header{
  margin-top: 1%;
}

header a {
  font-family: medium;
}

/* Навигация */
#head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
}

/* Логотип */
.logo img {
  width: 100%;
}

/* Ссылки навигации */
.nav-links {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-links li {
  display: flex;
  align-items: center;
}

.nav-links a {
  text-decoration: none;
}

.nav-links p {
  font-family: medium;
  font-size: 1rem;
  color: black;
}

/* Иконки */
.icons {
  display: flex;
  gap: 10px;
}

.icons img {
  width: 20px;
}
</style>