<template>
    <section class="wrapper">
        <div class="contacts_cont">
            <div class="txt_contacts">
                <h2>Контакты</h2>
            </div>
            <div class="contacts_map">
                <img src="@/assets/img/contacts/map.svg">
            </div>
            <div class="contacts_txt_down">
                <div class="number">
                    <h3>Телефон</h3>
                    <p>8(800) 546-52-98</p>
                </div>
                <div class="adres">
                    <h3>Адрес</h3>
                    <p>г.Владивосток,ул.Светланская 46</p>
                </div>
                <div class="time_work">
                    <h3>Время работы</h3>
                    <p>Пн - сб 9:00 - 18:00</p>
                </div>
                <div class="mail">
                    <h3>Почта</h3>
                    <p>belkov-ki@mail.ru</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "ContactPage"
}
</script>

<style>

.contacts_cont {
    margin-top: 10%;
    margin-left: 10%;
}

.txt_contacts {
    font-size: 2.25rem;
    font-family: bold;
}

.contacts_map {
    margin-top: 5%;
    margin-left: 5%;
}

.contacts_txt_down {
    display: flex;
    justify-content: space-between;
    margin-top: 5%; 
}

.contacts_txt_down h3 {
    font-size: 1.3rem;
    font-family: medium;
}

.contacts_txt_down p {
    font-size: 1rem;
    font-family: regular;
    margin-top: 5%;
}

</style>