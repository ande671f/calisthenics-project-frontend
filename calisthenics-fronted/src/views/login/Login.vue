<template>
	<div class="container">
		<div class="row">
			<div class="col-12">
				<NavigationBlack />
			</div>
		</div>
		<div class="login col-12">
			<div class="row">
				<div class="login__title">
					<h1>Login</h1>
				</div>
			</div>
			<div class="row">
				<div class="login__inputField col-8 offset-2">
					<div class="">
						<input type="text" placeholder="Email..." v-model="email" required />
					</div>
				</div>
			</div>
			<div class="row">
				<div class="login__inputField col-8 offset-2">
					<div class="">
						<input type="text" placeholder="Adgangskode..." v-model="password" required />
					</div>
				</div>
			</div>
			<div class="row">
				<div class="login__button col-8 offset-2">
					<button @click="login">Login</button>
				</div>
			</div>
			<div class="row">
				<div class="login__register">
					<a><strong>Ikke</strong> medlem?<br />Meld dig ind her</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script src="./Login.ts"></script>
<style lang="scss" src="./Login.scss" scoped></style>
