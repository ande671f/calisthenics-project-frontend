import axios from "axios";

class LoginService {
	private baseURL = process.env.VUE_APP_API_BASEURL;

	public async createForumMember(id: string, name: string, email: string): Promise<IForumMember> {
		const controller = "ForumMember";

		const forumMember: IForumMember = {
			forumMemberId: id,
			name: name,
			email: email,
			communityMember: null,
		};

		return axios
			.post(`${this.baseURL}/${controller}`, forumMember)
			.then((response) => {
				return response.data;
			})
			.catch((error) => {
				console.log(error);
			});
	}

	public async getForumMember(id: string): Promise<IForumMember[]> {
		const controller = "ForumMember";
		return axios
			.get<IForumMember[]>(`${this.baseURL}/${controller}/${id}`)
			.then((response) => {
				return response.data;
			})
			.catch((error) => {
				alert("Fejl: getForumMembers()");
				return error;
			});
	}
}

export default new LoginService();
