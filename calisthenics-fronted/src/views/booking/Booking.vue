<template>
	<div v-if="forumMember != null">
		<div class="container">
			<div class="col-12">
				<div class="row">
					<navigation-black />
				</div>
				<div class="row">
					<page-header :title="title" />
				</div>
				<div class="col-10 offset-1">
					<div v-if="forumMember.communityMember.isInstructor">
						<create-workout-location />
						<create-workout-type />
						<span v-if="workoutTypes && workoutLocations && workouts">
							<create-workout
								:workouts="workouts"
								:workoutTypes="workoutTypes"
								:workoutLocations="workoutLocations"
							/>
						</span>
					</div>
				</div>
				<div class="row">
					<div v-if="workouts != undefined">
						<WorkoutList :workouts="workouts" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script src="./Booking.ts"></script>
