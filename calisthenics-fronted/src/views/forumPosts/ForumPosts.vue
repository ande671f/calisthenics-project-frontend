<template>
	<div></div>
	<div class="container">
		<div class="col-12">
			<div class="row">
				<navigation-black />
			</div>
			<div class="row">
				<page-header :title="pageHeaderTitle" />
			</div>
			<div class="row">
				<forum-post-list />
			</div>
			<div v-if="forumCategoryId != undefined">
				<h1>{{ forumCategoryId }}</h1>
			</div>
		</div>
	</div>
</template>

<script src="./ForumPosts.ts"></script>
