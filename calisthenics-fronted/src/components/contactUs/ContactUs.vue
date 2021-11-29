<template>
	<div class="col-12">
		<div class="row">
			<div class="contactUs">
				<div class="row">
					<div class="contactUs__title">
						<h1>Kontakt os</h1>
					</div>
				</div>
				<div class="row">
					<div class="col-6 offset-1">
						<div class="contactUs__inputField col-12">
							<div class="">
								<input type="text" placeholder="Navn..." />
							</div>
						</div>
						<div class="contactUs__inputField col-12">
							<div class="">
								<input type="text" placeholder="Email..." />
							</div>
						</div>
						<div class="contactUs__inputFieldMessage col-12">
							<div class="">
								<textarea type="text" placeholder="Besked..." />
							</div>
						</div>
						<div>
							<div class="contactUs__button col-3">
								<button @click="Send">Send</button>
							</div>
						</div>
					</div>
					<div class="col-3 offset-1">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7618.829456953321!2d10.38558783885454!3d55.408754459537406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sda!2sdk!4v1637845618341!5m2!1sda!2sdk"
							style="border: 0"
							height="300px"
							allowfullscreen=""
							loading="lazy"
						></iframe>
						<label>Rugådsvej 20, Odense C 5000</label>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script src="./ContactUs.ts"></script>
<style lang="scss" src="./ContactUs.scss" scoped></style>
