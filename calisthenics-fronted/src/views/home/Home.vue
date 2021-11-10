<template>
<div v-if="frontPage != undefined">
	<div class="main-grid">
		<div class="container">
			<div class="row">
				<Hero />
			</div>
				<h1>
					{{frontPage.title}}
				</h1>
			<div class="row">
				<div class="col">
					<navigation-white />
				</div>
			</div>
			<div class="row">
				<About />
			</div>
			<div class="row">
				<div v-if="reviews != null">
					<ReviewList :reviews="reviews" />
				</div>
			</div>
		</div>
	</div>
</div>
	
</template>

<script src="./Home.ts"></script>
