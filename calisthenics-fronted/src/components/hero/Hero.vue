<template>
	<div class="col-12">
		<div class="hero row">
			<NavigationWhite />
			<video class="hero__video" autoplay muted loop>
				<source src="../../assets/videos/hero-video.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<div class="hero__content col-12">
				<h1 v-if="title != null">
					{{title}}
				</h1>
				<h2 v-if="manchet != null">
					{{manchet}}
				</h2>
			</div>
		</div>
	</div>
</template>

<script src="./Hero.ts"></script>
<style lang="scss" src="./Hero.scss" scoped></style>
