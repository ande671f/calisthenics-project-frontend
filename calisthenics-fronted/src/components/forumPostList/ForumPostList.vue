<template>
	<div class="col-10 offset-1">
		<div class="row">
			<ul>
				<li v-for="post in forumPostList" :key="post">
					<router-link
						:to="{
							path: '/forum/' + post.forumCategory.title + '/' + post.forumPostId,
						}"
					>
						<forum-post :post="post" />
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script src="./ForumPostList.ts"></script>
<style lang="scss" src="./ForumPostList.scss" scoped></style>
