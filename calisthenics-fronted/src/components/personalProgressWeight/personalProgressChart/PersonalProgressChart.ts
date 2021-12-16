import { CategoryScale, Chart, LinearScale, LineController, LineElement, PointElement } from "chart.js";
import { computed, defineComponent, ref } from "vue";
import { LineChart } from "vue-chart-3";

Chart.register(LineController, CategoryScale, PointElement, LinearScale, LineElement);

export default defineComponent({
	props: {
		weightListings: Object as () => IWeightListing[],
	},
	components: {
		LineChart,
	},
	setup(props) {
		const weightListings = ref<IWeightListing[]>(props.weightListings!);

		const labels = ref<string[]>([]);
		const values = ref<number[]>([]);

		const calc = () => {
			if (weightListings.value != null) {
				weightListings.value.forEach((weightListing) => {
					labels.value.push(weightListing.date!);
					values.value.push(weightListing.weight);
				});
			}
		};

		const data = computed(
			() => (
				calc(),
				{
					labels: labels.value,
					datasets: [
						{
							label: "Vægt m. dato",
							data: values.value,
							backgroundColor: [
								"rgba(255, 99, 132, 0.2)",
								"rgba(54, 162, 235, 0.2)",
								"rgba(255, 206, 86, 0.2)",
								"rgba(75, 192, 192, 0.2)",
								"rgba(153, 102, 255, 0.2)",
								"rgba(255, 159, 64, 0.2)",
							],
							borderColor: [
								"rgba(255, 99, 132, 1)",
								"rgba(54, 162, 235, 1)",
								"rgba(255, 206, 86, 1)",
								"rgba(75, 192, 192, 1)",
								"rgba(153, 102, 255, 1)",
								"rgba(255, 159, 64, 1)",
							],
							borderWidth: 1,
						},
					],
				}
			)
		);

		const options = ref({
			scales: {
				y: {
					beginAtZero: true,
				},
			},
		});

		return {
			data,
			options,
		};
	},
});
