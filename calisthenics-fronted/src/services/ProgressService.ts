import axios from "axios";
import { v4 as uuidv4 } from "uuid";

class ProgressService {
	private baseURL = process.env.VUE_APP_API_BASEURL;

	public async createPersonalProgress(communityMemberId: string): Promise<IPersonalProgress> {
		const controller = "PersonalProgress";

		const personalProgress: IPersonalProgress = {
			personalProgressId: uuidv4(),
			height: 0.0,
			age: 0.0,
			gender: 1,
			communityMemberId: communityMemberId,
			weightListings: null,
		};

		return axios
			.post(`${this.baseURL}/${controller}`, personalProgress)
			.then((response) => {
				return response.data;
			})
			.catch((error) => {
				console.log(error);
			});
	}

	public async updatePersonalProgress(personalProgress: IPersonalProgress) {
		const controller = "PersonalProgress";
		console.log(personalProgress);
		return axios
			.put(`${this.baseURL}/${controller}/${personalProgress.personalProgressId}`, personalProgress)
			.then((response) => {
				return response.data;
			})
			.catch((error) => {
				console.log(error);
			});
	}

	public async createWeightListing(weight: number, personalProgressId: string): Promise<IPersonalProgress> {
		const controller = "WeightListing";

		const weightListing: IWeightListingPost = {
			weightListingId: uuidv4(),
			weight: weight,
			personalProgressId,
		};

		return axios
			.post(`${this.baseURL}/${controller}`, weightListing)
			.then((response) => {
				return response.data;
			})
			.catch((error) => {
				console.log(error);
			});
	}
}
export default new ProgressService();
