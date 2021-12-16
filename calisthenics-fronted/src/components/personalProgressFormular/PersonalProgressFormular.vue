<template>
	<div class="formular-wrapper">
		<h1 class="h2 formular-wrapper__title">Stamdata:</h1>
		<div v-if="personalProgress">
			<form>
				<div class="form-group formular-wrapper__form">
					<label for="height">Højde</label>
					<input
						type="text"
						class="form-control"
						id="height"
						placeholder="Indtast højde"
						v-model="personalProgress.height"
					/>
				</div>
				<div class="form-group formular-wrapper__form">
					<label for="age">Alder</label>
					<input
						type="text"
						class="form-control"
						id="age"
						placeholder="Indtast alder"
						v-model="personalProgress.age"
					/>
				</div>
				<div class="form-group formular-wrapper__form">
					<label for="gender">Køn</label>
					<select class="form-control" id="gender" v-model="personalProgress.gender">
						<option value="1">Kvinde</option>
						<option value="0">Mand</option>
					</select>
				</div>
				<div class="formular-wrapper__form">
					<button @click="updatePersonalProgress" type="button" class="btn btn-primary">Opdatere</button>
				</div>
			</form>
		</div>
		<div v-else class="formular-wrapper__create">
			<button @click="createPersonalProgress" type="submit" class="btn btn-primary">Opret forløb</button>
		</div>
	</div>
</template>

<script src="./PersonalProgressFormular.ts"></script>
<style lang="scss" src="./PersonalProgressFormular.scss" scoped></style>
