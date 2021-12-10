<template>
	<div v-if="comment != undefined">
		<div class="col-12">
			<div class="forumComment">
				<div class="forumComment__description">
					<p>{{ comment.description }}</p>
				</div>
				<div class="forumComment__authorAndDate">
					<div class="forumComment__name">
						<p>{{ comment.forumMember.name }}</p>
					</div>
					<div class="forumComment__date">
						<p>{{ comment.date }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script src="./ForumComment.ts"></script>
<style lang="scss" src="./ForumComment.scss" scoped></style>
