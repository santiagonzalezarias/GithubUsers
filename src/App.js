import "./App.css";
import "antd/dist/antd.css";
//import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// Redux
import { Provider } from "react-redux";
import store from "./redux/Store";
import SearchUsers from "./components/SearchUsers";

function App() {
	return (
		<Provider store={store}>
			<Navbar />
			<SearchUsers />
		</Provider>
	);
}

export default App;
