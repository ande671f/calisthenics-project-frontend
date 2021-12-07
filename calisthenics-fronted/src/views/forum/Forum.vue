<template>
	<div class="container">
		<div class="col-12">
			<div class="row">
				<NavigationBlack />
			</div>
			<div v-if="title != null">
				<page-header :title="title" />
			</div>
			<div class="row">
				<div v-if="forumCategoryList != undefined">
					<forum-category-list :forumCategoryList="forumCategoryList" />
				</div>
			</div>
		</div>
	</div>
</template>

<script src="./Forum.ts"></script>
