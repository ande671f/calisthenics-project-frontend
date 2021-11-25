<template>
	<div>
		<router-view />
		<div v-if="forumMember != null">
			<h1>{{ forumMember }}</h1>
		</div>
	</div>
	<div>
		<Footer />
	</div>
</template>

<script src="./App.ts"></script>
