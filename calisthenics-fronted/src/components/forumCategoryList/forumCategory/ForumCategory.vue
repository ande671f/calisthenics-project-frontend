<template>
	<div v-if="category != undefined">
		<div class="col-12">
			<div class="forumCategory">
				<div class="row">
					<div class="col-10">
						<div class="forumCategory__title">
							<h1>{{ category.title }}</h1>
						</div>
						<div class="forumCategory__description">
							<p>{{ category.description }}</p>
						</div>
					</div>
					<div class="col-2">
						<div class="forumCategory__icon">
							<img src="../../../assets/icons/workout-icon.svg" alt="workout icon" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script src="./ForumCategory.ts"></script>
<style lang="scss" src="./ForumCategory.scss" scoped></style>
