import axios from "axios";
import { v4 as uuidv4 } from "uuid";

class AdminService {
	private baseURL = process.env.VUE_APP_API_BASEURL;

	public async getForumMembers(): Promise<IForumMember[]> {
		const controller = "ForumMember";
		return axios
			.get<IForumMember[]>(`${this.baseURL}/${controller}`)
			.then((response) => {
				return response.data;
			})
			.catch((error) => {
				alert("Fejl: getForumMembers()");
				return error;
			});
	}

	public async deleteForumMember(id: string) {
		const controller = "ForumMember";
		axios
			.delete(`${this.baseURL}/${controller}/${id}`)
			.then(() => {
				console.log("Forum member has been deleted");
			})
			.catch((error) => {
				console.log(error);
			});
	}

	public async createCommunityMember(id: string): Promise<ICommunityMember> {
		const controller = "CommunityMember";
		const communityMember: ICommunityMember = {
			communityMemberId: uuidv4(),
			phoneNumber: "",
			address: "",
			postalCode: "",
			city: "",
			isInstructor: false,
			forumMemberId: id,

			workouts: null,
		};

		return axios
			.post(`${this.baseURL}/${controller}`, communityMember)
			.then((response) => {
				return response.data;
			})
			.catch((error) => {
				console.log(error);
			});
	}

	public async updateCommunityMember(communityMember: ICommunityMember) {
		const controller = "CommunityMember";
		return axios
			.put(`${this.baseURL}/${controller}`, communityMember)
			.then((response) => {
				return response.data;
			})
			.catch((error) => {
				console.log(error);
			});
	}

	public async deleteCommunityMember(id: string) {
		const controller = "CommunityMember";
		axios
			.delete(`${this.baseURL}/${controller}/${id}`)
			.then(() => {
				console.log("Community member has been deleted");
			})
			.catch((error) => {
				console.log(error);
			});
	}

	// Forum related:
	public async createForumCategory(id: string, title: string, description: string): Promise<IForumCategory> {
		const controller = "ForumCategory";
		const forumCategory: IForumCategory = {
			forumCategoryId: id,
			title: title,
			description: description,
		};

		return axios
			.post(`${this.baseURL}/${controller}`, forumCategory)
			.then((response) => {
				return response.data;
			})
			.catch((error) => {
				console.log(error);
			});
	}
}

export default new AdminService();
