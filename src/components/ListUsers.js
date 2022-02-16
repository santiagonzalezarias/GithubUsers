import React from "react";
import { GithubOutlined } from "@ant-design/icons/lib/icons";

import { useNavigate } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { Card, Spin, Alert } from "antd";

export default function ListUsers() {
	const dispatch = useDispatch();
	const { list, isLoading } = useSelector((state) => state.users);
	const { Meta } = Card;
	const navigate = useNavigate();

	const cardClick = (username) => {
		navigate(`/${username}`);
	};

	return (
		<Spin size="=large" tip="Cargando..." spinning={isLoading} delay={500}>
			{list.length === 0 && (
				<Alert
					message="No se encontraron usuarios"
					description="No se encontraron coicidencias de usuarios con este nombre"
					type="error"
					showIcon
					closable={true}
					style={{ width: "50%", margin: "20px" }}
				/>
			)}

			<div className="mt-5 container ">
				<div className="row gap-5 ">
					{list.map((user, index) => {
						return (
							<Card
								className="mx-auto"
								onClick={() => cardClick(user.login)}
								key={index}
								hoverable
								style={{ width: "220px" }}
								cover={
									<img
										alt={user.login}
										src={user.avatar_url}
									/>
								}
							>
								<Meta
									title={
										<span>
											<GithubOutlined
												style={{ padding: "10px" }}
											/>{" "}
											<span>{user.login}</span>
										</span>
									}
								/>
							</Card>
						);
					})}
				</div>
			</div>
		</Spin>
	);
}
