<template>
	<div v-if="comment != undefined">
		<div class="col-12">
			<div class="forumComment">
				<div class="row">
					<p>{{ comment.description }}</p>
				</div>
				<div class="col-12 row">
					<div class="col-6 forumComment__author">
						<p>Navn Efternavn</p>
					</div>
					<div class="col-6 forumComment__date">
						{{ comment.date }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script src="./ForumComment.ts"></script>
<style lang="scss" src="./ForumComment.scss" scoped></style>
