import axios from "axios";

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
}

export default new ForumService();
