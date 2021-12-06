<template>
	<div class="col-12">
		<div class="row">
			<div class="instructorList col-10 offset-1">
				<div v-if="instructors != undefined" class="row">
					{{ instructors }}
				</div>
			</div>
		</div>
	</div>
</template>

<script src="./InstructorList.ts"></script>
<style lang="scss" src="./InstructorList.scss" scoped></style>
