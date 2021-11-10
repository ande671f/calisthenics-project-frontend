<template>
<div v-if="frontPage != undefined">
	<div class="main-grid">
		<div class="container">
			<div class="row">
					<About />
			</div>
				<h1>
					{{frontPage.title}}
				</h1>
		</div>
	</div>
</div>
	
</template>

<script src="./Home.ts"></script>
