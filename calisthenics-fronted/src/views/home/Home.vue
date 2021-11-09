<template>
	<div class="main-grid">
		<div class="container">
			<div class="row">
				<div v-if="reviews != null">
				<ReviewList :reviews="reviews" />
				</div>
			</div>
		</div>
	</div>
</template>

<script src="./Home.ts"></script>
