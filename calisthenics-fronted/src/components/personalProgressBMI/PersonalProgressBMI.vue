<template>
	<div class="bmi-wrapper">
		<div class="col-12">
			<div>
				<h2 class="h2 bmi-wrapper__title">BMI:</h2>
			</div>
			<div class="d-flex flex-row text-white">
				<div class="p-4 bg-primary text-center skill-block">
					<h6 class="h6">
						BMI <br />
						under <br />
						18,5 <br />
					</h6>
				</div>
				<div class="p-4 bg-success text-center skill-block">
					<h6 class="h6">
						BMI <br />
						mellem <br />
						18,5-25 <br />
					</h6>
				</div>
				<div class="p-4 bg-warning text-center skill-block">
					<h6 class="h6">
						BMI <br />
						mellem <br />
						25-30 <br />
					</h6>
				</div>
				<div class="p-4 bg-danger text-center skill-block">
					<h6 class="h6">
						BMI <br />
						over <br />
						30 <br />
					</h6>
				</div>
			</div>
			<div style="padding: 16px">
				<div class="col-6">
					<button type="button" class="btn btn-primary">Udregn BMI</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script src="./PersonalProgressBMI.ts"></script>
<style lang="scss" src="./PersonalProgressBMI.scss" scoped></style>
