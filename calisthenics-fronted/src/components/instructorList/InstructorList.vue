<template>
	<div class="col-12">
		<div class="row">
			<div class="instructorList col-10 offset-1">
				<div v-if="instructors != undefined" class="row">
					<div class="row">
						<ul class="row">
							<li
								v-for="(instructor, index) in instructors.items"
								:key="instructor"
								:class="[
									{ 'col-3 offset-1': index === 0 },
									{ 'col-3 offset-1': index === 1 },
									{ 'col-3 offset-1': index === 2 },
								]"
							>
								<Instructor :instructor="instructor" />
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script src="./InstructorList.ts"></script>
<style lang="scss" src="./InstructorList.scss" scoped></style>
