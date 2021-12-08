<template>
	<div v-if="forumCategoryList != undefined">
		<div class="col-10 offset-1">
			<div class="row">
				<ul>
					<li v-for="category in forumCategoryList" :key="category">
						<router-link
							:to="{
								path: '/forum/' + category.forumCategoryId,
							}"
							append
						>
							<forum-category :category="category" />
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script src="./ForumCategoryList.ts"></script>
<style lang="scss" src="./ForumCategoryList.scss" scoped></style>
