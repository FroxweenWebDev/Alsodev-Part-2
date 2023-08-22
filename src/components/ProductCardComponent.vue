<template>

	<section class="menu">
		<div v-for="item in partner" :key="item.id" class="section-heading">
			<h2 class="section-title restaurant-title">{{ item.name }}</h2>
			<div class="card-info">
				<div class="rating">
					{{ item.stars }}
				</div>
				<div class="price">От {{ item.price }} ₽</div>
				<div class="category">{{ item.kitchen }}</div>
				<div class="sorting">
					<button @click="sortByPriceDecrement" class="button button-secondary">Сначала дорогие</button>
					<button @click="sortByPriceIncrement" class="button button-secondary">Сначала дешевые</button>
				</div>
			</div>
			<!-- /.card-info -->
		</div>
		<div class="cards cards-menu">
			<div v-for="item in product" :key="item.id" class="card">
				<img :src="item.image" :alt="item.name" class="card-image" />
				<div class="card-text">
					<div class="card-heading">
						<h3 class="card-title card-title-reg">{{ item.name }}/</h3>
					</div>
					<!-- /.card-heading -->
					<div class="card-info">
						<div class="ingredients">{{ item.description }}</div>
					</div>
					<!-- /.card-info -->
					<div class="card-buttons">
						<!-- <div v-if="!item.selected"> -->
						<button class="button button-primary button-add-cart" @click="add(item)">
							<span class="button-card-text">В корзину</span>
							<span class="button-cart-svg"></span>
						</button>
						<!-- </div>
						<div v-else> -->
						<!-- poruct selected
						</div> -->
						<strong class="card-price-bold">{{ item.price }} ₽</strong>
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
import axios from 'axios';

export default {
	data() {
		return {
			loading: false,
			product: [],
			url: `../api/${this.$route.params.partnerName}.json`,
			partnerName: this.$route.params.partnerName,
			partner: [],
			cart: [],
		};
	},
	mounted() {
		// Getfrom partner products data 
		axios.get(this.url)
			.then(response => {
				this.product = response.data;
			})
			.catch(error => {
				console.error('Error fetching data:', error);
			});

		// Get partner data
		axios.get("../api/db.json")
			.then(response => {
				// Fix the typo in the filter condition
				this.partner = response.data.db.partners.filter(item => item.products === this.partnerName + ".json");
			})
			.catch(error => {
				console.error('Error fetching data:', error);
			});
	},
	methods: {
		sortByPriceDecrement() {
			this.product.sort((a, b) => b.price - a.price);
		},
		sortByPriceIncrement() {
			this.product.sort((a, b) => a.price - b.price);
		},
		
	}
};
</script>

