<template>
	<div class="about col-10 offset-1">
		<div class="row">
			<div class="about__content col-5 offset-1">
				<h1 v-if="aboutTitle != null">
					{{ aboutTitle }}
				</h1>
				<p v-if="about != null">
					{{ about }}
				</p>
			</div>
			<div class="about__image col-5">
				<img src="../../assets/images/about-us-image.jpg" alt="" />
			</div>
		</div>
	</div>
</template>

<script src="./About.ts"></script>
<style lang="scss" src="./About.scss" scoped></style>
