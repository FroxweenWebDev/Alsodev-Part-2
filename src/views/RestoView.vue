<template>
	<!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
	<section class="container-promo">
		<slider-component/>
	</section>
	<section class="restaurants">
		<div class="section-heading">
			<h2 class="section-title">Рестораны</h2>
			<label class="search">
				<input type="text" class="input input-search" placeholder="Поиск блюд и ресторанов" />
			</label>
		</div>
		<div class="cards cards-restaurants">
			<resto-component></resto-component>
		</div>
		<!-- /.cards -->
	</section>
</template>

<script>
// @ is an alias to /src
import RestoComponent from '@/components/RestoComponent.vue'
import SliderComponent from '@/components/SliderComponent.vue'

export default {
	name: 'RestoView',
	components: {
		RestoComponent,
		SliderComponent
	}
}
</script>
