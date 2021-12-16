<template>
	<div class="navigation">
		<div class="row">
			<div class="navigation__logo col-3 offset-1">
				<label>calisthenics odense</label>
			</div>
			<div class="col-7">
				<div class="navigation__menuItems">
					<router-link to="/" class="navigation__menuItem">INSTRUKTØRER</router-link>
					<router-link to="/forum" class="navigation__menuItem">FORUM</router-link>
					<span v-if="loggedInForumMember != null">
						<router-link to="/registerCommunityMember" class="navigation__menuItem"
							>BLIV FORENINGSMEDLEM</router-link
						>
						<router-link to="/forum" class="navigation__menuItem">BOOKING</router-link>
						<button @click="logout">LOG UD</button>
					</span>
					<span v-else>
						<router-link to="/" class="navigation__menuItem">BLIV MEDLEM</router-link>
						<router-link to="/login" class="navigation__menuItem">LOGIN</router-link>
						<router-link to="/register" class="navigation__menuItem">OPRET</router-link>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script src="./NavigationBlack.ts"></script>
<style lang="scss" src="./NavigationBlack.scss" scoped></style>
