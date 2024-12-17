<template>
  <section class="product-details">
    <div class="container">
      <!-- Кнопка "Назад" -->
      <button class="back-button" @click="goBack">← Назад</button>

      <!-- Динамические данные о продукте -->
      <div class="product-wrapper">
        <img :src="product.imgSrc" :alt="product.name" class="product-img" />
        <div class="product-info">
          <h1>{{ product.name }}</h1>
          <p class="product-price">{{ product.price }}</p>
          <p class="product-description">{{ product.description }}</p>
          <button class="add-to-cart" @click="addToCart">Добавить в корзину</button>
        </div>
      </div>

      <!-- Отзывы о продукте -->
      <div class="product-reviews">
        <h2>Отзывы о продукте</h2>
        <div class="reviews">
          <div class="review" v-for="review in product.reviews" :key="review.id">
            <p class="review-author">{{ review.author }}</p>
            <div class="review-rating">
              <span v-for="n in review.rating" :key="n" class="star">★</span>
              <span v-for="n in 5 - review.rating" :key="n" class="star empty">★</span>
            </div>
            <p class="review-text">{{ review.text }}</p>
          </div>
        </div>
      </div>

      <!-- Рекомендуемые десерты -->
      <div class="recommended-desserts">
        <h2>Рекомендуемые десерты</h2>
        <div class="dessert-list">
          <div class="dessert-item" v-for="item in recommendedDesserts" :key="item.id">
            <img :src="item.imgSrc" :alt="item.name" />
            <p>{{ item.name }}</p>
            <p class="price">{{ item.price }}</p>
            <button @click="addToCart(item)">Добавить в корзину</button>
          </div>
        </div>
      </div>

      <!-- Информация о доставке -->
      <div class="delivery-info">
        <h2>Доставка и возврат</h2>
        <p>Мы доставим ваш заказ в течение 3-5 рабочих дней. В случае, если товар вам не подошел, вы можете вернуть его в течение 14 дней.</p>
      </div>
    </div>
  </section>
</template>

<script>
import { products } from "@/assets/data/productsDetailsData";

export default {
  data() {
    return {
      product: {}, // Текущий товар
      recommendedDesserts: [
        { 
          id: 1, 
          name: "Шоколадный торт", 
          imgSrc: require("@/assets/img/product/chocolate_cake.svg"), 
          price: "Р 450.00", 
          description: "Нежный шоколадный торт с кремом и ягодами, идеален для любого торжества."
        },
        { 
          id: 2, 
          name: "Торт Наполеон", 
          imgSrc: require("@/assets/img/product/napoleon_cake.svg"), 
          price: "Р 550.00", 
          description: "Классический торт Наполеон с тонкими слоеными коржами и кремом."
        },
        { 
          id: 3, 
          name: "Пирожное Эклер", 
          imgSrc: require("@/assets/img/product/eclair.svg"), 
          price: "Р 80.00", 
          description: "Традиционное пирожное Эклер с мягким заварным кремом и глазурью."
        }
      ]
    };
  },
  created() {
    // Получаем ID из маршрута и находим товар в массиве
    const productId = parseInt(this.$route.params.id);
    this.product = products.find((item) => item.id === productId);

    // Заполнение отзывов для демонстрации
    this.product.reviews = [
      {
        id: 1,
        author: "Ирина",
        rating: 5,
        text: "Очень вкусный торт! Тонкая текстура и приятный вкус шоколада. Рекомендую всем!"
      },
      {
        id: 2,
        author: "Алексей",
        rating: 4,
        text: "Торт неплохой, но мне бы хотелось больше крема. В остальном все отлично."
      },
      {
        id: 3,
        author: "Мария",
        rating: 5,
        text: "Это просто шедевр! Торт очень вкусный, украшения тоже красивые, понравился всей семье."
      }
    ];
  },
  methods: {
    addToCart(item) {
      console.log(`Товар "${item.name}" добавлен в корзину!`);
      // Здесь будет логика добавления товара в корзину
    },
    goBack() {
      this.$router.go(-1); // Возвращаемся на предыдущую страницу
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: 50px auto;
  padding: 20px;
}

/* Основные стили */
.product-wrapper {
  display: flex;
  gap: 30px;
}

.product-img {
  width: 250px;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.product-info h1 {
  font-size: 28px;
  margin-bottom: 10px;
}

.product-price {
  font-size: 22px;
  font-weight: bold;
  color: #538e8e;
  margin-bottom: 15px;
}

.product-description {
  font-size: 16px;
  color: #555;
  margin-bottom: 30px;
}

.add-to-cart {
  background-color: #538e8e;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.add-to-cart:hover {
  background-color: #417e7e;
}

.back-button {
  background-color: #e0e0e0;
  color: #333;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  margin-bottom: 20px;
}

.back-button:hover {
  background-color: #d0d0d0;
}

/* Стили для отзывов */
.product-reviews {
  margin-top: 40px;
}

.product-reviews h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.reviews {
  display: flex;
  flex-direction: column;
}

.review {
  margin-bottom: 20px;
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.review-author {
  font-weight: bold;
}

.review-rating {
  color: #ff9900;
  font-size: 18px;
}

.star {
  margin-right: 5px;
}

.empty {
  color: #ddd;
}

.review-text {
  font-size: 14px;
  color: #777;
}

/* Стили для рекомендуемых десертов */
.recommended-desserts {
  margin-top: 40px;
}

.recommended-desserts h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.dessert-list {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.dessert-item {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
  width: 220px;
  text-align: center;
}

.dessert-item img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.dessert-item p {
  font-size: 16px;
  margin: 10px 0;
}

.price {
  font-weight: bold;
  color: #538e8e;
}

.dessert-item button {
  background-color: #538e8e;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.dessert-item button:hover {
  background-color: #417e7e;
}

/* Информация о доставке */
.delivery-info {
  margin-top: 40px;
  padding: 20px;
  background-color: #f1f1f1;
  border-radius: 10px;
}

.delivery-info h2 {
  font-size: 22px;
  margin-bottom: 15px;
}
</style>
