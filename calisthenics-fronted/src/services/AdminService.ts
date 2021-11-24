import axios from "axios";

class AdminService {
	private baseURL = process.env.VUE_APP_API_BASEURL;
	private controller = "ForumMember";

	public async getForumMembers(): Promise<IForumMember[]> {
		return axios
			.get<IForumMember[]>(`${this.baseURL}/${this.controller}`)
			.then((response) => {
				return response.data;
			})
			.catch((error) => {
				alert("Fejl: getForumMembers()");
				return error;
			});
	}
}

export default new AdminService();
