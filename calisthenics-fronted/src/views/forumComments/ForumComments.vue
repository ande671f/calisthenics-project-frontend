<template>
	<div class="container">
		<div class="col-12">
			<div class="row">
				<navigation-black />
			</div>
			<div class="row">
				<forum-post-details />
			</div>
			<div class="row">
				<page-header :title="pageHeaderTitle" />
			</div>
			<div class="row">
				<forum-comment-list />
			</div>
			<div class="row">
				<forum-comment-formular />
			</div>
		</div>
	</div>
</template>

<script src="./ForumComments.ts"></script>
