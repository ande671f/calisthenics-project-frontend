<template>
	<div v-if="frontPage != undefined">
		<Hero :title="frontPage.title" :manchet="frontPage.manchet" />
		<div class="container">
			<div class="row"></div>
			<div class="row">
				<div class="col-12">
					<navigation-white />
				</div>
			</div>
			<div class="row">
				<About :propAboutTitle="frontPage.aboutTitle" :propAbout="frontPage.about" />
			</div>
			<div class="row">
				<ReviewList :reviews="frontPage.reviewsCollection" />
			</div>
		</div>
	</div>
</template>

<script src="./Home.ts"></script>
