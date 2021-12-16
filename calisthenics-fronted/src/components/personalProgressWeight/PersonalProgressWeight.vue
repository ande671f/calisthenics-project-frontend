<template>
	<div class="col-12">
		<div class="row">
			<div class="col-4 weight-wrapper">
				<div v-if="personalProgress">
					<div>
						<h1 class="h2 weight-wrapper__title">Vægt:</h1>
					</div>
					<div class="row">
						<form>
							<div class="form-group weight-wrapper__form">
								<label for="weight">Vægt</label>
								<input
									type="text"
									class="form-control"
									id="weight"
									placeholder="Indtast vægt"
									v-model="weight"
								/>
							</div>
							<div class="weight-wrapper__form">
								<button @click="createWeightListing" type="button" class="btn btn-primary">
									Opdater vægt
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div v-if="weightListings" class="col-8">
				<PersonalProgressChart :weightListings="weightListings" />
			</div>
		</div>
	</div>
</template>

<script src="./PersonalProgressWeight.ts"></script>
<style lang="scss" src="./PersonalProgressWeight.scss" scoped></style>
