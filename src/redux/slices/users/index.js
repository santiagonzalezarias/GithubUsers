import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userSlice = createSlice({
	name: "users",
	initialState: {
		list: [],
		isLoading: false,
		userInfo: {},
		userRepos: [],
		userOrg: [],
	},

	reducers: {
		setUserList: (state, action) => {
			state.list = action.payload;
		},
		setIsLoading: (state, action) => {
			state.isLoading = action.payload;
		},
		setUserInfo: (state, action) => {
			state.userInfo = action.payload;
		},
		setUserRepos: (state, action) => {
			state.userRepos = action.payload;
		},
		setUserOrg: (state, action) => {
			state.userOrg = action.payload;
		},
	},
});

export const {
	setUserList,
	setIsLoading,
	setUserInfo,
	setUserOrg,
	setUserRepos,
} = userSlice.actions;

export default userSlice.reducer;

export const getUsers = (username) => async (dispatch) => {
	const delay = (millis) =>
		new Promise((resolve, reject) => {
			setTimeout(resolve, millis);
		});

	try {
		dispatch(setIsLoading(true));
		const response = await axios.get(
			`https://api.github.com/search/users?q=${username}`
		);
		await delay(1500);
		dispatch(setUserList(response.data.items));
	} catch (error) {
		console.log(error);
	} finally {
		dispatch(setIsLoading(false));
	}
};

export const getUserInfo = (username) => async (dispatch) => {
	try {
		dispatch(setIsLoading(true));
		const responseInfo = await axios.get(
			`https://api.github.com/users/${username}`
		);
		dispatch(setUserInfo(responseInfo.data));

		const responseRepos = await axios.get(
			`https://api.github.com/users/${username}/repos`
		);
		dispatch(setUserRepos(responseRepos.data));

		const responseOrg = await axios.get(
			`https://api.github.com/users/${username}/orgs`
		);
		dispatch(setUserOrg(responseOrg.data));
	} catch (error) {
		console.log(error);
	} finally {
		dispatch(setIsLoading(false));
	}
};
