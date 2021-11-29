<template>
	<div class="container">
		<div class="row">
			<div class="col-12">
				<NavigationBlack />
			</div>
		</div>
		<div class="register col-12">
			<div class="row">
				<div class="register__title">
					<h1>Opret medlem</h1>
				</div>
			</div>
			<div class="row">
				<div class="register__inputField col-8 offset-2">
					<div class="">
						<input type="text" placeholder="Navn..." v-model="name" required />
					</div>
				</div>
			</div>
			<div class="row">
				<div class="register__inputField col-8 offset-2">
					<div class="">
						<input type="text" placeholder="Email..." v-model="email" required />
					</div>
				</div>
			</div>
			<div class="row">
				<div class="register__inputField col-8 offset-2">
					<div class="">
						<input type="text" placeholder="Adgangskode..." v-model="password" required />
					</div>
				</div>
			</div>
			<div class="row">
				<div class="register__button col-8 offset-2">
					<button @click="createForumMember">Register</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script src="./Register.ts"></script>
<style lang="scss" src="./Register.scss" scoped></style>
