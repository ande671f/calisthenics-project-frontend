<template>
	<div class="col-10 offset-1">
		<div class="row">
			<div class="forumCommentForumlar">
				<div class="forumCommentFormular__inputField col-12">
					<div class="">
						<textarea type="text" placeholder="Besked..." />
					</div>
				</div>
				<div class="forumCommentFormular__button col-2">
					<button @click="Send">Send</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script src="./ForumCommentFormular.ts"></script>
<style lang="scss" src="./ForumCommentFormular.scss" scoped></style>
