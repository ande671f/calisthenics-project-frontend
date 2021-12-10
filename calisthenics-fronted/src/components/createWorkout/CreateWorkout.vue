<template>
	<button class="openButton" @click="displayCreateWorkout">Opret træningshold</button>
	<div class="popup" v-if="isCreateWorkoutActive">
		<div class="card">
			<div class="card__title">Nyt træningshold</div>
			<div class="card__inputField">
				<label for="date">Dato</label>
				<input type="date" name="date" v-model="date" required />
			</div>
			<div class="card__inputField">
				<label for="workoutType">Træningstype</label>
				<select name="workoutType" v-model="workoutType">
					<option disabled value="">Please select one</option>
					<option v-for="workoutType in workoutTypes" :key="workoutType" :value="workoutType">
						{{ workoutType.title }}, {{ workoutType.description }}
					</option>
				</select>
			</div>
			<div class="card__inputField">
				<label for="workoutLocation">Træningslokation</label>
				<select name="workoutLocation" v-model="workoutLocation">
					<option disabled value="">Please select one</option>
					<option v-for="workoutLocation in workoutLocations" :key="workoutLocation" :value="workoutLocation">
						{{ workoutLocation.city }}, {{ workoutLocation.address }}, {{ workoutLocation.description }}
					</option>
				</select>
			</div>
			<div class="card__create">
				<button @click="createWorkout">Create</button>
			</div>
			<div class="card__close">
				<button @click="displayCreateWorkout">Close</button>
			</div>
		</div>
	</div>
</template>

<script src="./CreateWorkout.ts"></script>
<style lang="scss" src="./CreateWorkout.scss" scoped></style>
