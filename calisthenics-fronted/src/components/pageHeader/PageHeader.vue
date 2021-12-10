<template>
	<div v-if="title != undefined">
		<div v-if="title != 'Kommentarer'" class="title">
			<h1>
				{{ title }}
			</h1>
		</div>
		<div v-else class="col-10 offset-1 title2">
			<h1>
				{{ title }}
			</h1>
		</div>
	</div>
</template>

<script src="./PageHeader.ts"></script>
<style lang="scss" src="./PageHeader.scss" scoped></style>
