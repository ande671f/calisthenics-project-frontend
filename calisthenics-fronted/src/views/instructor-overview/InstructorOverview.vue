<template>
	<div class="container">
		<div class="row">
			<div class="col-12">
				<NavigationBlack />
			</div>
		</div>
		<div class="instructors col-12">
			<div class="row">
				<div class="instructors__title">
					<h1>Instruktører</h1>
				</div>
				<div v-if="instructorsPage != undefined">
					<InstructorList :instructors="instructorsPage.instructorsCollection" />
				</div>
			</div>
		</div>
	</div>
</template>

<script src="./InstructorOverview.ts"></script>
<style lang="scss" src="./InstructorOverview.scss" scoped></style>
