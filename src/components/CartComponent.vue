<template>
	<div class="modal modal-cart" :class="isOpen ? 'is-open' : ''">
		<div class="modal-dialog">
			<div class="modal-header">
				<h3 class="modal-title">Корзина</h3>
				<button class="close" @click="ToggleModalCart">&times;</button>
			</div>
			<!-- /.modal-header -->
			<div class="modal-body">
				<div v-if="cartItems.length === 0">
					В корзине пусто ...
				</div>

				<div v-else>
					<div class="food-row" v-for="(item, index) in cartItems" :key="index">
						<span class="food-name">{{ item.product.name }}</span>
						<strong class="food-price">{{ item.product.price }} ₽</strong>
						<div class="food-counter">
							<button class="counter-button" @click="decreaseQuantity(index)" :disabled="item.quantity === 1">-</button>
							<span class="counter">{{ item.quantity }}</span>
							<button class="counter-button" @click="increaseQuantity(index)">+</button>
							<button class="counter-button" @click="removeFromCart(index)">&times;</button>
						</div>
					</div>
				</div>

				<!-- /.foods-row -->
			</div>
			<!-- /.modal-body -->
			<div v-if="cartItems.length === 0">
				<center><router-link to="/"><button class="button button-primary" @click="ToggleModalCart">К покупкам</button></router-link></center>
			</div>
			<div v-else>
				<div class="modal-footer">
					<span class="modal-pricetag">{{ total }} ₽</span>
					<div class="footer-buttons">
						<router-link to="/cart"><button class="button button-primary" @click="ToggleModalCart">Оформить заказ</button></router-link>
						<button class="button clear-cart" @click="clearCart">Отмена</button>
					</div>
				</div>
			</div>

			<!-- /.modal-footer -->
		</div>
		<!-- /.modal-dialog -->
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

<style>
/* Add your modal styles here */
</style>
