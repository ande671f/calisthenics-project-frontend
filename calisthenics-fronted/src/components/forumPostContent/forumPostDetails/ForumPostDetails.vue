<template>
	<div v-if="postDetails != undefined">
		<div class="col-10 offset-1">
			<div class="forumPostDetails">
				<div class="col-12">
					<div class="row">
						<div class="forumPostDetails__titleAndDate">
							<div class="forumPostDetails__title">
								<p>{{ postDetails.title }}</p>
							</div>
							<div class="forumPostDetails__date">
								<p>{{ postDetails.date }}</p>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<p>{{ postDetails.description }}</p>
					<div class="forumPostDetails__media">
						<img src="../../../../src/assets/images/image011.jpg" alt="" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script src="./ForumPostDetails.ts"></script>
<style lang="scss" src="./ForumPostDetails.scss" scoped></style>
