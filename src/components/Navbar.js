import React from "react";
import { GithubOutlined } from "@ant-design/icons/lib/icons";

export default function Navbar() {
	return (
		<nav className="navbar navbar-dark bg-primary">
			<div className="container">
				<a className="navbar-brand" href="/">
					<GithubOutlined className="me-2" />
					GitHub Users Search
				</a>
			</div>
		</nav>
	);
}
