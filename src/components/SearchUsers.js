import React from "react";
// Redux
import { getUsers } from "../redux/slices/users";
import { useDispatch, useSelector } from "react-redux";
import Search from "antd/lib/input/Search";
import { useNavigate } from "react-router";

export default function SearchUsers() {
	const dispatch = useDispatch();
	const { list, isLoading } = useSelector((state) => state.users);
	const navigate = useNavigate();

	const onSearch = (value) => {
		dispatch(getUsers(value));
		navigate("/");
	};

	return (
		<div className="container">
			<Search
				placeholder="Ingrese nombre de usuario de GitHub"
				onSearch={onSearch}
				enterButton
				size="large"
				className="mt-5 mx-auto"
				required
			/>
		</div>
	);
}
