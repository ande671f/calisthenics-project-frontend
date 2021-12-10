<template>
	<div v-if="workouts != undefined">
		<div class="col-10 offset-1">
			<div class="row">
				<ul>
					<li v-for="workout in workouts" :key="workout">
						<workout :workout="workout" />
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script src="./WorkoutList.ts"></script>
<style lang="scss" src="./WorkoutList.scss" scoped></style>
