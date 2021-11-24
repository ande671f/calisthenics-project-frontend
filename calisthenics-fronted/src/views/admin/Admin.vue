<template>
	<div class="container">
		<div class="row">
			<h1>Velkommen til administrator side</h1>
			<div v-if="forumMembers != undefined">
				<ul>
					<li v-for="forumMember in forumMembers" :key="forumMember">
						<h3>{{ forumMember }}</h3>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script src="./Admin.ts"></script>
<style lang="scss" src="./Admin.scss" scoped></style>
