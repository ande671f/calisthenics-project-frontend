<template>
	<div class="chart-wrapper">
		<div>
			<h1 class="h2 chart-wrapper__title">Vægt graf:</h1>
		</div>
		<LineChart :chart-data="data" :options="options" css-classes="chart-container" />
	</div>
</template>

<script src="./PersonalProgressChart.ts"></script>
<style lang="scss" src="./PersonalProgressChart.scss" scoped></style>
