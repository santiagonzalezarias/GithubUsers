import React from "react";
import { Route, Routes } from "react-router-dom";
import UserDetails from "../components/UserDetails";
import ListUsers from "../components/ListUsers";

export default function Router() {
	return (
		<Routes>
			<Route path="/" element={<ListUsers />} />
			<Route path="/:user" element={<UserDetails />} />
		</Routes>
	);
}
