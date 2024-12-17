<template>
    <!-- Поиск -->
    <section class="wrapper">
        <div class="container_2">
            <div class="text_container">
                <h2>Настоящая любовь</h2>
                <div class="options">
                    <router-link to="/catalog" class="option">Готовые наборы</router-link>
                    <router-link to="/catalog" class="option">Собрать свой набор</router-link>
                </div>
                <div class="search_bar">
                    <input type="text" placeholder="Что ищешь ты?">
                    <div class="search_btn">
                        <button class="search" @click="goToSearch"><img src="@/assets/img/home/search.svg" alt="Лупа"></button> 
                    </div> 
                </div>
            </div>
            <div class="image-container">
                <div class="image-circle">
                    <img src="@/assets/img/home/back.svg" alt="Кексик">
                </div>
            </div>
        </div>
    </section>

    <!-- Каталог -->
    <section class="wrapper">
        <div class="container_3">
            <div class="text_container_3">
                <h2>Выбери свой вкус</h2>
                <p>Готовим вручную и с любовью</p>
                <div class="catalog_btn">
                    <button class="catalog" @click="goToCatalog()">Каталог</button> 
                </div>  
            </div>
            <div class="makaron_cards">
                <div class="makaron_card">
                    <img src="@/assets/img/home/makaron_banan.webp" alt="Макарон">
                    <h3>Шоколад, банан</h3>
                    <p id="cost">Р 100.00</p>
                </div>
                <div class="makaron_card">
                    <img src="@/assets/img/home/Makaron_trufel.webp" alt="Макарон">
                    <h3>Черный трюфель</h3>
                    <p id="cost">Р 250.00</p>
                </div>
                <div class="makaron_card">
                    <img src="@/assets/img/home/Makaron_parmezan.webp" alt="Макарон">
                    <h3>Пармезан</h3>
                    <p id="cost">Р 150.00</p>
                </div>
            </div>
        </div>
    </section>

     <!-- Обо всем -->
     <section class="wrapper">
            <div class="container_4">
                <div class="text_container_4">
                    <h2>Мы обо всем позаботились</h2>
                    <p>Пироженные макарон и другие десерты из натуральных ингредиентов, приготовленные с любовью </p>
                </div>
                <div class="all_card">
                    <div class="card">
                        <img src="@/assets/img/home/palitra.webp" alt="Палитра для красок с кисточкой">
                        <h3>Набор с индивидуальной печатью</h3>
                        <p>Собрать набор макарон с уникальным дизайном</p>
                    </div>
                    <div class="card">
                        <img src="@/assets/img/home/stol_1.webp" alt="Стульчик и столик">
                        <h3>Оптовые поставки</h3>
                        <p>Предложения для кофеен, кафе, отелей. Посмотрите условия сотрудничества и отзывы.</p>
                    </div>
                    <div class="card">
                        <img src="@/assets/img/home/tort_1.webp" alt="Свадебный торт">
                        <h3>Свадебные предложения</h3>     
                        <p>Нежные пирожные макарон с разными вкусами для украшения вашего свадебного торжества</p>
                    </div>
                </div>
            </div>
    </section>

    <!-- Акции -->
    <section class="wrapper">
        <div class="container_5">
            <div class="txt_cont_5">
                <h2>Акции</h2>
            </div>
            <div class="stocks_card_all">
                <div class="up">
                    <div class="stocks_card_1">
                        <img src="@/assets/img/home/trybochki.webp">
                        <h3>Великолепные трубочки</h3>
                    </div>
                    <div class="stocks_card_2">
                        <img src="@/assets/img/home/ekler.webp">
                        <h3>Эклеры и макароны</h3>
                        <p>Эклер + 1 макарон = 99 рублей</p>
                    </div>
                    <div class="stocks_card_3">
                        <img src="@/assets/img/home/creams_stocks.webp">
                        <h3>Супермакарухи по суперценам</h3>
                    </div>
                </div>
                <div class="down">
                    <div class="stocks_btn">
                        <button class="stocks_all" @click="goToSale()">Все акции →</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
    export default {
        name: "HomePage",
        methods: {
            goToCatalog() {
                this.$router.push("/catalog");
            },
            goToSale() {
                this.$router.push("/sale");
            },
        }
        
    }
</script>

<style>
/* Поиск */

