<template>
	<header-component /> <!--Header-->
	<main class="main"><!--Main section [START]-->
		<div class="container">
			<router-view /> <!--All pages rendering {auto injected}-->
		</div>
	</main><!--Main section [END]-->
	<footer-component /><!--Footer-->
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
	components: {
		HeaderComponent,
		FooterComponent,
	}
}
</script>

<style lang="scss">
@import 'styles/styles.scss';
</style>
