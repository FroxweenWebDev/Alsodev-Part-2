<template>
	<div class="cart-title">
		<h1>Корзина</h1>
	</div>
	<div class="cart" v-for="item in cart" :key="item.id">
		<div class="cart__item">
			<div class="cart__item-image"><img :src="item.image" :alt="item.name"></div>
			<div class="cart__item-data">
				<span class="cart__item-title">{{ item.name }}</span>
				<span class="cart__item-price">Цена: <span>{{ item.price }}</span> <sup>₽</sup></span>
			</div>
			<div class="cart__item-counter">
				<button>-</button>
				<span class="count"> 1 </span>
				<button>+</button>
			</div>
		</div><!--cart__item.-->
	</div><!--cart.-->
	


	<div class="cart__total">
		<span class="subtotal">
			<span>Subtotal</span>
			<span>$ 1500</span>
		</span>
		<span class="total">
			<span>TOTAL</span>
			<span>$1500</span>
		</span>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			cart: [],
		};
	},
	mounted() {
		axios.get("../api/food-band.json")
			.then(response => {
				// Fix the typo in the filter condition
				this.cart = response.data;
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