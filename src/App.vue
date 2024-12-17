<template>

    <div id="app">
        <!-- Header общий для всех страниц -->
        <Header />

        <!-- Маршруты для разных страниц -->
        <router-view />

        <!-- Footer общий для всех страниц -->
        <Footer />
    </div>

</template>

<script>

// Импорт компонентов
import Header from './components/HeaderPage.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};

</script>

<style lang="css">

@font-face {
  font-family: "bold";
  src: url("@/assets/font/Montserrat-Bold.woff2") format("woff2"),
       url("@/assets/font/Montserrat-Bold.woff") format("woff");
}

@font-face {
  font-family: "medium";
  src: url("@/assets/font/Montserrat-Medium.woff2") format("woff2"),
       url("@/assets/font/Montserrat-Medium.woff") format("woff");
}

@font-face {
  font-family: "regular";
  src: url("@/assets/font/Montserrat-Regular.woff2") format("woff2"),
       url("@/assets/font/Montserrat-Regular.woff") format("woff");
}
    
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: white;
}   

.wrapper {
    width: 100%;
    max-width: 1180px;
    margin: 0 auto;
}
</style>