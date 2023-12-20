import "./App.css";
import CustomEditor from "./components/CustomEditor";

import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NewEntry from "./pages/NewEntry";
import PickDate from "./pages/PickDate";
import Life from "./pages/Life";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/new" element={<NewEntry />} />
				<Route path="/find" element={<PickDate />} />
				<Route path="/life" element={<Life />} />
			</Routes>
		</div>
	);
}

export default App;
