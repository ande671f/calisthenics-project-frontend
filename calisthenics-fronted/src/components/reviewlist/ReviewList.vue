<template>
	<div class="col-12">
		<div class="row">
			<div class="reviewList col-10 offset-1">
				<div class="row">
					<ul class="row">
						<li
							v-for="(review, index) in reviews.items"
							:key="review"
							:class="[
								{ 'col-5': index === 0 },
								{ 'col-5 offset-2': index === 1 },
								{ 'col-5': index === 2 },
								{ 'col-5 offset-2': index === 3 },
							]"
						>
							<Review :review="review" />
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script src="./ReviewList.ts"></script>
<style lang="scss" src="./ReviewList.scss" scoped></style>
