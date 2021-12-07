<template>
	<div class="col-12">
		<div class="row">
			<div v-if="instructor != null" class="instructor">
				<img
					:src="instructor.profileImage.url"
					alt="Instructor"
					class="instructor__image"
					style="width: 100%"
				/>
				<h1 class="instructor__name">{{ instructor.name }}</h1>
				<h1 class="instructor__age">{{ instructor.age }} ÅR</h1>
				<div class="middle">
					<p class="instructor__description">Om {{ instructor.name }}: <br />{{ instructor.description }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script src="./Instructor.ts"></script>
<style lang="scss" src="./Instructor.scss" scoped></style>
