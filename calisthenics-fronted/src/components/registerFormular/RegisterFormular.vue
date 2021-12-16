<template>
	<div class="col-12">
		<div class="row">
			<div class="registerFormular">
				<div class="row">
					<div class="registerFormular__title">
						<h1>Bliv medlem af Calisthenics Odense</h1>
					</div>
				</div>
				<div class="row">
					<div class="registerFormular__information">
						<p>
							Udfyld formularen og vi vil kontakte dig hurtigst muligt. <br />
							Husk, at du altid er velkommen til én gratis prøvetime <br />
							Bemærk, at du ikke er aktiv medlem før du har modtaget en bekræftigelse fra os.
						</p>
					</div>
				</div>
				<div class="row">
					<div class="col-10 offset-1">
						<div class="registerFormular__inputField col-12">
							<div class="">
								<input type="text" placeholder="Fulde navn..." />
							</div>
						</div>
						<div class="registerFormular__inputField col-12">
							<div class="">
								<input type="date" placeholder="Fødselsdato..." />
							</div>
						</div>
						<div class="registerFormular__inputField col-12">
							<div class="">
								<input type="text" placeholder="Telefon..." />
							</div>
						</div>
						<div class="registerFormular__inputField col-12">
							<div class="">
								<input type="text" placeholder="Email..." />
							</div>
						</div>
						<div class="registerFormular__inputField col-12">
							<div class="">
								<input type="text" placeholder="Besked..." />
							</div>
						</div>
						<div>
							<div class="registerFormular__button col-3">
								<button @click="Send">Send</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script src="./RegisterFormular.ts"></script>
<style lang="scss" src="./RegisterFormular.scss" scoped></style>
