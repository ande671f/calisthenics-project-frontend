<template>
	<div class="container">
		<div class="row">
			<h1>Velkommen til administrator side</h1>
			<div v-if="forumMembers != undefined">
				<select v-model="selectedForumMember">
					<option v-for="forumMember in forumMembers" :key="forumMember" v-bind:value="forumMember">
						{{ forumMember.name }}
					</option>
				</select>
			</div>

			<div v-if="selectedForumMember != undefined">
				<h3>Forumsoplysninger</h3>
				<form>
					<label for="name">Navn:</label>
					<input v-model="selectedForumMember.name" id="name" />
					<br />
					<label for="email">Email:</label>
					<input v-model="selectedForumMember.email" id="email" />
					<br />
					<label for="forumMemberId">Forum medlems id:</label>
					<input v-model="selectedForumMember.forumMemberId" id="forumMemberId" disabled />
					<button type="reset" @click="deleteForumMember">Slet forums medlem</button>
				</form>
				<div v-if="selectedForumMember.communityMember != null">
					<h3>Foreningsoplysninger</h3>
					<form>
						<label for="communityMemberId">Forening medlems id:</label>
						<input
							v-model="selectedForumMember.communityMember.communityMemberId"
							id="communityMemberId"
							disabled
						/>
						<br />
						<label for="phoneNumber">Telefonnummer:</label>
						<input v-model="selectedForumMember.communityMember.phoneNumber" id="phoneNumber" />
						<br />
						<label for="address">Adresse:</label>
						<input v-model="selectedForumMember.communityMember.address" id="address" />
						<br />
						<label for="postalCode">Postnummer:</label>
						<input v-model="selectedForumMember.communityMember.postalCode" id="postalCode" />
						<br />
						<label for="city">By:</label>
						<input v-model="selectedForumMember.communityMember.city" id="city" />
						<br />
						<label for="forumMemberId">Forum medlems id:</label>
						<input
							v-model="selectedForumMember.communityMember.forumMemberId"
							id="forumMemberId"
							disabled
						/>
						<br />
						<label for="isInstructor">Er instruktør?:</label>
						<input
							type="checkbox"
							v-model="selectedForumMember.communityMember.isInstructor"
							id="isInstructor"
						/>
					</form>
					<button @click="updateCommunityMember">Opdatere foreningsmedlem</button>
					<button @click="deleteCommunityMember">Slet som foreningsmedlem</button>
				</div>
				<div v-else>
					<button @click="createCommunityMember">Opret foreningsmedlem</button>
				</div>
			</div>
		</div>

		<div class="row">
			<h2>Category</h2>
			<h4>hll</h4>
			<div v-if="newForumCategory != undefined">
				<input v-model="newForumCategory.forumCategoryId" placeholder="category id" id="forumCategoryId" />
				<br />
				<input v-model="newForumCategory.title" placeholder="category title" id="title" />
				<br />
				<input v-model="newForumCategory.description" placeholder="category description" id="description" />
				<br />
				<button @click="createForumCategory">Add category</button>
			</div>
		</div>
	</div>
</template>

<script src="./Admin.ts"></script>
<style lang="scss" src="./Admin.scss" scoped></style>
