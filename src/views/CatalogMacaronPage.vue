<template>
    <!-- Каталог -->
    <section>
        <div class="wrapper">
            <div class="container">
                <div class="txt_up">
                    <h1>Макаруны</h1>
                </div>
                <div class="macaron_card_all">
                    <div class="macaron_card">
                        <img src="@/assets/img/catalogM/makaron_banan.svg" alt="Макарун со вкусом шоколада и банана">
                        <h2>Шоколад, банан</h2>
                        <div class="txt_card">
                            <p>Р 100.00</p>
                            <button class="zakaz">Заказать</button>
                        </div>
                    </div>
                    <div class="macaron_card">
                        <img src="@/assets/img/catalogM/makaron_trufel.svg" alt="Макарун со вкусом черного трюфеля">
                        <h2>Черный трюфель</h2>
                        <div class="txt_card">
                            <p>Р 250.00</p>
                            <button class="zakaz">Заказать</button>
                        </div>
                    </div>
                    <div class="macaron_card">
                        <img src="@/assets/img/catalogM/makaron_parmezan.svg" alt="Макарун со вкусом пармезана">
                        <h2>Пармезан</h2>
                        <div class="txt_card">
                            <p>Р 150.00</p>
                            <button class="zakaz">Заказать</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "CatalogMacaronPage"
}
</script>

<style>
.macaron_card_all {
    margin-top: 5%;
    display: flex;
    justify-content: space-between;
    gap: 1rem; /* Добавлен отступ между карточками */
}

.txt_up {
    margin-top: 5%;
    text-align: center;
}

.txt_up h1 {
    font-size: 2rem;
    font-family: bold;
}

.macaron_card h2 {
    font-size: 1.125rem;
    font-family: medium;
    margin-top: 1rem; /* Приведен к логичному значению */
}

.txt_card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem; /* Приведен к логичному значению */
}

.txt_card p {
    font-size: 1.125rem;
    font-family: regular;
    opacity: 0.5;
}

button.zakaz {
    cursor: pointer;
    font-size: 1rem;
    font-family: regular;
    border: none;
    background-color: #C1DCDC;
    height: 31px;
    width: 130px;
    border-radius: 8px;
    margin-top: 0; /* Удален лишний отступ */
}
</style>
