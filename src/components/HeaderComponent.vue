<template>
	<div class="container">
		<header class="header">
			<router-link to="/" class="logo"><img src="@/assets/icon/logo.svg" alt="Logo" /></router-link>
			<label class="address">
				<input type="text" class="input input-address" placeholder="Адрес доставки" />
			</label>
			<div class="buttons">
				<span class="user-name"></span>
				<button class="button button-primary button-auth" @click="toggleAuth">
					<span class="button-auth-svg"></span>
					<span class="button-text">Войти</span>
				</button>
				<button class="button button-cart" @click="toggleCart">
					<span class="button-cart-svg"></span>
					<span class="button-text">Корзина {{ cartItemsLocal }}</span>
				</button>
				<button class="button button-primary button-out">
					<span class="button-text">Выйти</span>
					<span class="button-out-svg"></span>
				</button>
			</div>
		</header>
	</div>

	<div class="modal modal-cart" :class="isOpenCart ? 'is-open' : ''">
		<div class="modal-dialog">
			<div class="modal-header">
				<h3 class="modal-title">Корзина</h3>
				<button class="close" @click="toggleCart">&times;</button>
			</div>
			<!-- /.modal-header -->
			<div class="modal-body">
				<div class="food-row" v-for="(item, index) in cart" :key="index">
					<span class="food-name">{{ item.name }}</span>
					<strong class="food-price">{{ item.price }} ₽</strong>
					<div class="food-counter">
						<button class="counter-button">-</button>
						<span class="counter">1</span>
						<button class="counter-button">+</button>
					</div>
				</div>
				<!-- /.foods-row -->
				<div class="food-row">
					<span class="food-name">Ролл угорь стандарт</span>
					<strong class="food-price">250 ₽</strong>
					<div class="food-counter">
						<button class="counter-button">-</button>
						<span class="counter">1</span>
						<button class="counter-button">+</button>
					</div>
				</div>
				<!-- /.foods-row -->
				<div class="food-row">
					<span class="food-name">Ролл угорь стандарт</span>
					<strong class="food-price">250 ₽</strong>
					<div class="food-counter">
						<button class="counter-button">-</button>
						<span class="counter">1</span>
						<button class="counter-button">+</button>
					</div>
				</div>
				<!-- /.foods-row -->
				<div class="food-row">
					<span class="food-name">Ролл угорь стандарт</span>
					<strong class="food-price">250 ₽</strong>
					<div class="food-counter">
						<button class="counter-button">-</button>
						<span class="counter">1</span>
						<button class="counter-button">+</button>
					</div>
				</div>
				<!-- /.foods-row -->
			</div>
			<!-- /.modal-body -->
			<div class="modal-footer">
				<span class="modal-pricetag">1250 ₽</span>
				<div class="footer-buttons">
					<router-link to="/cart"><button class="button button-primary" @click="toggleCart">Оформить заказ</button></router-link>
					<button class="button clear-cart" @:click="clearCart()">Отмена</button>
				</div>

			</div>
			<!-- /.modal-footer -->
		</div>
		<!-- /.modal-dialog -->
	</div>

	<div class="modal-auth" :class="isOpenAuth ? 'is-open' : ''">
		<div class="modal-dialog modal-dialog-auth">
			<button class="close-auth" @click="toggleAuth">&times;</button>
			<form id="logInForm">
				<fieldset class="modal-body">
					<legend class="modal-title">Авторизация</legend>
					<label class="label-auth">
						<span>Логин</span>
						<input id="login" type="text">
					</label>
					<label class="label-auth">
						<span>Пароль</span>
						<input id="password" type="password">
					</label>
				</fieldset>
				<!-- /.modal-body -->
				<div class="modal-footer ">
					<div class="footer-buttons">
						<button class="button button-primary button-login" type="submit">Войти</button>
					</div>
				</div>
			</form>
			<!-- /.modal-footer -->
		</div>
		<!-- /.modal-dialog -->
	</div>
</template>

<script>
// import axios from 'axios';

export default {
	data() {
		return {
			isOpenCart: false,
			isOpenAuth: false,
			product: [],
			url: `../api/${this.$route.params.partnerName}.json`,
			cart: [],
		};
	},
	methods: {
		toggleCart() {
			this.isOpenCart = !this.isOpenCart;
		},
		toggleAuth() {
			this.isOpenAuth = !this.isOpenAuth;
		},
	},
	mounted() {

	}
};
</script>