<template>

	<section class="menu">
		<div v-for="product in partner" :key="product.id" class="section-heading">
			<h2 class="section-title restaurant-title">{{ product.name }}</h2>
			<div class="card-info">
				<div class="rating">
					{{ product.stars }}
				</div>
				<div class="price">От {{ product.price }} ₽</div>
				<div class="category">{{ product.kitchen }}</div>
				<div class="sorting">
					<button @click="sortByPriceDecrement" class="button button-secondary">Сначала дорогие</button>
					<button @click="sortByPriceIncrement" class="button button-secondary">Сначала дешевые</button>
				</div>
			</div>
			<!-- /.card-info -->
		</div>



		<div class="cards cards-menu">
			<div v-for="(product, index) in products" :key="index" class="card">
				<img :src="product.image" :alt="product.name" class="card-image" />
				<div class="card-text">
					<div class="card-heading">
						<h3 class="card-title card-title-reg">{{ product.name }}/</h3>
					</div>
					<!-- /.card-heading -->
					<div class="card-info">
						<div class="ingredients">{{ product.description }}</div>
					</div>
					<!-- /.card-info -->
					<div class="card-buttons">
						<button class="button button-primary button-add-cart" @click="addToCart(product)">
							<span class="button-card-text">В корзину</span>
							<span class="button-cart-svg"></span>
						</button>
						<strong class="card-price-bold">{{ product.price }} ₽</strong>
					</div>
				</div>
				<!-- /.card-text -->
			</div>
			<!-- /.card -->
		</div>
		<!-- /.cards -->
	</section>
</template>



<script>
import { mapMutations } from 'vuex';
import axios from 'axios';

export default {
	data() {
		return {
			loading: false,
			products: [],
			url: `../api/${this.$route.params.partnerName}.json`,
			partnerName: this.$route.params.partnerName,
			partner: [],
			cart: [],
		};
	},
  methods: {
		sortByPriceDecrement() {
			this.products.sort((a, b) => b.price - a.price);
		},
		sortByPriceIncrement() {
			this.products.sort((a, b) => a.price - b.price);
		},
    ...mapMutations(['addToCart'])
  },
	mounted() {
		// Getfrom partner products data 
		axios.get(this.url)
			.then(response => {
				this.products = response.data;
			})
			.catch(error => {
				console.error('Error fetching data:', error);
			});

		// Get partner data
		axios.get("../api/db.json")
			.then(response => {
				// Fix the typo in the filter condition
				this.partner = response.data.db.partners.filter(product => product.products === this.partnerName + ".json");
			})
			.catch(error => {
				console.error('Error fetching data:', error);
			});
	}
};
</script>

