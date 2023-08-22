<template>
	<router-link :to="'/product/'+removeExtension(partner.products)" v-for="partner in partners" :key="partner.name" href="/product" class="card card-restaurant">
		<img :src="partner.image" :alt="partner.name" class="card-image" />
		<div class="card-text">
			<div class="card-heading">
				<h3 class="card-title">{{ partner.name }}</h3>
				<span class="card-tag tag">{{ partner.time_of_delivery }} мин</span>
			</div>
			<!-- /.card-heading -->
			<div class="card-info">
				<div class="rating">
					{{ partner.stars }}
				</div>
				<div class="price">От {{ partner.price }} ₽</div>
				<div class="category">{{ partner.kitchen }}</div>
			</div>
			<!-- /.card-info -->
		</div>
		<!-- /.card-text -->
	</router-link>
	<!-- /.card -->
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      partners: [],
			url: ""
    };
  },
  methods: {
    removeExtension(filename) {
      return filename.replace('.json', '');
    }
  },
  mounted() {
    axios.get("../api/db.json") // Replace with the actual path to your JSON file
      .then(response => {
        this.partners = response.data.db.partners;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
};
</script>