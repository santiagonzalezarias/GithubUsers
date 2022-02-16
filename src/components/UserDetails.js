import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../redux/slices/users";
import { Spin, Divider, Avatar, Button, Card } from "antd";
import {
	EyeOutlined,
	StarOutlined,
	BranchesOutlined,
	DribbbleOutlined,
} from "@ant-design/icons/lib/icons";

export default function UserDetails() {
	const params = useParams();
	const dispatch = useDispatch();
	const { list, isLoading, userInfo, userRepos, userOrg } = useSelector(
		(state) => state.users
	);

	const { Meta } = Card;

	useEffect(() => {
		dispatch(getUserInfo(params.user));
	}, [params.user, dispatch]);

	return (
		<Spin size="=large" tip="Cargando..." spinning={isLoading} delay={500}>
			<div className="m-5">
				<Divider style={{ background: "gray" }} />

				<div style={{ display: "flex" }}>
					<div>
						<Avatar size={150} src={userInfo.avatar_url} />
					</div>

					<div
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							marginLeft: "20px",
						}}
					>
						<div>
							<h2>
								<strong>{userInfo.name}</strong>
							</h2>
						</div>

						<div style={{ color: "gray", fontSize: "20px" }}>
							{userInfo.login}
						</div>

						<div>
							<a href={userInfo.html_url} target="__blank">
								<Button
									type="primary"
									icon={<EyeOutlined />}
									shape="round"
									style={{ marginTop: "10px" }}
								>
									Ver perfil
								</Button>
							</a>
						</div>
					</div>
				</div>

				<Divider style={{ background: "gray" }} />

				<h1>
					<BranchesOutlined /> Repos
				</h1>
				<Divider style={{ background: "gray" }} />
				<div className="mt-5 container">
					<div className="row gap-4">
						{userRepos.map((repo, index) => {
							return (
								<Card
									key={index}
									hoverable
									style={{
										width: 350,
										border: "1px solid gray",
									}}
									className="mx-auto"
									onClick={() =>
										(window.location.href = repo.html_url)
									}
									title={repo.name}
									extra={
										<Button shape="round">
											{repo.visibility}
										</Button>
									}
								>
									<p>{repo.description}</p>
									<p className="text-primary">
										<StarOutlined /> {repo.language}
									</p>
								</Card>
							);
						})}
					</div>
				</div>

				<Divider style={{ background: "gray" }} />
				<h1 className="mt-4">
					<DribbbleOutlined /> Organizaciones
				</h1>
				<Divider style={{ background: "gray" }} />
				<div className="mt-5 container ">
					<div className="row gap-5 ">
						{userOrg.map((org, index) => {
							return (
								<Card
									className="mx-auto"
									key={index}
									hoverable
									style={{ width: "220px" }}
									cover={
										<img
											alt={org.login}
											src={org.avatar_url}
										/>
									}
								>
									<Meta title={org.description} />
								</Card>
							);
						})}
					</div>
				</div>
			</div>
		</Spin>
	);
}
