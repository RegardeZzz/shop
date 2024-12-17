<template>
  <section>
    <div class="wrapper">
      <div class="container">
        <!-- Навигация для фильтрации -->
        <nav class="filter-nav">
          <button @click="filterCategory('all')" :class="{ active: selectedCategory === 'all' }">
            Все продукты
          </button>
          <button @click="filterCategory('macaron')" :class="{ active: selectedCategory === 'macaron' }">
            Макаруны
          </button>
          <button @click="filterCategory('eclair')" :class="{ active: selectedCategory === 'eclair' }">
            Эклеры
          </button>
          <button @click="filterCategory('icecream')" :class="{ active: selectedCategory === 'icecream' }">
            Мороженое
          </button>
        </nav>

        <!-- Сетка карточек товаров -->
        <div class="product-grid">
          <div 
            v-for="product in filteredProducts" 
            :key="product.id" 
            class="product-card">
            <img :src="product.imgSrc" :alt="`Изображение продукта: ${product.name}`" />
            <h2>{{ product.name }}</h2>
            <div class="product-details">
              <p>{{ product.price }}</p>
              <button 
                class="order-btn" 
                @click="$router.push(`/product/${product.id}`)">
                Заказать
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { products } from "@/assets/data/productsData";

export default {
  data() {
    return {
      products, // Массив всех товаров
      selectedCategory: "all", // Текущая выбранная категория
    };
  },
  computed: {
    // Фильтрация товаров по выбранной категории
    filteredProducts() {
      if (this.selectedCategory === "all") return this.products;
      return this.products.filter((product) => product.category === this.selectedCategory);
    },
  },
  methods: {
    // Метод для смены категории
    filterCategory(category) {
      this.selectedCategory = category;
    },
  },
};
</script>

<style scoped>
/* Основные стили */
.container {
  text-align: center;
  margin: 40px auto;
  max-width: 1200px;
}

/* Навигация фильтров */
.filter-nav {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;
}

.filter-nav button {
  background-color: #e0e0e0;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.filter-nav button.active {
  background-color: #538e8e;
  color: #fff;
}

/* Сетка карточек */
.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

/* Карточка товара */
.product-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: transform 0.2s ease-in-out;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-card img {
  width: 200px;
  height: auto;
}

.product-card h2 {
  font-size: 18px;
  color: #333;
  margin: 15px 0;
}

.product-details p {
  font-size: 16px;
  color: #555;
  margin-bottom: 15px;
}

.order-btn {
  background-color: #538e8e;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 14px;
}

.order-btn:hover {
  background-color: #417e7e;
}

/* Адаптивная верстка */
@media (max-width: 1200px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .product-grid {
    grid-template-columns: 1fr;
  }
}
</style>
