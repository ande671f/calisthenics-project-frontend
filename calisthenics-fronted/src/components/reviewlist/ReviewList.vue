<template>
	<div class="row">
		<div v-if="reviews != undefined" class="reviewList col-12">
			<ul>
				<li v-for="review in reviews" :key="review">
					<Review :Review="review" />
				</li>
			</ul>
		</div>
	</div>
</template>

<script src="./ReviewList.ts"></script>
<style lang="scss" src="./ReviewList.scss" scoped></style>
