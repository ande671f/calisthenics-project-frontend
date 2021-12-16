<template>
	<div class="container">
		<div class="col-12">
			<div class="row">
				<navigation-black />
			</div>
			<div class="row">
				<page-header :title="pageHeaderTitle" />
			</div>
			<div class="col-10 offset-1">
				<div class="row">
					<div v-if="forumMember" class="col-md-7">
						<personal-progress-formular :forumMember="forumMember" />
					</div>
					<div class="col-md-5">
						<personal-progress-BMI />
					</div>
				</div>
				<div class="row">
					<div v-if="forumMember" class="col-12" style="margin-top: 20px">
						<personal-progress-weight :forumMember="forumMember" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script src="./PersonalProgress.ts"></script>
