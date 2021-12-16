<template>
	<div class="col-10 offset-1">
		<div class="row">
			<ul>
				<li v-for="comment in forumCommentList" :key="comment">
					<forum-comment :comment="comment" />
				</li>
			</ul>
		</div>
	</div>
</template>

<script src="./ForumCommentList.ts"></script>
<style lang="scss" src="./ForumCommentList.scss" scoped></style>
