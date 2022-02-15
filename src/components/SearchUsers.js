import React from "react";
// Redux
import { getUsers } from "../redux/slices/users";
import { useDispatch, useSelector } from "react-redux";
import Search from "antd/lib/input/Search";
import { Button } from "antd";

export default function SearchUsers() {
	const dispatch = useDispatch();
	const { users } = useSelector((state) => state.users);

	const onSearch = (value) => console.log(value);

	const getUsersFromGit = (username) => {
		dispatch(getUsers(username));
	};

	return (
		<>
			<Button type="primary">Hola</Button>
			<Search
				placeholder="input search text"
				onSearch={onSearch}
				enterButton
			/>
		</>
	);
}
