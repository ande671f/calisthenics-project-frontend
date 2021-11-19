<template>
	<div v-if="reviewList != null" class="reviewList row">
		<div class="col-12">
			<ul class="row">
				<li
					v-for="(review, index) in reviewList"
					:key="review"
					:class="[
						{ 'col-4 offset-1': index === 0 },
						{ 'col-4 offset-2': index === 1 },
						{ 'col-4 offset-1': index === 2 },
						{ 'col-4 offset-2': index === 3 },
					]"
				>
					<Review :Review="review" />
				</li>
			</ul>
		</div>
	</div>
</template>

<script src="./ReviewList.ts"></script>
<style lang="scss" src="./ReviewList.scss" scoped></style>
