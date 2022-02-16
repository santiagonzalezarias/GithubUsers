import "./App.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import ListUsers from "./components/ListUsers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Router from "./routes/Router";
// Redux
import { Provider } from "react-redux";
import store from "./redux/Store";
import SearchUsers from "./components/SearchUsers";

function App() {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<Navbar />
				<SearchUsers />
				<Router />
			</Provider>
		</BrowserRouter>
	);
}

export default App;
