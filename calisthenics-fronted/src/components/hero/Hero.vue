<template>
	<div class="col-12">
		<div class="hero row">
			<NavigationWhite />
			<img class="hero__image" src="../../assets/images/hero-image.jpg" alt="" />
			<div class="hero__content">
				<h1 v-if="title != null">
					{{ title }}
				</h1>
				<h2 v-if="manchet != null">
					{{ manchet }}
				</h2>
			</div>
		</div>
	</div>
</template>

<script src="./Hero.ts"></script>
<style lang="scss" src="./Hero.scss" scoped></style>
