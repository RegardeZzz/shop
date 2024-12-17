<template>
<!-- info -->
<section>

<div class="back">
    <div class="wrapper">
        <div class="info">
            <h1>Макароны "Фисташковое Наслаждение" - Изысканный Десерт</h1>
            <div class="info_cards">
                <div class="info_card">
                    <img src="@/assets/img/review/makaron.webp" alt="Макарон">
                    <h2>Изысканный вкус</h2>
                    <p>Только самые свежие и качественные компоненты.</p>
                </div>
                <div class="info_card">
                    <img src="@/assets/img/review/makarons.webp" alt="Макарон">
                    <h2>Нежная Начинка</h2>
                    <p>Насыщенная фисташковая начинка тает во рту, оставляя приятное послевкусие.</p>
                </div>
                <div class="info_card">
                    <img src="@/assets/img/review/girl.webp" alt="Девушка">
                    <h2>Незабываемое удовольствие</h2>
                    <p>Лучшее сочетание нежности и вкуса.</p>
                </div>
            </div>
            <div class="info_txt">
                <p> ₱ 100.00 / за 1 шт</p>
                <button class="info_btn">Добавить в корзину</button>
            </div>
        </div>
        
    </div>
</div>

</section>


<!-- отзывы -->

<section>

<div class="wrapper">
    <div class="reviews">
        <div class="review_l">
            <img src="@/assets/img/review/girls.webp" alt="Девушки">
        </div>
        <div class="review_r">
            <h2>Отзывы Наших Клиентов</h2>
            <div class="review_txt">
                <p>"Очарован вкусом и текстурой этих макарон. Просто невероятные!"</p>
                <p>"Эти макароны просто потрясающие! Текстура и вкус просто заставляют восторгаться."</p>
                <p>"Эти макароны - настоящий кулинарный шедевр!  Необычная текстура и потрясающий вкус. "</p>
                <p>"Обожаю эти макароны! Текстура и вкус просто божественные."</p>
            </div>
        </div>
    </div>
 </div>

</section>

<!-- почему мы? -->

<section>

<div class="why">
    <div class="wrapper">
        <h2>Почему Выбирают Нас?</h2>
        <div class="why_cards">

            <div class="why_card">
                <div class="card_l">
                    <img src="@/assets/img/review/1.webp" alt="Первое">
                </div>
                <div class="card_r">
                    <h3>Натуральные Ингредиенты</h3>
                    <p>Только качественные ингредиенты, без искусственных добавок.</p>
                </div>
            </div>

            <div class="why_card">
                <div class="card_l">
                    <img src="@/assets/img/review/2.webp" alt="Второе">
                </div>
                <div class="card_r">
                    <h3>Натуральные Ингредиенты</h3>
                    <p>Только качественные ингредиенты, без искусственных добавок.</p>
                </div>
            </div>

            <div class="why_card">
                <div class="card_l">
                    <img src="@/assets/img/review/3.webp" alt="Третье">
                </div>
                <div class="card_r">
                    <h3>Натуральные Ингредиенты</h3>
                    <p>Только качественные ингредиенты, без искусственных добавок.</p>
                </div>
            </div>

        </div>
    </div>
 </div>

</section>

<!-- помощь -->

<section>

<div class="wrapper">
    <div class="contact_form">
        <!-- Текстовый блок -->
        <div class="contact_txt">
            <h2>Нужна <span>помощь?</span></h2>
            <p>Оставьте свои данные — мы перезвоним
                и решим вопрос. Помните, оставляя
                контакты, вы даёте согласие на
                обработку персональных данных.
            </p>
        </div>
        <!-- Форма ввода данных -->
        <form>
            <label for="name">Имя</label>
            <input type="text" id="name" placeholder="Женя" required>
            <label for="phone">Телефон</label>
            <input type="tel" id="phone" placeholder="+7 000 000 00 00" required>
            <button type="submit">
                Добавить в корзину
            </button>
        </form>
    </div>
 </div>

</section>

</template>

<script>
export default {
    name: "ReviewPage"
}
</script>

<style>
    
/* info */

.back{
    background-color: #538E8E;
    color: white;
    padding: 5%;
}

.back h1{
    font-size: 4.5rem;
    font-family: bold;
}

.info_cards{
    display: flex;
    justify-content: space-between;
    margin-top: 5%;
}

.info_card{
    width: 340px;
}

.info_card img{
    border-radius: 20px;
}

.info_card h2{
    font-size: 1.25rem;
    font-family: medium;
    margin-top: 5%;
}

.info_card p{
    font-size: 1.125rem;
    font-family: regular;
    margin-top: 5%;
}

