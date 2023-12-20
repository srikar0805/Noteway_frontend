import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const PickDate = () => {
	const [date, setDate] = useState(null);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const submitHandler = async () => {
		console.log(date);
		const response = await axios.post("https://srikar-noteway.onrender.com/find", {
			date,
		});
		console.log(response);

		dispatch({ type: "save_entries", entries: response.data });

		navigate("/life");
	};

	return (
		<div>
			<Navbar />
			<p>Pick a date</p>
			<div>
				<Calendar
					value={date}
					onChange={(e) => setDate(e.value)}
					dateFormat="dd/mm/yy"
					showButtonBar
				/>
			</div>
			<div
				className="card flex justify-content-center"
				style={{ marginTop: 25 }}>
				<Button label="Submit" onClick={submitHandler} />
			</div>
		</div>
	);
};

export default PickDate;
