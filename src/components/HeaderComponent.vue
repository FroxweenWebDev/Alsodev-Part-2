<template>
	<div class="container">
		<header class="header">
			<router-link to="/" class="logo"><img src="@/assets/icon/logo.svg" alt="Logo" /></router-link>
			<label class="address">
				<input type="text" class="input input-address" placeholder="Адрес доставки" />
			</label>
			<div class="buttons">
				<span class="user-name"></span>
				<button class="button button-primary button-auth" @click="openAuthModal">
					<span class="button-auth-svg"></span>
					<span class="button-text">Войти</span>
				</button>
				<button class="button button-cart" @click="openCartModal">
					<span class="button-cart-svg"></span>
					<span class="button-text">Корзина 
						<span v-if="cartItems.length === 0">
						</span>
						<span v-else>
								<b>({{ cartItems.length }}) <sup>{{ cartItemsTotal }} ₽</sup></b>
						</span>
						
					</span>
				</button>
				<button class="button button-primary button-out">
					<span class="button-text">Выйти</span>
					<span class="button-out-svg"></span>
				</button>
			</div>
		</header>
	</div>
	<CartModal ref="cartModal" />
	<AuthModal ref="authModal" />
</template>


<script>

import { mapState } from 'vuex';
import CartModal from '@/components/CartComponent.vue';
import AuthModal from '@/components/authComponent.vue';

export default {
  components: {
		CartModal,
    AuthModal
  },
  computed: {
		...mapState(['cartItems']),
    cartItemsTotal() {
      return this.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }
  },
  methods: {
    openCartModal() {
      this.$refs.cartModal.ToggleModalCart(); 
    },
		openAuthModal() {
      this.$refs.authModal.ToggleModalLogin(); 
    }
  }
};
</script>