.info_txt{
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin-top: 5%;
}

.info_txt p{
    font-size: 1.25rem;
    font-family: regular;
}

.info_btn{
    width: 250px;
    height: 40px;
    border-radius: 10px;
    background-color: #C1DCDC;
    border: none;
    color: white;
    font-size: 1.125rem;
    font-family: regular;
}

/* отзывы */

.reviews{
    margin-top: 5%;
    margin-bottom: 5%;
    display: flex;
    justify-content: space-between;
}

.review_r{
    width: 500px;
}

.review_r h2{
    color: #538E8E;
    font-size: 2.25rem;
    font-family: medium;
}

.review_txt{
    margin-top: 5%;
    display: flex; /* Используем flexbox */
    flex-direction: column; /* Ставим элементы в столбик */
    justify-content: space-between; /* Центруем элементы по вертикали */
}

.review_txt p{
    color: #98A8A8;
    font-size: 1.125rem;
    font-family: regular;
    margin-top: 10%;
}

/* почему мы? */

.why{
    background-image: url(@/assets/img/review/back_makaron.webp);
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;
}

.why h2{
    font-size: 2.25rem;
    color: #538E8E;
    font-family: medium;
    margin-bottom: 5%;
    padding-top: 5%;
}

.why_cards{
    display: flex;
    justify-content: space-between;
    padding-bottom: 5%;
}

.why_card{
    width: 350px;
    display: flex;
    color: #457B7B;
}

.card_l img{
    border-radius: 20px;
}

.card_r{
    display: flex;
    flex-direction: column;
    padding-left: 10%;
}

.card_r h3{
    font-size: 1.5rem;
    font-family: regular;
}

.card_r p{
    font-size: 1rem;
    font-family: regular;
    margin-top: 10%;
}

/* помощь */

.contact_form {
    display: flex;
    background-size: cover;
    background-position: center;
    background-image: url(@/assets/img/review/FAQ.svg); 
    margin-top: 5%;
    border-radius: 30px;
    padding: 40px 100px; /* Отступы внутри формы */
}

/* Текстовый блок */
.contact_txt {
    width: 50%;
}

.contact_form h2 {
    font-size: 2.25rem; /* Размер заголовка */
    margin-bottom: 20px; /* Отступ снизу */
    color: white;
    font-family: medium;
}

.contact_form p {
    font-family: regular;
    font-size: 14px;
    color: #487B6C;
    padding-top: 10%;
}

.contact_form h2 span {
    text-decoration: underline 5px;
    text-decoration-color: #487B6C; /* Цвет подчеркивания */
}

/* Блок формы */
.contact_form form {
    margin-left: 10%;
}

.contact_form label {  
    font-family: medium;
    font-size: 0.75rem;
    color: #487B6C;
    font-family: regular;
}

.contact_form input {
    display: flex;
    width: 300px; /* Полная ширина поля */
    padding: 10px; /* Отступы внутри поля */
    margin: 10px 0; /* Отступы сверху и снизу */
    border: none; /* Без границ */
    border-radius: 5px; /* Скругление углов */
}

/* Стили кнопки отправки */
.contact_form button {
    display: inline-flex;
    align-items: center; /* Центрирует содержимое по вертикали */
    justify-content: center; /* Центрирует содержимое по горизонтали */
    cursor: pointer;
    border: none;
    width: 200px;
    height: 40px;
    border-radius: 10px;
    margin-top: 5%;
    background-color: #67ABAB;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    color: white; 
    font-family: regular;
}

.contact_form button:hover {
    background-color: #f0f0f0; /* Цвет кнопки при наведении */
}

.contact_form button img {
    margin-left: 25%;
}

/* Дополнительные стили для текста */
.contact_form p {
    font-size: 0.75rem; /* Размер текста для информации */
    margin-top: 15px; /* Отступ сверху */
    font-family: medium;
}

/*  */

.btn {
    transition: background-color 0.1s, box-shadow 0.1s 0.2s; /* Время перехода */
}

.btn:hover {
    box-shadow: 0 0 0 2px #fff, 0 0 0 4px #3f8a7c; /* Тень в виде рамки */ 
}

.info_btn {
    background-color: #71b2ae; /* Цвет фона */
    border: none; /* Убираем рамку */
    transition: background-color 0.4s, box-shadow 0.2s 0.3s; /* Время перехода */
}

.info_btn:hover {
    background-color: #3f8a7c; /* Цвет фона */
    box-shadow: 0 0 0 2px #538E8E, 0 0 0 4px #54cbb6; /* Тень в виде рамки */ 
}

</style>