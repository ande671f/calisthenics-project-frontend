<template>
	<div class="container">
		<div class="col-12">
			<div class="row">
				<NavigationBlack />
			</div>
			<div class="row">
				<div v-if="forumCategoryList != undefined">
					<div v-if="title != null">
						<page-header :title="pageHeadertitle" />
					</div>
					<forum-category-list :forumCategoryList="forumCategoryList" />
				</div>
				<div v-else>
					<div>
						<page-header :title="titleLoading" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script src="./Forum.ts"></script>
