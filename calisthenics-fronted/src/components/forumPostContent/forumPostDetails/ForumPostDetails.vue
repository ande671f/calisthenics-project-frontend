<template>
	<div v-if="forumPostDetails != undefined">
		<div class="col-10 offset-1">
			<div class="forumPostDetails">
				<div class="forumPostDetails__titleAndDate">
					<div class="forumPostDetails__title">
						<p>{{ forumPostDetails.title }}</p>
					</div>
					<div class="forumPostDetails__date">
						<p>{{ forumPostDetails.date }}</p>
					</div>
				</div>
				<div class="forumPostDetails__description">
					<p>{{ forumPostDetails.description }}</p>

					<div class="forumPostDetails__media">
						<img src="../../../../src/assets/images/image011.jpg" alt="" />
					</div>
				</div>
				<div class="forumPostDetails__author">
					<p>{{ forumPostDetails.forumMemberId }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script src="./ForumPostDetails.ts"></script>
<style lang="scss" src="./ForumPostDetails.scss" scoped></style>
