<template>
	<div v-if="post != undefined">
		<div class="col-12">
			<div class="forumPost">
				<div class="col-1">
					<div class="forumPost__icon">
						<img src="../../../assets/icons/workout-icon.svg" alt="category_icon" />
					</div>
				</div>
				<div class="col-7">
					<div class="forumPost__title">
						<p>{{ post.title }}</p>
						<p></p>
					</div>

					<div class="forumPost__description">
						<p>{{ post.description }}</p>
					</div>
				</div>
				<div class="col-1">
					<div class="forumPost__icon">
						<img src="../../../assets/icons/comment-icon.svg" alt="category_icon" />
					</div>
				</div>
				<div class="col-1">
					<p>5</p>
				</div>
				<div class="col-2">
					<div class="forumPost__date">
						<p>{{ post.date }}</p>
					</div>
					<div class="forumPost__author">
						<p>Byggemand Bob</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script src="./ForumPost.ts"></script>
<style lang="scss" src="./ForumPost.scss" scoped></style>