.container_2{
    background-image: url('@/assets/img/home/back.svg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;
    border-radius: 20px;
    margin-top: 15%;
}

.text_container {
    position: absolute;
    top: 0%;
    padding: 3%;
}

.text_container h2{
    font-size: 4rem;
    font-family: 'bold';
    line-height: 1.2;
}

.options {
    display: flex;
    align-items: center;
    margin-top: 5%;
    margin-bottom: 5%;
    font-size: 1.125rem;
    justify-content: space-between;
    width: 80%;
}

.option{
    text-decoration: none;
    color: #1e1e1e;
    font-family: regular;
    position: relative;
}

.option:hover {
  color: #67ABAB; /* Цвет текста при наведении */
}

/* Стили для зеленой полоски */
.option::after {
  content: "";
  position: absolute;
  bottom: -5px; /* Расстояние до текста */
  left: 0;
  width: 0;
  height: 2px;
  background-color: #67ABAB; /* Цвет полоски */
  transition: width 0.3s ease;
}

.option:hover::after {
  width: 100%; /* Полоска занимает ширину текста при наведении */
}

.search_bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.search_bar input {
    border: none;
    outline: none;
    width: 449px;
    height:  4rem;
    border-radius: 12px;
    font-size: 1.125rem;
    font-family: regular;
}

.search {
    border: solid 1px #FFFFFF;
    background: transparent;
    cursor: pointer;
    background-color: #C1DCDC;
    font-size: 1.125rem;
    width: 50px;
    height: 50px;
    border-radius: 8px;
}

.image-container {
    display: flex;
    margin-top: 10%;
}

/* Каталог */

.container_3 {
    margin-top: 10%;
    display: flex;
    justify-content: space-between;
}

.text_container_3 h2 {
    font-size: 2rem;
    font-family: medium;
}

.text_container_3 p {
    font-size: 1.125rem;
    color: #1e1e1e;
    opacity: 50%;
    font-family: regular;
    margin-top: 15%;
}

.catalog_btn {
    display: flex;
    text-align: center;
    margin-top: 5%;
    
}

.catalog {
    border: none;
    background: transparent;
    cursor: pointer;
    background-color: #67ABAB;
    font-size: 1.125rem;
    width: 153px;
    height: 51px;
    border-radius: 8px;
    font-family: regular;
    color: white;
    margin-top: 5%;
    transition: background-color 0.4s, box-shadow 0.2s 0.3s; /* Время перехода */
}

.catalog:hover {
    background-color: #3f8a7c; /* Цвет фона */
    box-shadow: 0 0 0 2px #fff, 0px 0px 0px 4px #3f8a7c; /* Тень в виде рамки */ 
}

.makaron_cards{
    display: flex;
    justify-content: space-between;
}

.makaron_card{
    width: 250px;
}

.makaron_card h3 {
    font-size: 1.125rem;
    font-family: medium;
}

.makaron_card p {
    font-size: 1.125rem;
    color: #1e1e1e;
    opacity: 50%;
    font-family: regular;
}

/* Обо всем */

.container_4 {
    margin-top: 10%;
}

.text_container_4 {
    text-align: center;
}

.text_container_4 h2 {
    font-size: 2rem;
    font-family: bold;
}

.text_container_4 p {
    font-size: 1.125rem;
    color: #1e1e1e;
    opacity: 50%;
    font-family: medium;
    margin-top: 2%;
}

.all_card {
    display: flex;
    justify-content: space-between;
    margin-top: 10%;
}

.card {
    text-align: center;
    width: 30%;
}

.card h3{
    font-size: 1.125rem;
    font-family: medium;
    margin-top: 5%;
}

.card p {
    font-size: 1.125rem;
    color: #1e1e1e;
    opacity: 50%;
    font-family: regular;
    margin-top: 5%;
}

/* Акции */

.container_5 {
    margin-top: 10%;
    margin-bottom: 5%;
}

.txt_cont_5 h2{
    text-align: center;
    font-size: 2rem;
    font-family: bold;
}

.stocks_card_all {
    margin-top: 10%;
    background-color: #C1DCDC;
    height: 690px;
    border-radius: 1.5rem;
}

.up {
    display: flex;
    justify-content: space-between;
}

.up h3 {
    font-size: 1.125rem;
    font-family: "";
}

.down {
    text-align: center;
}

.stocks_all {
    border: none;
    background-color: #FFFFFF;
    cursor: pointer;
    font-size: 1.125rem;
    font-family: "#";
    border-radius: 8px;
    max-width: 174px;
    width: 100vh;
    max-height: 51px;
    height: 100vh;
}

.stocks_all {
    background-color: #71b2ae; /* Цвет фона */
    border: none; /* Убираем рамку */
    transition: background-color 0.4s, box-shadow 0.2s 0.3s; /* Время перехода */
    color: #fff;
}

.stocks_all:hover {
    background-color: #3f8a7c; /* Цвет фона */
    box-shadow: 0 0 0 2px #fff, 0 0 0 4px #3f8a7c; /* Тень в виде рамки */ 
}


.stocks_card_1 h3, .stocks_card_2 h3, .stocks_card_3 h3{
    font-family: medium;
    font-size: 1.125rem;
    margin-top: 5%;
}

.stocks_card_1 {
    text-align: center;
    font-family: "#";
    margin-left: 6%;
    margin-top: -4%;
}

.stocks_card_2 {
    text-align: center;
    font-family: "#";
    margin-top: 2%;
}

.stocks_card_2 p {
    color: #1e1e1e;
    opacity: 50%;
    font-family: regular;
    margin-top: 5%;
}

.stocks_card_3 {
    text-align: center;
    margin-right: 6%;
    margin-top: -4%;
    font-family: "#";
}

.stocks_btn{
    margin-top: 5%;
    
}

button.stocks_all{
    font-family: regular;
    font-style: 0.1rem;
}
</style>