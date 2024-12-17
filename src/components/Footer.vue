<template>

    <!-- Подвал -->
    <footer>
      <div class="wrapper">
          <div class="info_left">
              <div class="txt_foot">
                  <img src="@/assets/img/header/logo.svg">
                  <p>Мы поможем вам найти сладости вашей мечты</p>
                  <div class="social-buttons">
                      <button
                      v-for="(button,index) in buttons"
                      :key="index"
                      class="social-button"
                      @click="handleClick(button.link)"
                      >
                          <img :src="button.icon" :alt="button.alt" class="button-icon" />  
                      </button>
                  </div>
              </div>
              <div class="txt_center">
                  <h3>Информация</h3>
                  <router-link to="/about">О нас</router-link>
                  <router-link to="/review">Отзывы</router-link>
                  <router-link to="/">Главная</router-link>
              </div>
              <div class="txt_right">
                  <p>2024 срок использования<br>Macaronshop<br>Все права защищены</p>
              </div>
          </div>   
      </div>
  </footer>

</template>

<script>
export default {
  name: "FooterPage",
  data(){
      return{
          buttons:[
          {
              icon: require('@/assets/img/footer/youtube.svg'),
              alt: "YouTube",
              link: "https://youtube.com",
          },
          {
              icon: require('@/assets/img/footer/telegram.svg'),
              alt: "telegram",
              link: "https://t.me/reklempub", 
          },
          {
              icon: require('@/assets/img/footer/vk.svg'),
              alt: "vk",
              link: "https://t.me/reklempub",
          },
      ],
      };
  },
  methods: {
  handleClick(link) {
    window.open(link, "_blank");
  },
},
};
</script>

<style scoped>

footer {
  background-color: #C1DCDC;
  padding: 20px 0;
  margin-top: 10%;
}

.info_left {
  margin-top: 5%;
  display: flex;
  justify-content: space-between;
}

.txt_center {
  display: flex;
  flex-direction: column;
}

.txt_foot p {
  font-size: 1.125rem;
  color: #1e1e1e;
  opacity: 50%;
  font-family: regular;
  margin-top: 15%;
} 

.txt_foot {
  max-width: 170px;
  width: 100vh;
  max-height: 207px;
  height: 100vh;
}

.social-buttons {
display: flex;
gap: 10px;
margin-top: 10px;
justify-content: space-between;
margin-top: 15%;
}

.social-button {
border: none;
background: none;
padding: 0;
cursor: pointer;
outline: none;
}

.social-button img {
width: 50px;
height: 50px;
}

.logo_prilosh {
  display: flex;
  justify-content: space-between;
}

.logo_prilosh img{
  width: 30px;
}

.txt_center h3{
  font-size: 1.5rem;
  font-family: "regular";
}

.txt_center a{
  font-size: 1.125rem;
  font-family: regular;
  max-width: 60px;
  width: 150vh;
  max-height: 27px;
  height: 100vh;
  color: #333;
  text-decoration: none;
  margin-top: 5%;
}

.txt_right p {
  font-size: 1.125rem;
  font-family: "regular";
  opacity: 50%;
}

</style>