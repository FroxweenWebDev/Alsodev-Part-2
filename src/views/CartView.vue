<template>
	<div class="cart-title">
		<h1>Корзина</h1>
	</div>
	<div v-if="cartItems.length === 0">
		<br><br>
		<b>Ваша корзина пуста <u><router-link to="/">к покупкам</router-link></u></b>
		<br><br>
	</div>
	<div v-else>
		<div class="cart" v-for="(item, index) in cartItems" :key="index">
			<div class="cart__item">
				<div class="cart__item-image"><img :src="item.product.image" :alt="item.product.name"></div>
				<div class="cart__item-data">
					<span class="cart__item-title">{{ item.product.name }}</span>
					<span class="cart__item-price">Цена: <span>{{ item.product.price }}</span> <sup>₽</sup></span>
				</div>
				<div class="cart__item-counter">
					<button @click="decreaseQuantity(index)" :disabled="item.quantity === 1">-</button>
					<span class="count">{{ item.quantity }}</span>
					<button @click="increaseQuantity(index)">+</button>
					&nbsp;
					&nbsp;
					&nbsp;
					<button @click="removeFromCart(index)">&times;</button>
				</div>
			</div><!--cart__item.-->
		</div><!--cart.-->
		<br>
		<center><a @click="clearCart"><b>Очистить корзину</b></a></center>

		<div class="cart__total">
			<span class="subtotal">
				<span>Subtotal</span>
				<span>{{ total }}</span>
			</span>
			<span class="total">
				<span>TOTAL</span>
				<span>{{ total }}</span>
			</span>
		</div>

	</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
	data() {
		return {
			isOpen: false
		};
	},
	computed: {
		...mapState(['cartItems']),
		total() {
			return this.cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
		}
	},
	methods: {
		...mapMutations(['removeFromCart', 'increaseQuantity', 'decreaseQuantity']),
		ToggleModalCart() {
			this.isOpen = !this.isOpen;
		},
		clearCart() {
			// Clear cart in the Vuex store
			this.cartItems.splice(0, this.cartItems.length);

			// Clear cart in localStorage
			localStorage.removeItem('cartItems');

			//Modal close on cart clearing
			this.ToggleModalCart()
		}
	}
};
</script>