import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userSlice = createSlice({
	name: "users",
	initialState: {
		users: [],
	},

	reducers: {
		setUserList: (state, action) => {
			state.users = action.payload;
		},
	},
});

export const { setUserList } = userSlice.actions;

export default userSlice.reducer;

export const getUsers = (username) => async (dispatch) => {
	try {
		const response = await axios.get(
			`https://api.github.com/search/users?q=${username}`
		);

		dispatch(setUserList(response.data));
	} catch (error) {
		console.log(error);
	}
};
