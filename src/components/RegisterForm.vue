<template>
    <div>
      <form @submit.prevent="handleRegister">
        <input type="text" v-model="name" placeholder="Имя" />
        <input type="email" v-model="email" placeholder="Email" />
        <input type="password" v-model="password" placeholder="Пароль" />
        <button type="submit" class="enter">Зарегистрироваться</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: ''
      }
    },
    methods: {
      handleRegister() {
        console.log('Регистрация:', this.name, this.email, this.password)
      }
    }
  }
  </script>
  
  <style>
  
  /*  БЛОК ФОРМЫ ВХОДА/РЕГИСТРАЦИИ */
  
  .container {
    width: 100%;
    max-width: 36.25rem;
    height: 28.5rem;
    margin: 50px auto;
    background-color: #fff;
    padding: 20px;
  }
  
  .tab {
    display: flex;
    justify-content: space-around;
    position: relative;
    margin-bottom: 20px;
  }
  
  .tab button {
    background-color: inherit;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    font-size: 17px;
    font-weight: bold;
    color: #000000;
  }
  
  .tab button.active {
    color: black;
    position: relative;
  }
  
  .tab button:hover {
    color: black;
  }
  
  .tabcontent {
    display: none;
    padding: 20px 0;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  input {
    margin-bottom: 15px;
    padding: 8px;
    border-radius: 0.38rem;
    border: none;
    background-color: rgb(221, 223, 230);
    color: rgb(79, 79, 79);
    font-family: regular;
    font-size: 0.88rem;
  }
  
  .enter {
    margin-top: 10%;
    background-color: #f39c12;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 0.38rem;
    cursor: pointer;
    font-family: bold;
    height: 3.13rem;
    font-size: 0.88rem;
  }
  
  /* FOOTER */
  
  footer {
    display: flex;
    flex-direction: row;
    background-color: rgb(0, 9, 60);
    color: #fff;
    text-align: center;
    padding: 20px;
  }
  
  .info_f {
    display: flex;
    justify-content: space-between;
    height: 9.69rem;
    align-items: end;
  }
  
  .info_f p {
    font-family: medium;
    font-size: 0.88rem;
  }
  </style>