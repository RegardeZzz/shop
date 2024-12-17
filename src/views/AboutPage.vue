<template>
    <!-- Каталог -->
    <section>
        <div class="wrapper">
            <div class="catalog">
                <div class="catalog__text">
                    <h2>Кондитерские изделия от<br>Macaronshop</h2>
                    <div class="catalog__description">
                        <p>Изысканные десерты, созданные для<br>самых требовательных гурманов</p>
                    </div>
                    <div class="catalog__buttons">
                        <button class="button button--primary">Узнать больше</button>
                        <button class="button button--secondary">Заказать сейчас</button>
                    </div>
                </div>
                <div class="catalog__image">
                    <img src="@/assets/img/about/veryhavemacaron.svg" alt="Вкусные макароны от Macaronshop">
                </div>
            </div>
        </div>
    </section>

    <!-- Акции -->
    <section class="promotions">
        <div class="wrapper">
            <div class="promotions__content">
                <div class="promotions__item">
                    <p>Мороженое, эклеры и макароны - вкус, который тает<br>во рту! Откройте для себя премиальные изделия.</p>
                </div>
                <div class="promotions__item">
                    <p>В нашем ассортименте - эксклюзивные вкусы<br>мороженого, нежнейшие эклеры и хрустящие макароны.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Состав -->
    <section>
        <div class="wrapper">
            <div class="composition">
                <div class="composition__image">
                    <img src="@/assets/img/about/macaron_info.svg" alt="Кондитерские изделия: макароны">
                </div>
                <div class="composition__details">
                    <div class="composition__row">
                        <div class="composition__item">
                            <h2>Мороженое</h2>
                            <p>Кремовое и насыщенное,<br>с разнообразием вкусов</p>
                        </div>
                        <div class="composition__item">
                            <h2>Эклеры</h2>
                            <p>Воздушные и с<br>разнообразием начинок,<br>которые тают во рту</p>
                        </div>
                    </div>
                    <div class="composition__item composition__item--full">
                        <h2>Макароны</h2>
                        <p>Тонкие, хрустящие снаружи и мягкие внутри, с оригинальными<br>начинками.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Преимущества -->
    <section>
        <div class="wrapper">
            <div class="advantages">
                <h2 class="advantages__title">Преимущества</h2>
                <div class="advantages__cards">
                    <div class="card">
                        <img src="@/assets/img/about/fruits.svg" alt="Натуральные ингредиенты">
                        <h3>Натуральные ингредиенты</h3>
                        <p>Только самые свежие и<br>качественные компоненты</p>
                    </div>
                    <div class="card">
                        <img src="@/assets/img/about/macaron_box.svg" alt="Подарочная упаковка">
                        <h3>Идеально для подарков</h3>
                        <p>Отлично подходит для особых<br>случаев</p>
                    </div>
                    <div class="card">
                        <img src="@/assets/img/about/girl_macaron.svg" alt="Быстрая доставка">
                        <h3>Быстрая доставка</h3>
                        <p>Мы доставим ваш заказ быстро и<br>удобно</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.button {
    font-size: 1.125rem;
    border-radius: 10px;
    border: none;
    padding: 15px 1.25rem;
    cursor: pointer;
    font-family: regular;
}

.button--primary {
    background-color: #9dc4c4;
    color: #fff;
}

.button--secondary {
    background-color: #9dc4c4;
    color: #fff;
}

/* Каталог */
.catalog {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5%;
}

.catalog__text h2 {
    font-size: 2.25rem;
    color: #538E8E;
    font-family: bold;
}

.catalog__description p {
    font-size: 1.5rem;
    opacity: 0.5;
    margin: 14px 0;
    font-family: medium;
}

.catalog__buttons {
    margin-top: 1.25rem;
    display: flex;
    justify-content: space-between;
}

.catalog__image img {
    max-width: 100%;
}

/* Акции */
.promotions {
    background-color: #C1DCDC;
    padding: 1.25rem 0;
    margin-top: 5%;
}

.promotions__content {
    display: flex;
    justify-content: space-between;
    text-align: center;
}

.promotions__item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
}

.promotions__item p {
    font-size: 1.25rem;
    color: #538E8E;
    font-family: regular;
    margin: 0;
}

/* Состав */
.composition {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    margin-top: 5%;
}

.composition__image img {
    width: 100%;
    max-width: 300px;
    border-radius: 1rem;
}

.composition__details {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
}

.composition__row {
    display: flex;
    gap: 1.25rem;
}

.composition__item {
    background-color: #538E8E;
    color: #fff;
    border-radius: 1.25rem;
    padding: 1.5rem;
    text-align: left;
    flex: 1;
}

.composition__item h2 {
    margin-bottom: 0.75rem;
    font-size: 1.25rem;
    font-family: medium;
}

.composition__item p {
    font-family: regular;
    font-size: 1rem;
    line-height: 1.5;
}

.composition__item--full {
    width: 100%;
}

/* Преимущества */
.advantages {
    margin-top: 10%;
}

.advantages__title {
    text-align: center;
    font-size: 2.25rem;
    color: #538E8E;
}

.advantages__cards {
    display: flex;
    justify-content: space-between;
    gap: 1.25rem;
    margin-top: 1.25rem;
}

.card {
    text-align: center;
}

.card h3 {
    font-size: 1.125rem;
    color: #538E8E;
    margin: 10px 0;
    font-family: medium;
}

.card p {
    font-size: 1.125rem;
    color: #538E8E;
    font-family: regular;
}
</style>
