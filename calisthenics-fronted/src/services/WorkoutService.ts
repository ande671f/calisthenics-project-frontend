import axios from "axios";
import { v4 as uuidv4 } from "uuid";

class WorkoutService {
	private baseURL = process.env.VUE_APP_API_BASEURL;

	public async joinWorkout(workout: IWorkout) {
		const controller = "Workout";

		return axios
			.put(`${this.baseURL}/${controller}`, workout)
			.then((response) => {
				return response.data;
			})
			.catch((error) => {
				console.log(error);
			});
	}

	public async createWorkout(
		date: Date,
		workoutType: IWorkoutType,
		workoutLocation: IWorkoutLocation
	): Promise<IWorkout> {
		const controller = "Workout";
		const workout: IWorkoutPost = {
			workoutId: uuidv4(),
			date: date,
			workoutTypeId: workoutType.workoutTypeId,
			workoutLocationId: workoutLocation.workoutLocationId,

			communityMembers: null,
			communityMemberWorkouts: null,
		};

		return axios
			.post(`${this.baseURL}/${controller}`, workout)
			.then((response) => {
				return response.data;
			})
			.catch((error) => {
				console.log(error);
			});
	}

	public async getWorkout(id: string): Promise<IWorkout> {
		const controller = "Workout";
		return axios
			.get<IWorkout>(`${this.baseURL}/${controller}/${id}`)
			.then((response) => {
				return response.data;
			})
			.catch((error) => {
				return error;
			});
	}

	public async createWorkoutType(title: string, description: string): Promise<IWorkoutType> {
		const controller = "WorkoutType";

		const workoutType: IWorkoutType = {
			workoutTypeId: uuidv4(),
			title: title,
			description: description,
		};

		return axios
			.post(`${this.baseURL}/${controller}`, workoutType)
			.then((response) => {
				return response.data;
			})
			.catch((error) => {
				console.log(error);
			});
	}

	public async getWorkoutTypes(): Promise<IWorkoutType[]> {
		const controller = "WorkoutType";
		return axios
			.get<IWorkoutType[]>(`${this.baseURL}/${controller}`)
			.then((response) => {
				return response.data;
			})
			.catch((error) => {
				return error;
			});
	}

	public async createWorkoutLocation(
		city: string,
		address: string,
		zip: string,
		description: string
	): Promise<IWorkoutLocation> {
		const controller = "WorkoutLocation";

		const workoutLocation: IWorkoutLocation = {
			workoutLocationId: uuidv4(),
			city: city,
			address: address,
			zip: zip,
			description: description,
		};

		return axios
			.post(`${this.baseURL}/${controller}`, workoutLocation)
			.then((response) => {
				return response.data;
			})
			.catch((error) => {
				console.log(error);
			});
	}

	public async getWorkoutLocations(): Promise<IWorkoutLocation[]> {
		const controller = "WorkoutLocation";
		return axios
			.get<IWorkoutLocation[]>(`${this.baseURL}/${controller}`)
			.then((response) => {
				return response.data;
			})
			.catch((error) => {
				return error;
			});
	}
}

export default new WorkoutService();
