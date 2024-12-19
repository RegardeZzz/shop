<template>
    <section class="cart">
      <div class="container">
        <h1>Корзина</h1>
  
        <!-- Проверка на пустую корзину -->
        <div v-if="cart.length === 0" class="empty-cart">
          <p>Ваша корзина пуста.</p>
          <router-link to="/catalog">Вернуться к покупкам</router-link>
        </div>
  
        <!-- Отображение товаров в корзине -->
        <div v-else>
          <div class="cart-item" v-for="item in cart" :key="item.id">
            <img :src="item.imgSrc" :alt="item.name" class="item-img" />
            <div class="item-info">
              <h3>{{ item.name }}</h3>
              <p class="item-price">{{ item.price }}</p>
              <div class="quantity-control">
                <button @click="updateQuantity(item.id, -1)">-</button>
                <span>{{ item.quantity }}</span>
                <button @click="updateQuantity(item.id, 1)">+</button>
              </div>
            </div>
            <button class="remove-item" @click="removeItem(item.id)">Удалить</button>
          </div>
  
          <!-- Итоговая сумма -->
          <div class="cart-summary">
            <p>Итого: {{ totalPrice }} ₽</p>
            <button class="checkout-button">Оформить заказ</button>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cart: [] // Хранение товаров из localStorage
      };
    },
    computed: {
      // Расчёт итоговой суммы
      totalPrice() {
        return this.cart.reduce((sum, item) => sum + item.quantity * parseFloat(item.price), 0).toFixed(2);
      }
    },
    methods: {
      // Загрузка корзины из localStorage
      loadCart() {
        const storedCart = localStorage.getItem("cart");
        this.cart = storedCart ? JSON.parse(storedCart) : [];
      },
      // Обновление количества товара
      updateQuantity(id, change) {
        const item = this.cart.find((item) => item.id === id);
        if (item) {
          item.quantity += change;
          if (item.quantity <= 0) {
            this.removeItem(id); // Удаление товара, если количество становится 0
          }
        }
        this.saveCart();
      },
      // Удаление товара из корзины
      removeItem(id) {
        this.cart = this.cart.filter((item) => item.id !== id);
        this.saveCart();
      },
      // Сохранение корзины в localStorage
      saveCart() {
        localStorage.setItem("cart", JSON.stringify(this.cart));
      }
    },
    mounted() {
      this.loadCart(); // Загружаем корзину при монтировании компонента
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1000px;
    margin: 50px auto;
    padding: 20px;
  }
  
  h1 {
    font-size: 28px;
    margin-bottom: 20px;
  }
  
  /* Пустая корзина */
  .empty-cart {
    text-align: center;
    font-size: 18px;
    position: relative;
    min-height: 400px; /* Высота контейнера */
    background: url('@/assets/img/shop/shop_cart.svg') no-repeat center top;
    background-size: contain;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end; /* Текст размещается под изображением */
    gap: 20px; /* Расстояние между строками */
  }
  
  .empty-cart p {
    background-color: rgba(255, 255, 255, 0.8); /* Прозрачный фон для читаемости */
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 20px;
    margin-bottom: 10px;
  }
  
  .empty-cart a {
    color: #538e8e;
    font-weight: bold;
    text-decoration: none;
    font-size: 18px;
  }
  
  .empty-cart a:hover {
    color: #417e7e;
  }
  
  /* Стили для элементов корзины */
  .cart-item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    background-color: #f9f9f9;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .item-img {
    width: 100px;
    height: auto;
    border-radius: 10px;
    margin-right: 20px;
  }
  
  .item-info {
    flex: 1;
  }
  
  .item-info h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  .item-price {
    color: #538e8e;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .quantity-control {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .quantity-control button {
    background-color: #538e8e;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
  }
  
  .quantity-control button:hover {
    background-color: #417e7e;
  }
  
  .remove-item {
    background-color: #e74c3c;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
  }
  
  .remove-item:hover {
    background-color: #c0392b;
  }
  
  .cart-summary {
    margin-top: 30px;
    text-align: right;
    font-size: 20px;
    font-weight: bold;
  }
  
  .checkout-button {
    background-color: #538e8e;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
  }
  
  .checkout-button:hover {
    background-color: #417e7e;
  }
  </style>
  