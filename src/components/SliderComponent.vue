<template>
		<carousel :items-to-show="1" :autoplay="2000" :wrap-around="true" :transition="1000">
			<slide v-for="slide in 1" :key="slide">
				<section class="promo pizza">
					<h1 class="promo-title">Онлайн-сервис <br />доставки еды на дом</h1>
					<p class="promo-text">
						Блюда из любимого ресторана привезет курьер в перчатках, маске и с антисептиком
					</p>
				</section>
			</slide>
			<slide v-for="slide in 1" :key="slide">
				<section class="promo kebab">
					<h1 class="promo-title">Шашлыки на майские <br> со скидкой 35%</h1>
					<p class="promo-text">
						Закажите шашлыки в любом ресторане до 10 мая и получите скидку по промокоду OMAGAD
					</p>
				</section>
			</slide>
			<slide v-for="slide in 1" :key="slide">
				<section class="promo vegetables">
					<h1 class="promo-title">Скидка 20% на всю еду <br> по промокоду LOVE.JS</h1>
					<p class="promo-text">
						Блюдо из ресторана привезут вместе с двумя подарочными книгами по фронтенду
					</p>
				</section>
			</slide>
			<slide v-for="slide in 1" :key="slide">
				<section class="promo sushi">
					<h1 class="promo-title">Сеты со скидкой до 30% <br> в ресторанах</h1>
					<p class="promo-text">
						Скидки на сеты до 30 мая по промокоду DADADA
					</p>
				</section>
			</slide>
		</carousel>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

export default {
	name: 'App',
	components: {
		Carousel,
		Slide,
	},
}
</script> 

<style lang="scss" scoped>
.carousel {
	margin: 20px auto;
	border-radius: 10px;
	overflow: hidden;
	text-align: initial;
	height: 390px;
	background: #f8f8f8;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

	.carousel__slide,
	.carousel__slide--active {
		padding: 15px;
		border-radius: 10px;

		.promo {
			width: 100%;
		}
	}
}</style>