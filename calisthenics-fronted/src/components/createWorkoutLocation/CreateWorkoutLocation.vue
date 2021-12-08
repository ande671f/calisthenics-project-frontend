<template>
	<button class="openButton" @click="displayCreateWorkoutLocation">Opret træningslokation</button>
	<div class="popup" v-if="isCreateWorkoutLocationActive">
		<div class="card">
			<div class="card__title">Ny træningslokation</div>
			<div class="card__inputField">
				<label for="city">By</label>
				<input type="text" placeholder="By..." name="city" v-model="city" required />
			</div>
			<div class="card__inputField">
				<label for="address">Adresse</label>
				<input type="text" placeholder="Adresse..." name="address" v-model="address" required />
			</div>
			<div class="card__inputField">
				<label for="zip">Postnummer</label>
				<input type="text" placeholder="Postnummer..." name="zip" v-model="zip" required />
			</div>
			<div class="card__inputField">
				<label for="description">Beskrivelse</label>
				<textarea type="text" placeholder="Beskrivelse..." name="description" v-model="description" required />
			</div>
			<div class="card__create">
				<button @click="createWorkoutLocation">Create</button>
			</div>
			<div class="card__close">
				<button @click="displayCreateWorkoutLocation">Close</button>
			</div>
		</div>
	</div>
</template>

<script src="./CreateWorkoutLocation.ts"></script>
<style lang="scss" src="./CreateWorkoutLocation.scss" scoped></style>
