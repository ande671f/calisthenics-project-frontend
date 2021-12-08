<template>
	<div v-if="workout != undefined">
		<div class="col-12">
			<div class="row">
				<div class="workout">
					<div class="workout__image">
						<img class="hero__image" src="../../../assets/images/location-image.jpg" alt="" />
					</div>
					<div class="workout__content">
						<div class="workout__content__title">
							{{ workout.workoutType.title }}
						</div>
						<div class="workout__content__content">
							<div>
								{{ workout.date }}
							</div>
							<div>
								{{ workout.workoutLocation.address }}
							</div>
						</div>
					</div>
					<div class="workout__buttons">
						<button v-if="isUserJoined" @click="leaveWorkout">Afmeld</button>

						<button v-else @click="joinWorkout">Tilmeld</button>

						<button @click="displayInfobox">Info</button>
					</div>
				</div>
			</div>
			<div class="row"></div>
		</div>
		<div class="popup" v-if="isInfoBoxActive">
			<div class="card">
				<div class="card__title">Holdtræning: {{ workout.workoutType.title }}</div>
				<div>
					<label for="date">{{ workout.date }}</label>
				</div>
				<div v-if="workout.communityMembers != undefined">
					<label for="">Deltagere:</label>
					<ul>
						<li v-for="communityMember in workout.communityMembers" :key="communityMember">
							{{ communityMember.communityMemberId }}
						</li>
					</ul>
				</div>
				<div class="card__close">
					<button @click="displayInfobox">Close</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script src="./Workout.ts"></script>
<style lang="scss" src="./Workout.scss" scoped></style>
