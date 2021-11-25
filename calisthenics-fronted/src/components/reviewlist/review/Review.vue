<template>
	<div class="col-12">
		<div class="row">
			<div v-if="review != null" class="review">
				<div class="review__name">
					<h1>{{ review.name }}</h1>
				</div>
				<div class="review__message">
					{{ review.message }}
				</div>
			</div>
		</div>
	</div>
</template>

<script src="./Review.ts"></script>
<style lang="scss" src="./Review.scss" scoped></style>
