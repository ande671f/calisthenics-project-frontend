<template>
	<div class="container">
		<div class="col-12">
			<div class="row">
				<navigation-black />
			</div>
			<div class="row">
				<div v-if="forumPostList != undefined">
					<div v-if="title != null">
						<page-header :title="title" />
					</div>
					<forum-post-list :forumPostList="forumPostList" />
				</div>
				<div v-else>
					<div>
						<page-header :title="titleLoading" />
					</div>
				</div>
			</div>
			<div v-if="forumCategoryId != undefined">
				<h1>{{ forumCategoryId }}</h1>
			</div>
		</div>
	</div>
</template>

<script src="./ForumPosts.ts"></script>
