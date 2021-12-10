import axios from "axios";

class BookingService {
	private baseURL = process.env.VUE_APP_API_BASEURL;

	public async getWorkouts(): Promise<IWorkout[]> {
		const controller = "Workout";
		return axios
			.get<IWorkout[]>(`${this.baseURL}/${controller}`)
			.then((response) => {
				return response.data;
			})
			.catch((error) => {
				return error;
			});
	}
}
export default new BookingService();
