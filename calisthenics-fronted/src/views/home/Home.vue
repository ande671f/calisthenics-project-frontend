<template>
<div v-if="frontPage != undefined">
	<div class="main-grid">
		<div class="container">
			<div class="row">
				<Hero 
					:propTitle="frontPage.title"
					:propManchet="frontPage.manchet"
				/>
			</div>
			<div class="row">
				<div class="col">
					<navigation-white />
				</div>
			</div>
			<div class="row">
				<About
					:propAboutTitle="frontPage.aboutTitle"
					:propAbout="frontPage.about"
				 />
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
