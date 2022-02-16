import React from "react";
import { GithubOutlined, HeartOutlined } from "@ant-design/icons/lib/icons";

export default function Navbar() {
	return (
		<nav className="navbar navbar-dark bg-dark mb-6">
			<div className="container">
				<a className="navbar-brand" href="/">
					<GithubOutlined className="me-2" />
					Github Users Finder
				</a>
				<span style={{ color: "white" }}>
					By: &copy; Santiago González Arias - FullStack Developer
				</span>
			</div>
		</nav>
	);
}
