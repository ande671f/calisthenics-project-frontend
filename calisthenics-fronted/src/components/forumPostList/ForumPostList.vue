<template>
	<div class="col-10 offset-1">
		<div class="row">
			<ul>
				<li v-for="post in posts" :key="post">
					<forum-post :post="post" />
				</li>
			</ul>
		</div>
	</div>
</template>

<script src="./ForumPostList.ts"></script>
<style lang="scss" src="./ForumPostList.scss" scoped></style>
