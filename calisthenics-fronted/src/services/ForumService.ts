import axios from "axios";
import { v4 as uuidv4 } from "uuid";

class ForumService {
	private baseURL = process.env.VUE_APP_API_BASEURL;

	public async getCategories(): Promise<IForumCategory[]> {
		const controller = "ForumCategory";

		return axios
			.get<IForumCategory[]>(`${this.baseURL}/${controller}`)
			.then((response) => {
				return response.data;
			})
			.catch((error) => {
				return error;
			});
	}

	public async getPosts(): Promise<IForumPost[]> {
		const controller = "ForumPost";

		return axios
			.get<IForumPost[]>(`${this.baseURL}/${controller}`)
			.then((response) => {
				return response.data;
			})
			.catch((error) => {
				return error;
			});
	}

	public async getForumPostsByCategoryId(categoryId: string): Promise<IForumPost[]> {
		const controller = "Forumpost";

		return axios
			.get<IForumPost[]>(`${this.baseURL}/${controller}/getForumPostsByCategoryId/${categoryId}`)
			.then((response) => {
				return response.data;
			})
			.catch((error) => {
				return error;
			});
	}

	public async getForumPost(forumPostId: string): Promise<IForumPost> {
		const controller = "ForumPost";

		return axios
			.get<IForumPost>(`${this.baseURL}/${controller}/${forumPostId}`)
			.then((response) => {
				return response.data;
			})
			.catch((error) => {
				return error;
			});
	}

	public async createForumComment(
		forumMemberId: string,
		description: string,
		forumPostId: string
	): Promise<IForumComment> {
		const controller = "ForumComment";
		const date = new Date();
		console.log("jeg er kaldt create");
		const forumComment: IForumComment = {
			forumMemberId: forumMemberId,
			forumMember: null,
			forumCommentId: uuidv4(),
			description: description,
			date: date,
			forumPostId: forumPostId,
		};

		return axios
			.post(`${this.baseURL}/${controller}`, forumComment)
			.then((response) => {
				return response.data;
			})
			.catch((error) => {
				console.log(error);
			});
	}

	public async getForumCommentsByPostId(postId: string): Promise<IForumComment[]> {
		const controller = "ForumComment";
		console.log("jeg er kaldt");

		return axios
			.get<IForumComment[]>(`${this.baseURL}/${controller}/getForumCommentsByPostId/${postId}`)
			.then((response) => {
				return response.data;
			})
			.catch((error) => {
				return error;
			});
	}
}

export default new ForumService();
