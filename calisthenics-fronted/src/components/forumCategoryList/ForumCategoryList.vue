<template>
	<div class="col-10 offset-1">
		<div class="row">
			<ul>
				<li v-for="category in categories" :key="category">
					<forum-category :category="category" />
				</li>
			</ul>
		</div>
	</div>
</template>

<script src="./ForumCategoryList.ts"></script>
<style lang="scss" src="./ForumCategoryList.scss" scoped></style>
