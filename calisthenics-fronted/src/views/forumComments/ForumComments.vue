<template>
	<div class="container">
		<div class="col-12">
			<div class="row">
				<navigation-black />
			</div>
			<div v-if="forumPost != undefined" class="row">
				<forum-post-details :forumPostDetails="forumPost" />
			</div>
			<div class="row">
				<page-header :title="pageHeaderTitle" style="text-align: left" />
			</div>
			<div v-if="forumComments != undefined" class="row">
				<forum-comment-list :forumCommentList="forumComments" />
			</div>
			<div class="row">
				<forum-comment-formular :forumPostId="forumPostId" />
			</div>
		</div>
	</div>
</template>

<script src="./ForumComments.ts"></script>
