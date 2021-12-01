<template>
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
		</div>
	</div>
</template>

<script src="./ForumPosts.ts"></script>
