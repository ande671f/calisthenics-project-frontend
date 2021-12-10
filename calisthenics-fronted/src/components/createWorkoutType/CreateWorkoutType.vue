<template>
	<button class="openButton" @click="displayCreateWorkoutType">Opret træningstype</button>
	<div class="popup" v-if="isCreateWorkoutTypeActive">
		<div class="card">
			<div class="card__title">Ny træningstype</div>
			<div class="card__inputField">
				<label for="title">Træningsform</label>
				<input type="text" placeholder="Træningsform..." name="title" v-model="title" required />
			</div>
			<div class="card__inputField">
				<label for="description">Beskrivelse</label>
				<textarea type="text" placeholder="Navn..." name="description" v-model="description" required />
			</div>
			<div class="card__create">
				<button @click="createWorkoutType">Create</button>
			</div>
			<div class="card__close">
				<button @click="displayCreateWorkoutType">Close</button>
			</div>
		</div>
	</div>
</template>

<script src="./CreateWorkoutType.ts"></script>
<style lang="scss" src="./CreateWorkoutType.scss" scoped></style>
