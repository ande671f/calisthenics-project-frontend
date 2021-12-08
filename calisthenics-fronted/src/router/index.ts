import Admin from "@/views/admin/Admin.vue";
import Booking from "@/views/booking/Booking.vue";
import Forum from "@/views/forum/Forum.vue";
import ForumPosts from "@/views/forumPosts/ForumPosts.vue";
import RegisterCommunityMember from "@/views/registerCommunityMember/RegisterCommunityMember.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/home/Home.vue";
import InstructorOverview from "../views/instructor-overview/InstructorOverview.vue";
import Login from "../views/login/Login.vue";
import Register from "../views/register/Register.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/login",
		name: "Login",
		component: Login,
	},
	{
		path: "/register",
		name: "Register",
		component: Register,
	},
	{
		path: "/admin",
		name: "Admin",
		component: Admin,
	},
	{
		path: "/forum",
		name: "Forum",
		component: Forum,
	},
	{
		path: "/forum/:forumCategoryId",
		name: "Posts",
		component: ForumPosts,
	},
	{
		path: "/booking",
		name: "Booking",
		component: Booking,
	},
	{
		path: "/registerCommunityMember",
		name: "RegisterCommunityMember",
		component: RegisterCommunityMember,
	},
	{
		path: "/instructors",
		name: "Instructors",
		component: InstructorOverview,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
