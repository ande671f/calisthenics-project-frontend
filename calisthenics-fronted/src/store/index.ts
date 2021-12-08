import LoginService from "@/services/LoginService";
import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

export interface State {
	forumMember: IForumMember | null;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
	state: {
		forumMember: null,
	},
	mutations: {
		setForumMember(state, val) {
			state.forumMember = val;
		},
	},
	actions: {
		async getForumMember({ commit }, id: string) {
			LoginService.getForumMember(id)
				.then((response) => {
					commit("setForumMember", response);
				})
				.catch((error) => {
					console.log("Fejl ved lagring af forum medlem i store");
				});
		},
	},
});
