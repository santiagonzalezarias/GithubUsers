import React, { useEffect } from "react";

import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../redux/slices/users";
import { Spin } from "antd";

export default function UserDetails() {
	const params = useParams();
	const dispatch = useDispatch();
	const { list, isLoading, userInfo, userRepos, userOrg } = useSelector(
		(state) => state.users
	);

	useEffect(() => {
		dispatch(getUserInfo(params.user));
	});

	return (
		<Spin size="=large" tip="Cargando..." spinning={isLoading} delay={500}>
			<h1>Info</h1>
			<div>Username: {userInfo.login}</div>
			<div>Seguidores: {userInfo.followers}</div>

			<h1>Repos</h1>
			{userRepos.map((repo, index) => {
				return <div key={index}>{repo.name}</div>;
			})}

			<h1>Organizaciones</h1>
			{userOrg.map((org, index) => {
				return <div key={index}>{org.login}</div>;
			})}
		</Spin>
	);
}
